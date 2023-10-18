'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import CustomInput from '../../../form/customInput';
import CustomSelect, { CustomSelectOption } from '../../../form/customSelect';
import UploadImage from '../../../form/uploadImage';
import CustomForm from '@/components/form/CustomForm';
import { PROVINCES } from '@/data/provinces';
import { useGetCounties } from '@/hooks/useGetCounties';

interface ModalBodyContentProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  isLoading: boolean;
  setCustomValue: (id: string, value: unknown) => void;
  province: CustomSelectOption;
  county: CustomSelectOption;
  coverImage: string;
  sponsors: string[];
}

const SocialProjectForm: React.FC<ModalBodyContentProps> = ({
  register,
  errors,
  isLoading,
  setCustomValue,
  province,
  county,
  coverImage,
  sponsors,
}) => {

  const { counties, getCountiesByState} = useGetCounties();
  const provinces: CustomSelectOption[] = PROVINCES.map((province) => ({
    label: province.name,
    value: province.name,
  }));

  return (
    <CustomForm>
      <CustomInput
        id='title'
        label='Nome do projecto'
        register={register}
        errors={errors}
        required={true}
        disabled={isLoading}
      />
      <CustomInput
        id='totalVolunteers'
        label='Nº. total de voluntários'
        type='number'
        register={register}
        errors={errors}
        required={true}
        disabled={isLoading}
      />
      <CustomSelect
      register={register}
        onChange={(value) => setCustomValue('province', value)}
        getCountiesByState={getCountiesByState}
        options={provinces}
        label='Província'
        name='county'
        value={province}
        disabled={isLoading}
      />
      <CustomSelect
      register={register}
        onChange={(value) => setCustomValue('county', value)}
        options={counties}
        label='Municícpio'
        name='county'
        value={county}
        disabled={isLoading}
      />
      <CustomInput
        id='address'
        label='Endereço'
        register={register}
        errors={errors}
        required={true}
        disabled={isLoading}
      />
      <UploadImage
        label='Imagem de capa'
        disabled={isLoading}
        value={coverImage}
        onChange={(value) => setCustomValue('coverImage', value)}
      />
      <CustomInput
        id='description'
        label='Descrição'
        type='text'
        register={register}
        errors={errors}
        required={true}
        disabled={isLoading}
      />
    </CustomForm>
  );
};

export default SocialProjectForm;
