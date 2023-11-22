'use client';

import ModalWrapper from '../modalWrapper';
import axios, { AxiosError, isAxiosError } from 'axios';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { closeSocialProjectModal } from '@/redux/features/modalSlice';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import SocialProjectForm from './modalBodyContent';

const SocialProjectModal = () => {
  const { isSocialProjectModalOpen } = useAppSelector((state) => state.modal);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      description: '',
      province: '',
      county: '',
      address: '',
      coverImage: '',
    },
  });

  const province = watch('province');
  const county = watch('county');
  const coverImage = watch('coverImage');
  const sponsors = watch('sponsors');

  const setCustomValue = (id: string, value: unknown) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onRequestClose = () => {
    dispatch(closeSocialProjectModal());
  };

  const handleSubmitForm: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      await axios.post('/api/social-projects', data);
      dispatch(closeSocialProjectModal());
      toast.success('Projecto criado com sucesso.');
      router.refresh();
      reset();

      setIsLoading(false);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        const { response } = error;
        const errorMessage = response?.data
          ? response.data.message
          : 'Algo correu mal. Tente novamente';
        toast.error(errorMessage);
        setIsLoading(false);
      }
    }
  };

  const bodyContent = (
    <SocialProjectForm
      county={county}
      coverImage={coverImage}
      errors={errors}
      isLoading={isLoading}
      province={province}
      sponsors={sponsors}
      register={register}
      setCustomValue={setCustomValue}
    />
  );

  return (
    <ModalWrapper
      onRequestClose={onRequestClose}
      isOpen={isSocialProjectModalOpen}
      isLoading={isLoading}
      title='Criar um projecto social'
      description='Preencha o formulário para criar um novo projecto social.'
      primaryActionLabel='Continuar'
      bodyContent={bodyContent}
      primaryActionHandler={handleSubmit(handleSubmitForm)}
    />
  );
};

export default SocialProjectModal;
