import CustomInput from '@/components/form/customInput';
import CustomSelect, {
  CustomSelectOption,
} from '@/components/form/customSelect';
import { provinceOptions } from '@/data';
import { getCounties, useGetCounties } from '@/hooks/useGetCounties';
import { SafeSocialOrg } from '@/types';
import { useMemo, useState } from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface AddressInfoProps {
  currentOrg: SafeSocialOrg | null;
  activeTab?: number;
  setCustomValue: (id: string, value: unknown) => void;
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
  isLoading: boolean;
}

const AddressInfo: React.FC<AddressInfoProps> = ({
  currentOrg,
  errors,
  register,
  setCustomValue,
  activeTab,
  isLoading,
}) => {
  const counties = useMemo(() => {
    return getCounties(currentOrg?.province);
  }, [currentOrg?.province]);

  const [countyOptions, setCounties] = useState<CustomSelectOption[]>(
    counties || []
  );

  const provinceDefaultValue = useMemo(() => {
    if (!currentOrg?.province) return null;

    const province = provinceOptions.find(
      (option) => option.value === currentOrg?.province
    );

    if (!province) return null;

    return province;
  }, [currentOrg?.province]);

  const { getCountiesByState } = useGetCounties(setCounties);

  const countyDefaultValue = currentOrg?.county
    ? {
        label: currentOrg.county,
        value: currentOrg.county,
      }
    : null;

  return (
    <div
      className={`flex flex-col gap-y-5 ${
        activeTab === 2 ? 'block' : 'hidden'
      }`}
    >
      <div>
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
      </div>
    </div>
  );
};

export default AddressInfo;
