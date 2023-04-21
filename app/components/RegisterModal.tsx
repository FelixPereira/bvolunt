'use client';

import ModalWrapper from './ModalWrapper';
import CustomInput from './Input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';

const RegisterModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onRequestClose = () => {
    setIsOpen(false);
  };

  const handleSubmitForm = () => {
    console.log('HELLOR WORLD');
  };

  const bodyContent = (
    <div className='flex flex-col gap-y-4 mt-8'>
      <CustomInput
        id='name'
        label='Nome completo'
        register={register}
        errors={errors}
        required
      />
      <CustomInput
        id='email'
        label='Email de contacto'
        type='email'
        register={register}
        errors={errors}
        required
      />
      <CustomInput
        id='telephone'
        label='Telefone'
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
        Já tem uma conta?
        <span
          onClick={handleSubmitForm}
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
      isOpen={isOpen}
      title='Crie a sua conta'
      description='Crie a sua conta agora e se torne um voluntário'
      primaryActionLabel='Continuar'
      bodyContent={bodyContent}
      footerContent={footerContent}
      primaryActionHandler={handleSubmitForm}
    />
  );
};

export default RegisterModal;
