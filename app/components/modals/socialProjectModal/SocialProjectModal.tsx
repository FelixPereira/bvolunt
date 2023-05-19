'use client';

import ModalWrapper from '../modalWrapper/ModalWrapper';
import axios from 'axios';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { onCloseSocialProjectModal } from '@/app/redux/features/modalSlice';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { CustomSelectOption } from '../../form/customSelect/CustomSelect';
import { PROVINCES } from '@/data/provinces';
import ModalBodyContent from './ModalBodyContent';

const provinces: CustomSelectOption[] = PROVINCES.map((province) => ({
  label: province.name,
  value: province.name,
}));

const SocialProjectModal = () => {
  const { sociaiProjectModalIsOpen } = useAppSelector((state) => state.modal);
  const [isLoading, setIsLoading] = useState(false);
  let [counties, setCounties] = useState<CustomSelectOption[] | undefined>([]);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const getStateCounties = (provinceName?: string) => {
    const findedCounties = PROVINCES.find(
      (province) => province.name === provinceName
    )?.counties.map((county) => ({
      label: county,
      value: county,
    }));

    setCounties(findedCounties);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      description: '',
      totalVolunteers: 1,
      province: '',
      county: '',
      address: '',
      coverImage: '',
    },
  });

  const province = watch('province');
  const county = watch('county');
  const coverImage = watch('coverImage');

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const handleSubmitForm: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      await axios.post('/api/socialprojects', data);
      dispatch(onCloseSocialProjectModal());
      router.refresh();
      // reset();

      toast.success('Projecto criado com sucesso.');
      setIsLoading(false);
    } catch (err) {
      toast.error('Algo correu mal.');
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <ModalBodyContent
      counties={counties}
      county={county}
      coverImage={coverImage}
      errors={errors}
      isLoading={isLoading}
      province={province}
      provinces={provinces}
      register={register}
      setCustomValue={setCustomValue}
      getStateCounties={getStateCounties}
    />
  );

  return (
    <ModalWrapper
      onRequestClose={() => dispatch(onCloseSocialProjectModal())}
      isOpen={sociaiProjectModalIsOpen}
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
