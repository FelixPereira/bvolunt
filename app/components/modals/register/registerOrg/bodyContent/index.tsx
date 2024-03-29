import CustomForm from '@/components/form/CustomForm';
import CustomInput from '@/components/form/customInput';
import CustomSelect, {
  CustomSelectOption,
} from '@/components/form/customSelect';
import { FieldValues, FieldErrors, UseFormRegister } from 'react-hook-form';
import { useGetCounties } from '@/hooks/useGetCounties';
import UploadImage from '@/components/form/uploadImage';
import { provinceOptions } from '@/data';
import { useState } from 'react';
import PasswordInput from '@/components/form/passwordInput';

interface SocialOrgFormProps {
  isLoading: boolean;
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
  setCustomValue: (id: string, value: unknown) => void;
  province: CustomSelectOption;
  county: CustomSelectOption;
  coverImage: string;
  avatar: string;
}

const SocialOrgForm: React.FC<SocialOrgFormProps> = ({
  isLoading,
  errors,
  register,
  setCustomValue,
  province,
  county,
  coverImage,
  avatar,
}) => {
  const [countyOptions, setCounties] = useState<CustomSelectOption[]>([]);
  const { getCountiesByState } = useGetCounties(setCounties);

  return (
    <CustomForm>
      <CustomInput
        disabled={isLoading}
        errors={errors}
        id='name'
        label='Nome'
        register={register}
        required
      />
      <CustomInput
        disabled={isLoading}
        errors={errors}
        id='email'
        label='Email'
        register={register}
        required
      />
      <CustomInput
        disabled={isLoading}
        errors={errors}
        id='telephone'
        label='Telefone'
        register={register}
        required
      />
      <CustomInput
        disabled={isLoading}
        errors={errors}
        id='responsibleName'
        label='Nome do responsável'
        register={register}
        required
      />
      <CustomInput
        disabled={isLoading}
        errors={errors}
        id='responsibleEmail'
        label='Email do responsável'
        register={register}
        required
      />
      <CustomInput
        disabled={isLoading}
        errors={errors}
        id='responsiblePhone'
        label='Telefone do responsável'
        register={register}
        required
      />
      <CustomSelect
        register={register}
        disabled={isLoading}
        label='Província'
        name='province'
        onChange={(value) => setCustomValue('province', value)}
        value={province}
        options={provinceOptions}
        getCountiesByState={getCountiesByState}
        required
        instanceId='province'
      />
      <CustomSelect
        register={register}
        disabled={isLoading}
        label='Município'
        name='county'
        onChange={(value) => setCustomValue('county', value)}
        value={county}
        options={countyOptions}
        required
        instanceId='county'
      />
      <CustomInput
        disabled={isLoading}
        errors={errors}
        id='address'
        label='Endereço'
        register={register}
        required
      />
      <UploadImage
        disabled={isLoading}
        label='Imagem de capa'
        value={coverImage}
        onChange={(value) => setCustomValue('coverImage', value)}
      />
      <UploadImage
        disabled={isLoading}
        label='Logo'
        value={avatar}
        onChange={(value) => setCustomValue('avatar', value)}
      />
      <CustomInput
        disabled={isLoading}
        errors={errors}
        id='description'
        label='Descrição'
        register={register}
        required
      />
      <PasswordInput
        disabled={isLoading}
        errors={errors}
        id='password'
        label='Senha'
        register={register}
      />
      <PasswordInput
        disabled={isLoading}
        errors={errors}
        id='confirmPassword'
        label='Confirmar senha'
        register={register}
      />
    </CustomForm>
  );
};

export default SocialOrgForm;
