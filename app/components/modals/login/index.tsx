'use client';

import CustomInput from '@/components/form/customInput';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  closeLoginModal,
  openRegisterModal,
} from '@/redux/features/modalSlice';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ModalWrapper from '../modalWrapper';
import { GoogleLogo } from 'phosphor-react';

const LoginModal = () => {
  const { isLoginModalOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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
      router.refresh();
      response.error = undefined;
      toast.success('Sessão iniciada com sucesso.');
    }

    if (response?.error) {
      setIsLoading(false);
      toast.error(response.error);
    }
  };

  const loginWithGoogle = () => {
    signIn('google');
  };

  const toggleModals = () => {
    dispatch(closeLoginModal());
    dispatch(openRegisterModal());
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

  const icon = (
    <GoogleLogo color='#224099' weight='bold' />
  )

  return (
    <ModalWrapper
      onRequestClose={onRequestClose}
      isOpen={isLoginModalOpen}
      isLoading={isLoading}
      title='Iniciar sessão'
      description='Inicie sessão na sua conta'
      primaryActionLabel='Continuar'
      secondaryActionLabel='Google'
      bodyContent={bodyContent}
      footerContent={footerContent}
      primaryActionHandler={handleSubmit(handleSubmitForm)}
      secondaryActionHandler={loginWithGoogle}
      icon={icon}
      outline
    />
  );
};

export default LoginModal;
