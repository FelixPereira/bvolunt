'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import CustomInput from '../../../form/customInput';
import CustomSelect, { CustomSelectOption } from '../../../form/customSelect';
import UploadImage from '../../../form/uploadImage';
import CustomForm from '@/components/form/CustomForm';
import { provinceOptions } from '@/data/provinces';
import { useGetCounties } from '@/hooks/useGetCounties';
import { useState } from 'react';

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
}) => {
  const [ countyOptions, setCounties ] = useState<CustomSelectOption[]>([])
  const { getCountiesByState } = useGetCounties(setCounties);

  return (
    <CustomForm>
      <CustomInput
        id='name'
        label='Nome do projecto'
        register={register}
        errors={errors}
        required={true}
        disabled={isLoading}
      />
      <CustomSelect
        register={register}
        onChange={(value) => setCustomValue('province', value)}
        getCountiesByState={getCountiesByState}
        options={provinceOptions}
        label='Província'
        name='province'
        value={province}
        disabled={isLoading}
        instanceId='county'
      />
      <CustomSelect
        register={register}
        onChange={(value) => setCustomValue('county', value)}
        options={countyOptions}
        label='Municícpio'
        name='county'
        value={county}
        disabled={isLoading}
        instanceId='county'
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
