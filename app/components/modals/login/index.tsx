'use client';

import { useState } from 'react';
import { redirect } from 'next/navigation';
import { signIn } from 'next-auth/react';
import CustomInput from '@/components/form/customInput';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  closeLoginModal,
  openRegisterTypeModal,
} from '@/redux/features/modalSlice';
import ModalWrapper from '../modalWrapper';
import { toast } from 'react-hot-toast';

const LoginModal = () => {
  const { isLoginModalOpen } = useAppSelector((state) => state.modal);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const {
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

    if (response?.status === 200) {
      setIsLoading(false);
      dispatch(closeLoginModal());
      response.error = undefined;
      toast.success('Sessão iniciada com sucesso.');
      redirect('/usuario/home');
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
