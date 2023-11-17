'use client';

import { useAppDispatch } from '@/redux/hooks';
import { openLoginModal } from '@/redux/features/modalSlice';

import CustomButton from '../../customButton';
import useParticipateOnProject from '@/hooks/useParticipateOnProject';

interface ParticipateBtnProps {
  socialProjectIds?: string[];
  socialProjectId?: string;
}

const ParticipateBtn: React.FC<ParticipateBtnProps> = ({
  socialProjectIds,
  socialProjectId,
}) => {
  const dispatch = useAppDispatch();

  const { isLoading, isParticipant, toggleParticipate } =
    useParticipateOnProject({
      socialProjectId,
      socialProjectIds,
    });

  const handleOnParticipate = () => {
    if (!socialProjectIds) return dispatch(openLoginModal());

    return toggleParticipate();
  };

  return (
    <CustomButton
      spinner={isLoading}
      handleClick={handleOnParticipate}
      label={isParticipant ? 'Abandonar projecto' : 'Participar'}
    />
  );
};

export default ParticipateBtn;
