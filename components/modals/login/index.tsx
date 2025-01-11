'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import * as z from 'zod';

import {
  closeLoginModal,
  openRegisterTypeModal,
} from '@/redux/features/modalSlice';
import FormInput from '../../form/customInput';
import PasswordInput from '../../form/passwordInput';
import ModalWrapper from '../modalWrapper';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/schemas';

import { login } from '@/actions/login';

const LoginModal = () => {
  const { isLoginModalOpen } = useAppSelector((state) => state.modal);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [errorMessage, setErrorMessage] = useState<string | undefined>('');
  const [successMessage, setSuccessMessage] = useState<string | undefined>('');

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onRequestClose = () => {
    dispatch(closeLoginModal());
  };

  const handleSubmitForm = async (data: z.infer<typeof LoginSchema>) => {
    setErrorMessage('');
    setSuccessMessage('');

    // setIsLoading(true);

    // const response = await signIn('credentials', {
    //   ...data,
    //   redirect: false,
    // });

    // if (response?.ok) {
    //   dispatch(closeLoginModal());
    //   setIsLoading(false);
    //   reset();

    //   toast.success('Sessão iniciada com sucesso.');
    //   router.push('/usuario/home');
    //   router.refresh();
    // }

    // if (response?.error) {
    //   setIsLoading(false);
    //   toast.error(response.error);
    // }

    login(data).then((data) => {
      setErrorMessage(data?.error);
      setSuccessMessage(data?.success);
    });
  };

  const toggleModals = () => {
    dispatch(closeLoginModal());
    dispatch(openRegisterTypeModal());
  };

  const bodyContent = (
    <div className='flex flex-col gap-y-4 mt-8'>
      <div>
        <FormInput
          id='email'
          label='Email'
          type='email'
          register={register}
          errors={errors}
          required={true}
          disabled={isLoading}
        />
        <PasswordInput
          id='password'
          label='Senha'
          register={register}
          errors={errors}
          disabled={isLoading}
        />
        <strong className='text-negativeAction'>{errorMessage}</strong>
        <strong className='text-secondary'>{successMessage}</strong>
      </div>
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
