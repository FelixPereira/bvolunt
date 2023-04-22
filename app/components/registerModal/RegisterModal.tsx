'use client';

import ModalWrapper from '../modalWrapper/ModalWrapper';
import CustomInput from '../customInput/CustomInput';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
// import { useAppSelector } from '@/app/redux/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';

const RegisterModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const { isOpen } = useSelector((state: RootState) => state.modal);
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

  console.log(isOpen)

  const onOpen = () => {
    setIsOpen(true);
  }

  const onRequestClose = () => {
    setIsOpen(false);
  };

  const handleSubmitForm: SubmitHandler<FieldValues> = async (
    data: FieldValues
  ) => {
    // useRegisterUserMutation(data);
    console.log(data);
  };

  const bodyContent = (
    <div className='flex flex-col gap-y-4 mt-8'>
      <CustomInput
        id='name'
        label='Nome completo'
        register={register}
        errors={errors}
        required={true}
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
      onOpen={onOpen}
      isOpen={isOpen}
      title='Crie a sua conta'
      description='Crie a sua conta agora e se torne um voluntário'
      primaryActionLabel='Continuar'
      bodyContent={bodyContent}
      footerContent={footerContent}
      primaryActionHandler={handleSubmit(handleSubmitForm)}
    />
  );
};

export default RegisterModal;
