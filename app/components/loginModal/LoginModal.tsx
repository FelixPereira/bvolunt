'use client';

import ModalWrapper from '../modalWrapper/ModalWrapper';
import CustomInput from '../customInput/CustomInput';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { onCloseLoginModal, onOpenRegisterModal } from '@/app/redux/features/modalSlice';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LoginModal = () => {
  const { loginModalIsOpen } = useAppSelector((state) => state.modal);
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
    dispatch(onCloseLoginModal());
  };

  const handleSubmitForm: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    signIn('credentials', {
      ...data,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.ok) {
          dispatch(onCloseLoginModal());
          router.refresh();
          toast.success('Sessão iniciada com sucesso.');
        }

        if (callback?.error) {
          toast.error(callback.error);
        }
      })
      .finally(() => setIsLoading(false));
  };

  const loginWithGoogle = () => {
    signIn('google');
  };

  const toggleModals = () => {
    dispatch(onCloseLoginModal());
    dispatch(onOpenRegisterModal());
  }

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
      isOpen={loginModalIsOpen}
      isLoading={isLoading}
      title='Iniciar sessão'
      description='Inicie sessão na sua conta'
      primaryActionLabel='Continuar'
      secondaryActionLabel='Iniciar sessão com o Google'
      bodyContent={bodyContent}
      footerContent={footerContent}
      primaryActionHandler={handleSubmit(handleSubmitForm)}
      secondaryActionHandler={loginWithGoogle}
    />
  );
};

export default LoginModal;
