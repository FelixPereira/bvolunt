'use client';

import ModalWrapper from '../modalWrapper/ModalWrapper';
import CustomInput from '../customInput/CustomInput';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { onCloseLoginModal } from '@/app/redux/features/modalSlice';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
// import { authOptions } from '@/pages/api/[...nextauth]';
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
    }).then((callback) => {
      // console.log(callback);

      if (callback?.ok) {
        toast.success('Sessão iniciada com sucesso.');
        router.refresh();
        // dispatch(onCloseLoginModal());
      }

      if (callback?.error) {
        toast.error('Erro ao iniciar sessão.');
        // dispatch(onCloseLoginModal());
      }
    });
  };

  const bodyContent = (
    <div className='flex flex-col gap-y-4 mt-8'>
      <CustomInput
        id='email'
        label='Email'
        type='email'
        register={register}
        errors={errors}
        required
      />
      <CustomInput
        id='password'
        label='Senha'
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className='text-center mt-4'>
      <span className='text-[14px]'>
        Não tem uma conta?
        <span
          onClick={() => {}}
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
      bodyContent={bodyContent}
      footerContent={footerContent}
      primaryActionHandler={handleSubmit(handleSubmitForm)}
    />
  );
};

export default LoginModal;
