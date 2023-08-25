'use client';

import { useParticipateOnOrg } from '@/hooks/useParticipateOnOrg';
import CustomButton from '../../customButton';
import { SafeUser } from '@/types';
import { useAppDispatch } from '@/redux/hooks';
import { openLoginModal } from '@/redux/features/modalSlice';

interface ParticipateBtnProps {
  currentUser: SafeUser | null;
  socialOrgId?: string;
}

const ParticipateBtn: React.FC<ParticipateBtnProps> = ({
  currentUser,
  socialOrgId,
}) => {
  const dispatch = useAppDispatch();
  const { isLoading, isParticipant, toggleParticipate } = useParticipateOnOrg({
    currentUser,
    socialOrgId,
  });

  const handleOnParticipate = () => {
    if (!currentUser) return dispatch(openLoginModal());

    return toggleParticipate();
  };

  return (
    <CustomButton
      label={isParticipant ? 'Abandonar organização' : 'Participar'}
      handleClick={handleOnParticipate}
      spinner={isLoading}
    />
  );
};

export default ParticipateBtn;
