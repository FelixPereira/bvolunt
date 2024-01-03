'use client';

import axios, { isAxiosError } from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { SafeSocialOrg } from '@/types';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import CustomForm from '../CustomForm';
import CustomButton from '@/components/customButton';
import GeneralInfo from '@/(dashboard)/organizacao/perfil/generalInfo';
import AddressInfo from '@/(dashboard)/organizacao/perfil/addressInfo';
import ResetPassword from '@/(dashboard)/_components/resetPassword';

interface UpdateOrgFormProps {
  currentOrg: SafeSocialOrg | null;
  activeTab?: number;
}

const UpdateOrgForm: React.FC<UpdateOrgFormProps> = (props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors, dirtyFields },
  } = useForm<FieldValues>({
    defaultValues: {
      name: props.currentOrg?.name,
      email: props.currentOrg?.email,
      telephone: props.currentOrg?.telephone,
      province: props.currentOrg?.province,
      county: props.currentOrg?.county,
      responsibleName: props.currentOrg?.responsibleName,
      responsibleEmail: props.currentOrg?.responsibleEmail,
      responsiblePhone: props.currentOrg?.responsiblePhone,
      address: props.currentOrg?.address,
      description: props.currentOrg?.description,
      avatar: props.currentOrg?.avatar,
      coverImage: props.currentOrg?.coverImage,
    },
  });

  const avatar = watch('avatar');
  const coverImage = watch('coverImage');

  const setCustomValue = (id: string, value: unknown) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldValidate: true,
      shouldTouch: true,
    });
  };

  const handleSubmitForm: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    axios
      .post('/api/social-organizations/update', data)
      .then(() => {
        toast.success('Dados actualizados com sucesso');
        router.refresh();
      })
      .catch((error: unknown) => {
        if (isAxiosError(error)) {
          const { response } = error;
          const errorMessage = response?.data.message;
          toast.error(errorMessage);
        } else {
          toast.error('Algo correu mal. Tente novamente');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <CustomForm>
        <GeneralInfo
          avatar={avatar}
          coverImage={coverImage}
          currentOrg={props.currentOrg}
          errors={errors}
          isLoading={isLoading}
          register={register}
          setCustomValue={setCustomValue}
          activeTab={props.activeTab}
        />
        <AddressInfo
          activeTab={props.activeTab}
          errors={errors}
          isLoading={isLoading}
          register={register}
          currentOrg={props.currentOrg}
          setCustomValue={setCustomValue}
        />
      </CustomForm>
      {props.activeTab !== 3 ? (
        <div className='mt-5'>
          <CustomButton
            handleClick={handleSubmit(handleSubmitForm)}
            label='Actualizar dados'
            disabled={isLoading || !Object.keys(dirtyFields).length}
            spinner={isLoading}
          />
        </div>
      ) : null}
      <ResetPassword activeTab={props.activeTab} />
    </>
  );
};

export default UpdateOrgForm;
