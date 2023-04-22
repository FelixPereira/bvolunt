'use client';

import { UseFormRegister, FieldErrors, FieldValues } from 'react-hook-form';

interface CustomInputProps {
  id: string;
  label: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  id,
  label,
  type = 'text',
  register,
  errors,
  required,
}) => {
  return (
    <div className='flex flex-col gap-y-3'>
      <label htmlFor={id} className='font-light text-[15px]'>
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
        `}
      />
    </div>
  );
};

export default CustomInput;
