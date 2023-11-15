'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  closeLoginModal,
  openRegisterTypeModal,
} from '@/redux/features/modalSlice';
import ModalWrapper from '../modalWrapper';
import CustomInput from '@/components/form/customInput';
import { toast } from 'react-hot-toast';

const LoginModal = () => {
  const { isLoginModalOpen } = useAppSelector((state) => state.modal);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onRequestClose = () => {
    dispatch(closeLoginModal());
  };

  const handleSubmitForm: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    const response = await signIn('credentials', {
      ...data,
      redirect: false,
    });

    if (response?.ok) {
      dispatch(closeLoginModal());
      setIsLoading(false);
      reset();

      toast.success('Sessão iniciada com sucesso.');
      router.push('/usuario/home');
      router.refresh();
    }

    if (response?.error) {
      setIsLoading(false);
      toast.error(response.error);
    }
  };

  const toggleModals = () => {
    dispatch(closeLoginModal());
    dispatch(openRegisterTypeModal());
  };

  const bodyContent = (
    <div className='flex flex-col gap-y-4 mt-8'>
      <CustomInput
        id='email'
        label='Email'
        type='email'
        register={register}
        errors={errors}
        required={true}
        disabled={isLoading}
      />
      <CustomInput
        id='password'
        label='Senha'
        register={register}
        errors={errors}
        required={true}
        disabled={isLoading}
      />
    </div>
  );

  const footerContent = (
    <div className='text-center mt-4'>
      <span className='text-[14px]'>
        Não tem uma conta?
        <span
          onClick={toggleModals}
          className='
            underline
            cursor-pointer
            ml-1
            font-bold
            hover:text-primary
          '
        >
          Registe-se
        </span>
      </span>
    </div>
  );

  return (
    <ModalWrapper
      onRequestClose={onRequestClose}
      isOpen={isLoginModalOpen}
      isLoading={isLoading}
      title='Iniciar sessão'
      description='Inicie sessão na sua conta'
      primaryActionLabel='Continuar'
      bodyContent={bodyContent}
      footerContent={footerContent}
      primaryActionHandler={handleSubmit(handleSubmitForm)}
    />
  );
};

export default LoginModal;
