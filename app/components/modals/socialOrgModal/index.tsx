'use client';

import axios from 'axios';
import SocialOrgForm from './bodyContent';
import ModalWrapper from '../modalWrapper';
import { useAppSelector } from '@/app/redux/hooks';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { useAppDispatch } from '@/app/redux/hooks';
import { closeSocialOrgModal } from '@/app/redux/features/modalSlice';
import { useRouter } from 'next/navigation';

const SocialOrganizationModal = () => {
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

  const handleSubmitForm: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      await axios.post('/api/socialorganizations', data);
      dispatch(closeSocialOrgModal);
      router.refresh();
      reset();
      toast.success('Organização criada com sucesso.');
      setIsLoading(false);
    } catch (error: any) {
      dispatch(closeSocialOrgModal);
      toast.error('Algo correu mal. Tente novamente.');
      setIsLoading(false);
    }
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

  return (
    <ModalWrapper
      isOpen={isSocialOrgModalOpen}
      isLoading={isLoading}
      title='Cadastrar organização'
      description='Preencha o formulário para cadastrar uma organização social.'
      primaryActionHandler={handleSubmit(handleSubmitForm)}
      primaryActionLabel='Cadastrar'
      bodyContent={bodyContent}
    />
  );
};

export default SocialOrganizationModal;
