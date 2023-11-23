'use client';

import axios, { isAxiosError } from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { SafeSocialOrg } from '@/types';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import Image from 'next/image';
import UploadImage from '../uploadImage';
import CustomForm from '../CustomForm';
import CustomInput from '../customInput';
import CustomButton from '@/components/customButton';
import CustomSelect, { CustomSelectOption } from '../customSelect';
import { useGetCounties } from '@/hooks/useGetCounties';
import { provinceOptions } from '@/data';

interface ProfileFormProps {
  currentOrg: SafeSocialOrg | null;
}

const UpdateOrgProfileForm: React.FC<ProfileFormProps> = ({ currentOrg }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: currentOrg?.name,
      email: currentOrg?.email,
      telephone: currentOrg?.telephone,
      province: currentOrg?.province,
      county: currentOrg?.county,
      responsibleName: currentOrg?.responsibleName,
      responsibleEmail: currentOrg?.responsibleEmail,
      responsiblePhone: currentOrg?.responsiblePhone,
      address: currentOrg?.address,
      description: currentOrg?.description,
      avatar: currentOrg?.avatar,
      coverImage: currentOrg?.coverImage,
    },
  });

  const { counties: countyOptions, getCountiesByState } = useGetCounties();

  const avatar = watch('avatar');
  const coverImage = watch('coverImage');
  const province = watch('province');
  const county = watch('county');

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
    <div className='mt-5'>
      <div className='max-w-[300px]'>
        <Image
          className='mb-4 rounded-sm'
          alt={currentOrg?.name || 'Avatar'}
          src={coverImage || '/images/img-placeholder.jpg'}
          width={120}
          height={80}
        />
        <UploadImage
          disabled={isLoading}
          label='Imagem de capa'
          value={coverImage}
          onChange={(value) => setCustomValue('coverImage', value)}
        />
      </div>
      <div className='max-w-[300px] mt-10'>
        <Image
          className='mb-4'
          alt={currentOrg?.name || 'Avatar'}
          src={avatar || '/images/avatar.jpg'}
          width={120}
          height={80}
        />
        <UploadImage
          disabled={isLoading}
          label='Logotipo'
          value={avatar}
          onChange={(value) => setCustomValue('avatar', value)}
        />
      </div>

      <CustomForm>
        <div className='flex gap-x-5'>
          <CustomInput
            id='name'
            label='Nome'
            register={register}
            errors={errors}
            required={true}
            disabled={isLoading}
          />
          <CustomInput
            id='email'
            label='Email'
            register={register}
            errors={errors}
            required={true}
            disabled={isLoading}
          />
          <CustomInput
            id='telephone'
            label='Telefone'
            register={register}
            errors={errors}
            required={true}
            disabled={isLoading}
          />
        </div>
        <div className='flex gap-x-5'>
          <CustomSelect
            disabled={isLoading}
            label='Província'
            name='province'
            required
            onChange={(value) => {
              setCustomValue('province', value);
            }}
            value={province}
            register={register}
            options={provinceOptions}
            getCountiesByState={getCountiesByState}
          />
          <CustomSelect
            disabled={isLoading}
            label='Município'
            name='county'
            required
            onChange={(value) => {
              setCustomValue('county', value);
            }}
            value={county}
            register={register}
            options={countyOptions}
          />

          <CustomInput
            id='address'
            label='Endereço'
            register={register}
            errors={errors}
            required={true}
            disabled={isLoading}
          />
        </div>
        <div className='flex gap-x-5'>
          <CustomInput
            id='responsibleName'
            label='Nome do responsável'
            register={register}
            errors={errors}
            required={true}
            disabled={isLoading}
          />
          <CustomInput
            id='responsiblePhone'
            label='Telefone do responsável'
            register={register}
            errors={errors}
            required={true}
            disabled={isLoading}
          />
          <CustomInput
            id='responsibleEmail'
            label='Email do responsável'
            register={register}
            errors={errors}
            required={true}
            disabled={isLoading}
          />
        </div>
        <div className='flex gap-x-5 max-w-[50%]'>
          <CustomInput
            id='description'
            label='Descrição'
            register={register}
            errors={errors}
            required={true}
            disabled={isLoading}
          />
        </div>
      </CustomForm>
      <div className='mt-5'>
        <CustomButton
          label='Actualizar dados'
          disabled={isLoading}
          spinner={isLoading}
          handleClick={handleSubmit(handleSubmitForm)}
        />
      </div>
    </div>
  );
};

export default UpdateOrgProfileForm;
