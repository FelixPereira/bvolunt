'use client';

import ModalWrapper from '../modalWrapper/ModalWrapper';
import CustomInput from '../form/customInput/CustomInput';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { onCloseSocialProjectModal } from '@/app/redux/features/modalSlice';
import { toast } from 'react-hot-toast';
import axios from 'axios';
import { useState } from 'react';

import CustomSelect from '../form/customSelect/CustomSelect';

import { CustomSelectOption } from '../form/customSelect/CustomSelect';

import { PROVINCES } from '@/data/provinces';

const provinces: CustomSelectOption[] = PROVINCES.map((province) => ({
  label: province.name,
  value: province.name,
}));

const SocialProjectModal = () => {
  const { sociaiProjectModalIsOpen } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  let [counties, setCounties] = useState<any[] | undefined>([]);

  const getStateCounties = (provinceName?: string) => {
    const countiess = PROVINCES.find(
      (province) => province.name === provinceName
    )?.counties.map((county) => ({
      label: county,
      value: county,
    }));

    setCounties(countiess);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      title: '',
      description: '',
      totalVolunteers: 1,
      province: '',
      county: '',
      coverImg: '',
      responsible: '',
    },
  });

  const province = watch('province');
  const county = watch('county');

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  const onRequestClose = () => {
    dispatch(onCloseSocialProjectModal());
  };

  const handleSubmitForm: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    axios
      .post('/api/register', data)
      .then(() => {
        dispatch(onCloseSocialProjectModal());
        toast.success('Usuário criado com sucesso.');
      })
      .catch((err) => {
        toast.error('Algo correu mal.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className='flex flex-col gap-y-4 mt-8'>
      <CustomInput
        id='title'
        label='Nome do projecto'
        register={register}
        errors={errors}
        required={true}
        disabled={isLoading}
      />
      <CustomInput
        id='totalVolunteers'
        label='Nº. total de voluntários'
        register={register}
        errors={errors}
        required={true}
        disabled={isLoading}
      />
      <CustomInput
        id='responsible'
        label='Nome do responsável'
        register={register}
        errors={errors}
        required={true}
        disabled={isLoading}
      />
      <CustomSelect
        onChange={(value) => setCustomValue('province', value)}
        getStateCounties={getStateCounties}
        options={provinces}
        label='Província'
        name='county'
        value={province}
      />
      <CustomSelect
        onChange={(value) => setCustomValue('county', value)}
        options={counties}
        label='Municícpio'
        name='county'
        value={county}
      />
      <CustomInput
        id='coverImg'
        label='Imagem de capa'
        register={register}
        errors={errors}
        required={true}
        disabled={isLoading}
      />
      <CustomInput
        id='description'
        label='Descrição'
        type='text'
        register={register}
        errors={errors}
        required={true}
        disabled={isLoading}
      />
    </div>
  );

  return (
    <ModalWrapper
      onRequestClose={onRequestClose}
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
