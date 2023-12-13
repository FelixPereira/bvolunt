import CustomInput from '@/components/form/customInput';
import CustomSelect, {
  CustomSelectOption,
} from '@/components/form/customSelect';
import { provinceOptions } from '@/data';
import { getCounties, useGetCounties } from '@/hooks/useGetCounties';
import { SafeUser } from '@/types';
import { useMemo, useState } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface AddressInfoProps {
  activeTab?: number;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  isLoading: boolean;
  currentUser: SafeUser | null;
  setCustomValue: (id: string, value: unknown) => void;
}

const AddressInfo: React.FC<AddressInfoProps> = ({
  activeTab,
  errors,
  isLoading,
  register,
  setCustomValue,
  currentUser,
}) => {
  const provinceDefaultValue = useMemo(() => {
    if (!currentUser?.province) return null;

    const province = provinceOptions.find(
      (option) => option.value === currentUser?.province
    );

    if (!province) return null;

    return province;
  }, [currentUser?.province]);

  const countyDefaultValue = currentUser?.county
    ? {
        label: currentUser.county,
        value: currentUser.county,
      }
    : null;

  const counties = useMemo(() => {
    return getCounties(currentUser?.province);
  }, [currentUser?.province]);

  const [countyOptions, setCounties] = useState<CustomSelectOption[]>(
    counties || []
  );

  const { getCountiesByState } = useGetCounties(setCounties);

  return (
    <div className={`${activeTab === 2 ? 'block' : 'hidden'}`}>
      <div className='flex flex-col gap-y-5'>
        <CustomSelect
          disabled={isLoading}
          label='Província'
          name='province'
          required
          onChange={(value) => {
            setCustomValue('province', value);
          }}
          value={provinceDefaultValue}
          register={register}
          options={provinceOptions}
          getCountiesByState={getCountiesByState}
          instanceId='province'
        />

        <CustomSelect
          disabled={isLoading}
          label='Município'
          name='county'
          required
          onChange={(value) => {
            setCustomValue('county', value);
          }}
          value={countyDefaultValue}
          register={register}
          options={countyOptions}
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
      </div>

      {/* <div className='mt-5'>
        <CustomButton
          label='Actualizar dados'
          disabled={isLoading}
          spinner={isLoading}
          handleClick={handleSubmit(handleSubmitForm)}
        />
      </div> */}
    </div>
  );
};

export default AddressInfo;
