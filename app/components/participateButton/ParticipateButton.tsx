import { useAppDispatch } from '@/app/redux/hooks';
import { SafeUser } from '@/app/types/safeUser';
import { onOpenLoginModal } from '@/app/redux/features/modalSlice';

import CustomButton from '../customButton';
import { useParticipateOnProject } from '../../hooks/useParticipateOnProject';

interface ParticipateButtonProps {
  currentUser: SafeUser | null;
  socialProjectId?: string;
}

const ParticipateButton: React.FC<ParticipateButtonProps> = ({
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
    if (!currentUser) {
      dispatch(onOpenLoginModal());
    }
    toggleParticipate();
  };

  return (
    <CustomButton
      spinner={isLoading}
      onClick={handleOnParticipate}
      label={isParticipant ? 'Abandonar projecto' : 'Fazer parte do projecto'}
    />
  );
};

export default ParticipateButton;
