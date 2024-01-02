import CustomInput from '@/components/form/customInput';
import CustomTextArea from '@/components/form/customTextArea';
import UploadImage from '@/components/form/uploadImage';
import { SafeSocialOrg } from '@/types';
import Image from 'next/image';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface GeneralInfoProps {
  activeTab?: number;
  currentOrg: SafeSocialOrg | null;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  isLoading: boolean;
  setCustomValue: (id: string, value: unknown) => void;
  avatar: string;
  coverImage: string;
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({
  avatar,
  coverImage,
  currentOrg,
  errors,
  isLoading,
  register,
  setCustomValue,
  activeTab,
}) => {
  console.log(currentOrg?.avatar);
  return (
    <div
      className={`flex flex-col gap-y-5 ${
        activeTab === 1 ? 'block' : 'hidden'
      }`}
    >
      <div className='flex flex-col gap-x-5 bg-appBg rounded-md p-5 mb-5'>
        <div className='max-w-[300px]'>
          <Image
            className='mb-4 rounded-md'
            alt={currentOrg?.name || 'Avatar'}
            src={currentOrg?.coverImage || '/images/img-placeholder.jpg'}
            width={500}
            height={200}
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
            src={currentOrg?.avatar || '/images/avatar.jpg'}
            width={130}
            height={70}
          />
          <UploadImage
            disabled={isLoading}
            label='Logotipo'
            value={avatar}
            onChange={(value) => setCustomValue('avatar', value)}
          />
        </div>
      </div>
      <div className='flex flex-col gap-y-5 lg:flex-row xl:flex-col 2xl:flex-row lg:gap-x-5'>
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
          id='responsibleName'
          label='Nome do responsável'
          register={register}
          errors={errors}
          required={true}
          disabled={isLoading}
        />
      </div>
      <div className='flex flex-col gap-y-5 lg:flex-row xl:flex-col 2xl:flex-row lg:gap-x-5'>
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
      <div className='flex flex-col gap-y-5 lg:flex-row xl:flex-col 2xl:flex-row lg:gap-x-5'>
        <CustomTextArea
          disabled={isLoading}
          id='description'
          label='Descrição'
          register={register}
          required
          errors={errors}
        />
      </div>
    </div>
  );
};

export default GeneralInfo;
