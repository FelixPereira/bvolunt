'use client';

import Select from 'react-select';

export type CustomSelectOption = {
  label: string;
  value: string;
};

interface CustomSelectProps {
  options?: CustomSelectOption[];
  // onChange: (provinceName: string | undefined) => void;
  onChange: (value: CustomSelectOption) => void;
  getStateCounties?: (provinceName?: string) => void;
  label: string;
  name: string;
  value: CustomSelectOption;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  onChange,
  getStateCounties,
  label,
  name,
  value,
}) => {
  return (
    <>
      <label htmlFor={name} className='font-bold text-[14px]'>
        {label}
      </label>
      <Select
        onChange={(value) => {
          onChange(value as CustomSelectOption);

          if (!getStateCounties) return;
          getStateCounties(value?.label);
        }}
        name={name}
        value={value}
        id={name}
        placeholder='Seleccionar...'
        isClearable={true}
        options={options}
        classNames={{
          control: (state) => `
            border-[1px] 
            h-[50px] 
            rounded 
            px-4 
            text-[14px] 
            text-textBody 
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
    </>
  );
};

export default CustomSelect;
