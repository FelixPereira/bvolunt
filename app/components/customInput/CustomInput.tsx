'use client';

import { UseFormRegister, FieldErrors, FieldValues } from 'react-hook-form';

interface CustomInputProps {
  id: string;
  label: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required: boolean;
  disabled: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  id,
  label,
  type = 'text',
  register,
  errors,
  required,
  disabled
}) => {
  return (
    <div className='flex flex-col gap-y-3'>
      <label htmlFor={id} className='font-bold text-[14px]'>
        {label}
      </label>
      <input 
        id={id}
        type={type}
        required={required}
        {...register(id)}
        className={`
          border-[1px]
          h-[50px]
          rounded
          px-4
          text-[14px]
          text-textBody
          transition
          duration-[300ms]
          focus:outline-secondary
          ${errors[id] ? 'border-primary' : 'border-[#292D3C1C]'}
          ${disabled ? 'cursor-not-allowed' : 'cursor-auto'}
          ${disabled ? 'pointer-events-none' : 'pointer-events-all'}
        `}
      />
    </div>
  );
};

export default CustomInput;
