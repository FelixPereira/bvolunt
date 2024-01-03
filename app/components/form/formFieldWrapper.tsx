import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface FormFieldWrapperProps {
  children: React.ReactNode;
  label: string;
  required?: boolean;
  id: string;
}

export interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  required?: boolean;
  disabled: boolean;
}

const FormFieldWrapper: React.FC<FormFieldWrapperProps> = ({
  children,
  label,
  required,
  id,
}) => {
  return (
    <div className='flex flex-col w-full gap-y-3'>
      <span>
        <label className='font-bold text-[15px] display-inline' htmlFor={id}>
          {label}
        </label>
        {required && <i className='text-[red]'>*</i>}
      </span>
      {children}
    </div>
  );
};

export default FormFieldWrapper;
