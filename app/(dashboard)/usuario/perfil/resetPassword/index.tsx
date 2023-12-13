import CustomInput from '@/components/form/customInput';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface ResetPasswordProps {
  activeTab?: number;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  isLoading: boolean;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({
  activeTab,
  errors,
  isLoading,
  register,
}) => {
  return (
    <div className={`${activeTab === 3 ? 'block' : 'hidden'}`}>
      <div className='flex flex-col gap-y-5'>
        <CustomInput
          id='currentPassword'
          label='Senha atual'
          register={register}
          errors={errors}
          required={true}
          disabled={isLoading}
        />
        <CustomInput
          id='newPassword'
          label='Nova senha'
          register={register}
          errors={errors}
          required={true}
          disabled={isLoading}
        />
        <CustomInput
          id='confirmPassword'
          label='Confirmar nova senha'
          register={register}
          errors={errors}
          required={true}
          disabled={isLoading}
        />
      </div>
    </div>
  );
};

export default ResetPassword;
