'use client';

import CustomButton from '@/components/customButton';
import { Plus } from 'lucide-react';
import { openSocialProjectModal } from '@/redux/features/modalSlice';
import { useAppDispatch } from '@/redux/hooks';

const ButtomWrapper = () => {
  const dispatch = useAppDispatch();

  return (
    <CustomButton
      label='Adicionar'
      handleClick={() => dispatch(openSocialProjectModal())}
      icon={Plus}
    />
  );
};

export default ButtomWrapper;
