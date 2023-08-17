'use client';

import axios from 'axios';
import SocialOrgForm from './bodyContent';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  closeSocialOrgModal,
  openLoginModal,
} from '@/redux/features/modalSlice';
import ModalWrapper from '../../modalWrapper';

const RegisterOrgModal = () => {
  const { isSocialOrgModalOpen } = useAppSelector((state) => state.modal);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    register,
    setValue,
    reset,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      telephone: '',
      totalVolunteer: '',
      responsibleName: '',
      responsibleEmail: '',
      responsiblePhone: '',
      address: '',
      description: '',
      coverImage: '',
      province: '',
      county: '',
      logo: '',
    },
  });

  const coverImage = watch('coverImage');
  const province = watch('province');
  const county = watch('county');
  const logo = watch('logo');

  const setCustomValue = (id: string, value: unknown) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onRequestClose = () => {
    dispatch(closeSocialOrgModal());
  };

  const handleSubmitForm: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      await axios.post('/api/social-organizations', data);
      dispatch(closeSocialOrgModal());
      router.refresh();
      reset();
      toast.success('Organização criada com sucesso.');
      setIsLoading(false);
    } catch (error: any) {
      const { data } = error.response;
      const message: string = data.message || 'Houve um erro. Tente novamente';
      dispatch(closeSocialOrgModal());
      toast.error(message);
      setIsLoading(false);
    }
  };

  const toggleModals = () => {
    dispatch(closeSocialOrgModal());
    dispatch(openLoginModal());
  };

  const bodyContent = (
    <SocialOrgForm
      isLoading={false}
      errors={errors}
      register={register}
      setCustomValue={setCustomValue}
      coverImage={coverImage}
      province={province}
      county={county}
      logo={logo}
    />
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
      isOpen={isSocialOrgModalOpen}
      isLoading={isLoading}
      title='Cadastrar organização'
      description='Preencha o formulário para cadastrar uma organização social.'
      primaryActionHandler={handleSubmit(handleSubmitForm)}
      primaryActionLabel='Cadastrar'
      bodyContent={bodyContent}
      footerContent={footerContent}
    />
  );
};

export default RegisterOrgModal;
