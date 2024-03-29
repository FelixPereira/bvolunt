'use client';

import { FieldValues, UseFormRegister } from 'react-hook-form';
import Select from 'react-select';

export type CustomSelectOption = {
  label: string;
  value: string;
};

interface CustomSelectProps {
  options?: CustomSelectOption[];
  onChange: (value: CustomSelectOption) => void;
  getCountiesByState?: (provinceName: string) => void;
  label: string;
  name: string;
  value: CustomSelectOption | null;
  disabled: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  instanceId: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  onChange,
  getCountiesByState,
  label,
  name,
  value,
  disabled,
  required,
  register,
  instanceId,
}) => {
  return (
    <div className='flex flex-col gap-y-3 w-full'>
      <span>
        <label htmlFor={name} className='font-bold text-[14px]'>
          {label}
        </label>
        {required && <i className='text-[red]'>*</i>}
      </span>
      <Select
        instanceId={instanceId}
        {...register(name)}
        onChange={(value) => {
          onChange(value as CustomSelectOption);

          if (!getCountiesByState || !value) return;
          getCountiesByState(value.label);
        }}
        name={name}
        defaultValue={value}
        id={name}
        placeholder='Seleccionar...'
        isClearable={true}
        options={options}
        classNames={{
          control: (state) => `
            h-[50px] 
            rounded 
            px-4
            text-[14px] 
            text-textBody
            border
            border-primary
            ${disabled ? 'pointer-events-none' : 'pointer-events-all'} 
          `,
        }}
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#ACD036',
            primary25: '#c0cef790',
          },
        })}
      />
    </div>
  );
};

export default CustomSelect;
