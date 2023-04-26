'use client';

import ModalWrapper from '../modalWrapper/ModalWrapper';
import CustomInput from '../customInput/CustomInput';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { onClose } from '@/app/redux/features/modalSlice';
import { toast } from 'react-hot-toast';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';

const RegisterModal = () => {
  const { isOpen } = useAppSelector((state) => state.modal);
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
    dispatch(onClose());
  };

  const handleSubmitForm: SubmitHandler<FieldValues> = async (
    data: FieldValues
  ) => {
    try {
      setIsLoading(true);
      await axios.post('/api/register', data);
      setIsLoading(false);
      // dispatch(onClose());
      toast.success('Sent with success');
      console.log(data);
    } catch (err) {
      setIsLoading(false),
      dispatch(onClose());
      toast.error('Houve um problema. Tente novamente.');

      const { message } = err as AxiosError;
      console.log(message);
    }
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
      isOpen={isOpen}
      isLoading={isLoading}
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
