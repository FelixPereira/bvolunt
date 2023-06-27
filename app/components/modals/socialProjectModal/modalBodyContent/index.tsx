'use client';

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import CustomInput from '../../../form/customInput';
import CustomSelect, { CustomSelectOption } from '../../../form/customSelect';
import UploadImage from '../../../form/uploadImage';

interface ModalBodyContentProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  isLoading: boolean;
  setCustomValue: (id: string, value: any) => void;
  getStateCounties?: (provinceName?: string) => void;
  provinces: CustomSelectOption[];
  counties?: CustomSelectOption[];
  province: CustomSelectOption;
  county: CustomSelectOption;
  coverImage: string;
  sponsors: string[];
}

const ModalBodyContent: React.FC<ModalBodyContentProps> = ({
  register,
  errors,
  isLoading,
  setCustomValue,
  getStateCounties,
  provinces,
  counties,
  province,
  county,
  coverImage,
  sponsors,
}) => {
  return (
    <div className='flex flex-col gap-y-4 mt-8'>
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
        onChange={(value) => setCustomValue('province', value)}
        getStateCounties={getStateCounties}
        options={provinces}
        label='Província'
        name='county'
        value={province}
        disabled={isLoading}
      />
      <CustomSelect
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
    </div>
  );
};

export default ModalBodyContent;
