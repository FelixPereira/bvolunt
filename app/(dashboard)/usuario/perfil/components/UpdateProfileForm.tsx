'use client';

import Image from 'next/image';
import CustomForm from '@/components/form/CustomForm';
import CustomInput from '@/components/form/customInput';
import CustomSelect from '@/components/form/customSelect';
import UploadImage from '@/components/form/uploadImage';
import CustomButton from '@/components/customButton';
import { SafeUser } from '@/types';
import { CustomSelectOption } from '@/components/form/customSelect';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { formatDateForInput } from '@/utils';

interface ProfileFormProps {
  currentUser: SafeUser | null;
}

const UpdateProfileForm: React.FC<ProfileFormProps> = ({ currentUser }) => {
  const isLoading = false;
  const genreOption: CustomSelectOption[] = [
    {
      label: 'Masculino',
      value: 'Masculino',
    },
    {
      label: 'Feminino',
      value: 'Feminino',
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      name: currentUser?.name,
      email: currentUser?.email,
      telephone: currentUser?.telephone,
      address: currentUser?.address,
      profission: currentUser?.profission,
      birthDate: formatDateForInput(currentUser?.birthDate),
      genre: currentUser?.genre,
      province: currentUser?.province,
      county: currentUser?.county,
      avatar: currentUser?.avatar,
    },
  });

  const avatar = watch('avatar');
  const genre = watch('genre');

  const setCustomValue = (id: string, value: unknown) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const handleSubmitForm: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };

  return (
    <div className='mt-5 max-w-[80%]'>
      <div>
        <Image
          className='rounded-full'
          alt={currentUser?.name || 'Avatar'}
          src={currentUser?.avatar || '/images/avatar.jpg'}
          width={80}
          height={80}
        />
        <UploadImage disabled label='Fotografia' onChange={() => {}} value='' />
      </div>
      <CustomForm>
        <div className='flex gap-x-5'>
          <CustomInput
            id='name'
            label='Nome completo'
            register={register}
            errors={errors}
            required={true}
            disabled={isLoading}
          />
          <CustomInput
            id='email'
            label='Email'
            type='email'
            register={register}
            errors={errors}
            required={true}
            disabled={isLoading}
          />
        </div>
        <div className='flex gap-x-5'>
          <CustomInput
            id='telephone'
            label='Telefone'
            register={register}
            errors={errors}
            required={true}
            disabled={isLoading}
          />
          <CustomInput
            id='profission'
            label='Profissão'
            register={register}
            errors={errors}
            required={true}
            disabled={isLoading}
          />
        </div>
        <div className='flex gap-x-5'>
          <CustomSelect
            disabled={false}
            label='Género'
            name='genre'
            required
            onChange={(value) => {
              setCustomValue('genre', value);
            }}
            value={genre}
            register={register}
            options={genreOption}
          />
          <CustomInput
            id='birthDate'
            label='Data de nascimento'
            register={register}
            errors={errors}
            required={true}
            disabled={isLoading}
            type='date'
          />
        </div>
        <div className='flex gap-x-5'>
          <CustomInput
            id='province'
            label='Província'
            register={register}
            errors={errors}
            required={true}
            disabled={isLoading}
          />
          <CustomInput
            id='county'
            label='Município'
            register={register}
            errors={errors}
            required={true}
            disabled={isLoading}
          />
        </div>
        <div className='flex gap-x-5'>
          <CustomInput
            id='address'
            label='Endereço'
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
          disabled={false}
          spinner={false}
          handleClick={handleSubmit(handleSubmitForm)}
        />
      </div>
    </div>
  );
};

export default UpdateProfileForm;
