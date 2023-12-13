import CustomInput from '@/components/form/customInput';
import CustomSelect, {
  CustomSelectOption,
} from '@/components/form/customSelect';
import UploadImage from '@/components/form/uploadImage';
import { SafeUser } from '@/types';
import { Genre } from '@prisma/client';
import Image from 'next/image';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface GeneralInfoProps {
  activeTab?: number;
  currentUser: SafeUser | null;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  isLoading: boolean;
  setCustomValue: (id: string, value: unknown) => void;
  avatar: string;
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({
  activeTab,
  currentUser,
  errors,
  register,
  isLoading,
  setCustomValue,
  avatar,
}) => {
  const genreOptions: CustomSelectOption[] = [
    {
      label: 'Masculino',
      value: Genre.MASCULINO,
    },
    {
      label: 'Feminino',
      value: Genre.FEMININO,
    },
  ];
  const genreDefaultValue =
    genreOptions.find((genre) => genre.value === currentUser?.genre) || null;

  return (
    <div
      className={`flex flex-col gap-y-5 ${
        activeTab === 1 ? 'block' : 'hidden'
      }`}
    >
      <div className='bg-appBg p-5 rounded flex flex-col items-center'>
        <Image
          className='rounded-full'
          alt={currentUser?.name || 'Avatar'}
          src={currentUser?.avatar || '/images/avatar.jpg'}
          width={80}
          height={80}
        />
        <h3 className='text-textTitle font-bold text-[18px] pt-2'>
          {currentUser?.name}
        </h3>
        <h4 className='text-textBody'>{currentUser?.email}</h4>
        <UploadImage
          disabled={isLoading}
          value={avatar}
          onChange={(value) => setCustomValue('avatar', value)}
        />
      </div>
      <div className='flex flex-col gap-y-5 lg:flex-row xl:flex-col 2xl:flex-row lg:gap-x-5'>
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
      <div className='flex flex-col gap-y-5 lg:flex-row xl:flex-col 2xl:flex-row lg:gap-x-5'>
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
      <div className='flex flex-col gap-y-5 lg:flex-row xl:flex-col 2xl:flex-row lg:gap-x-5'>
        <CustomSelect
          disabled={isLoading}
          label='Género'
          name='genre'
          required
          onChange={(value) => {
            setCustomValue('genre', value);
          }}
          value={genreDefaultValue}
          register={register}
          options={genreOptions}
          instanceId='genre'
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
    </div>
  );
};

export default GeneralInfo;
