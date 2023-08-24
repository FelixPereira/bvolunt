'use client';

import { useAppDispatch } from '@/redux/hooks';
import { SafeUser } from '@/types/safeUser';
import { openLoginModal } from '@/redux/features/modalSlice';

import CustomButton from '../../customButton';
import useParticipateOnProject from '@/hooks/useParticipateOnProject';

interface ParticipateBtnProps {
  currentUser: SafeUser | null;
  socialProjectId?: string;
}

const ParticipateBtn: React.FC<ParticipateBtnProps> = ({
  currentUser,
  socialProjectId,
}) => {
  const dispatch = useAppDispatch();

  const { isLoading, isParticipant, toggleParticipate } =
    useParticipateOnProject({
      socialProjectId,
      currentUser,
    });

  const handleOnParticipate = () => {
    if (!currentUser) return dispatch(openLoginModal());

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
