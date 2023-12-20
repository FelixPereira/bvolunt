import CustomButton from '@/components/customButton';
import CustomForm from '@/components/form/CustomForm';
import PasswordInput from '@/components/form/passwordInput';
import axios, { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

interface ResetPasswordProps {
  activeTab?: number;
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ activeTab }) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FieldValues>();

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmitForm: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    axios
      .post('/api/resetpassword', data)
      .then(() => {
        toast.success('Senha alterada com sucesso');
        reset();
        router.refresh();
      })
      .catch((error: unknown) => {
        if (isAxiosError(error)) {
          const { response } = error;
          const message = response?.data.message;
          toast.error(message);
        } else {
          toast.error('Algo correu mal. Tente novamente.');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={`${activeTab === 3 ? 'block' : 'hidden'}`}>
      <CustomForm>
        <div className='flex flex-col gap-y-5 mb-5'>
          <PasswordInput
            id='currentPassword'
            label='Senha atual'
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <PasswordInput
            id='newPassword'
            label='Nova senha'
            register={register}
            errors={errors}
            disabled={isLoading}
          />
          <PasswordInput
            id='confirmPassword'
            label='Confirmar nova senha'
            register={register}
            errors={errors}
            disabled={isLoading}
          />
        </div>

        <CustomButton
          label='Actualizar dados'
          disabled={isLoading}
          spinner={isLoading}
          handleClick={handleSubmit(handleSubmitForm)}
        />
      </CustomForm>
    </div>
  );
};

export default ResetPassword;
