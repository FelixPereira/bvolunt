'use client';

import { useParticipateOnOrg } from '@/hooks/useParticipateOnOrg';
import { useAppDispatch } from '@/redux/hooks';
import { openLoginModal } from '@/redux/features/modalSlice';
import CustomButton from '../../customButton';

interface ParticipateBtnProps {
  socialOrgId?: string;
  socialOrgsIds?: string[];
}

const ParticipateBtn: React.FC<ParticipateBtnProps> = ({
  socialOrgsIds,
  socialOrgId,
}) => {
  const dispatch = useAppDispatch();
  const { isLoading, isParticipant, toggleParticipate } = useParticipateOnOrg({
    socialOrgsIds,
    socialOrgId,
  });

  const handleOnParticipate = () => {
    if (!socialOrgsIds) return dispatch(openLoginModal());

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
