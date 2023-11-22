'use client';

import { useParticipateOnOrg } from '@/hooks/useParticipateOnOrg';
import { useAppDispatch } from '@/redux/hooks';
import { openLoginModal } from '@/redux/features/modalSlice';
import CustomButton from '../../customButton';
import { CurrentUserData } from '@/types';

interface ParticipateBtnProps {
  socialOrgId?: string;
  currentUserData: CurrentUserData | null;
}

const ParticipateBtn: React.FC<ParticipateBtnProps> = ({
  currentUserData,
  socialOrgId,
}) => {
  const dispatch = useAppDispatch();
  const { isLoading, isParticipant, toggleParticipate } = useParticipateOnOrg({
    socialOrgsIDs: currentUserData?.socialOrganizationIDs,
    socialOrgId,
  });

  const handleOnParticipate = () => {
    if (!currentUserData) return dispatch(openLoginModal());

    return toggleParticipate();
  };

  return (
    <CustomButton
      label={isParticipant ? 'Não participar' : 'Participar'}
      outline={isParticipant}
      handleClick={handleOnParticipate}
      spinner={isLoading}
    />
  );
};

export default ParticipateBtn;
