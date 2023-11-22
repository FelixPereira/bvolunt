'use client';

import { useAppDispatch } from '@/redux/hooks';
import { openLoginModal } from '@/redux/features/modalSlice';
import { CurrentUserData } from '@/types';

import CustomButton from '../../customButton';
import useParticipateOnProject from '@/hooks/useParticipateOnProject';

interface ParticipateBtnProps {
  currentUserData: CurrentUserData | null;
  socialProjectId?: string;
}

const ParticipateBtn: React.FC<ParticipateBtnProps> = ({
  currentUserData,
  socialProjectId,
}) => {
  const dispatch = useAppDispatch();

  const { isLoading, isParticipant, toggleParticipate } =
    useParticipateOnProject({
      socialProjectId,
      socialProjectIDs: currentUserData?.socialProjectIDs,
    });

  const handleOnParticipate = () => {
    if (!currentUserData) return dispatch(openLoginModal());

    return toggleParticipate();
  };

  return (
    <CustomButton
      spinner={isLoading}
      handleClick={handleOnParticipate}
      outline={isParticipant}
      label={isParticipant ? 'Não participar' : 'Participar'}
    />
  );
};

export default ParticipateBtn;
