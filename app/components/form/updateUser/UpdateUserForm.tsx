'use client';

import axios, { isAxiosError } from 'axios';
import { SafeUser } from '@/types';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { formatDateForInput } from '@/utils';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import GeneralInfo from '../../../(dashboard)/usuario/perfil/generalInfo';
import AddressInfo from '../../../(dashboard)/usuario/perfil/addressInfo';
import CustomForm from '@/components/form/CustomForm';
import CustomButton from '@/components/customButton';
import ResetPassword from '../../../(dashboard)/usuario/perfil/resetPassword';

interface UpdateUserFormProps {
  currentUser: SafeUser | null;
  activeTab?: number;
}

const UpdateUserForm: React.FC<UpdateUserFormProps> = (props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      name: props.currentUser?.name,
      email: props.currentUser?.email,
      telephone: props.currentUser?.telephone,
      address: props.currentUser?.address,
      profission: props.currentUser?.profission,
      birthDate: formatDateForInput(props.currentUser?.birthDate),
      genre: props.currentUser?.genre,
      province: props.currentUser?.province,
      county: props.currentUser?.county,
      avatar: props.currentUser?.avatar,
    },
  });

  const avatar = watch('avatar');

  const setCustomValue = (id: string, value: unknown) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const handleSubmitForm: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    axios
      .post('/api/user/update', data)
      .then(() => {
        toast.success('Dados actualizados com sucesso.');
        router.refresh();
      })
      .catch((error: unknown) => {
        if (isAxiosError(error)) {
          const { response } = error;
          const message = response?.data.message;
          toast.error(message);
        } else {
          toast.error('Algo correu mal. Tente novamente.');
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
          activeTab={props.activeTab}
          avatar={avatar}
          currentUser={props.currentUser}
          errors={errors}
          isLoading={isLoading}
          register={register}
          setCustomValue={setCustomValue}
        />
        <AddressInfo
          activeTab={props.activeTab}
          errors={errors}
          isLoading={isLoading}
          register={register}
          currentUser={props.currentUser}
          setCustomValue={setCustomValue}
        />
        <ResetPassword
          activeTab={props.activeTab}
          errors={errors}
          isLoading={isLoading}
          register={register}
        />
        <div className='mt-5'>
          <CustomButton
            label='Actualizar dados'
            disabled={isLoading}
            spinner={isLoading}
            handleClick={handleSubmit(handleSubmitForm)}
          />
        </div>
      </CustomForm>
    </>
  );
};

export default UpdateUserForm;
