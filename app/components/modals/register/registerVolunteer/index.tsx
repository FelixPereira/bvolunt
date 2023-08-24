'use client';

import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import {
  closeRegisterModal,
  openLoginModal,
} from '@/redux/features/modalSlice';

import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';
import { Hash } from 'lucide-react';
import ModalWrapper from '../../modalWrapper';
import CustomInput from '@/components/form/customInput';

import { X } from 'lucide-react';
import axios from 'axios';

const RegisterVolunteerModal = () => {
  const { isRegisterModalOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      telephone: '',
      password: '',
    },
  });

  const onRequestClose = () => {
    dispatch(closeRegisterModal());
  };

  const handleSubmitForm: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    axios
      .post('/api/register', data)
      .then(() => {
        dispatch(closeRegisterModal());
        toast.success('Usuário criado com sucesso.');
      })
      .catch((err) => {
        toast.error('Algo correu mal.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const registerWithGoogle = () => {
    signIn('google');
  };

  const toggleModals = () => {
    dispatch(closeRegisterModal());
    dispatch(openLoginModal());
  };

  const bodyContent = (
    <div className='flex flex-col gap-y-4 mt-8'>
      <CustomInput
        id='name'
        label='Nome completo'
        register={register}
        errors={errors}
        required={true}
        disabled={isLoading}
      />
      <CustomInput
        id='email'
        label='Email de contacto'
        type='email'
        register={register}
        errors={errors}
        required={true}
        disabled={isLoading}
      />
      <CustomInput
        id='telephone'
        label='Telefone'
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
        Já tem uma conta?
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
          Inicie sessão
        </span>
      </span>
    </div>
  );

  return (
    <ModalWrapper
      onRequestClose={onRequestClose}
      isOpen={isRegisterModalOpen}
      isLoading={isLoading}
      title='Crie a sua conta'
      description='Crie a sua conta agora e se torne um voluntário'
      primaryActionLabel='Continuar'
      secondaryActionLabel='Registar com o Google'
      bodyContent={bodyContent}
      footerContent={footerContent}
      primaryActionHandler={handleSubmit(handleSubmitForm)}
      secondaryActionHandler={registerWithGoogle}
      icon={X}
      outline
    />
  );
};

export default RegisterVolunteerModal;
