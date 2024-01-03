import { useState } from 'react';
import { EyeOff, Eye } from 'lucide-react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import CustomInput from '../customInput';

interface PasswordInputProps {
  errors: FieldErrors;
  id: string;
  label: string;
  register: UseFormRegister<FieldValues>;
  disabled: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  errors,
  id,
  label,
  register,
  disabled,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='flex items-center'>
      <CustomInput
        disabled={disabled}
        errors={errors}
        id={id}
        label={label}
        register={register}
        required
        type={isVisible ? 'text' : 'password'}
      />
      <div
        className={`mt-${errors[id] ? '2' : '8'} ml-[-50px] cursor-pointer`}
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? <EyeOff color='#224099' /> : <Eye color='#224099' />}
      </div>
    </div>
  );
};

export default PasswordInput;
