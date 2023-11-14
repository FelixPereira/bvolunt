'use client';

import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import axios from 'axios';
import { X } from 'lucide-react';
import {
  closeRegisterModal,
  openLoginModal,
} from '@/redux/features/modalSlice';

import ModalWrapper from '../../modalWrapper';
import CustomInput from '@/components/form/customInput';

const RegisterVolunteerModal = () => {
  const { isRegisterModalOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {
    reset,
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

  const handleSubmitForm: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      const registerResponse = await axios.post('/api/register', data);

      if (registerResponse.status === 201) {
        toast.success('Usuario cadastrado com sucesso.');

        const signInResponse = await signIn('credentials', {
          email: data.email,
          password: data.password,
          redirect: false,
        });

        if (signInResponse?.ok) {
          dispatch(closeRegisterModal());
          setIsLoading(false);
          reset();

          toast.success('Sessão iniciada com sucesso.');
          router.push('/usuario/home');
          router.refresh();
        }
      }
    } catch (error: any) {
      const { dta } = error.response;
      const message: string = dta.message || 'Houve um erro. Tente novamente.';
      toast.error(message);
      setIsLoading(false);
    }
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
      onRequestClose={() => dispatch(closeRegisterModal())}
      isOpen={isRegisterModalOpen}
      isLoading={isLoading}
      title='Crie a sua conta'
      description='Crie a sua conta agora e se torne um voluntário'
      primaryActionLabel='Continuar'
      bodyContent={bodyContent}
      footerContent={footerContent}
      primaryActionHandler={handleSubmit(handleSubmitForm)}
      icon={X}
    />
  );
};

export default RegisterVolunteerModal;
