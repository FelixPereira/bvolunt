import axios from 'axios';
import { SafeUser } from '../types/safeUser';
import { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

interface IParams {
  socialProjectId?: string;
  currentUser: SafeUser | null;
}

const useParticipateOnProject = ({
  socialProjectId,
  currentUser,
}: IParams) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const isParticipant = useMemo(() => {
    const socialProjectsList = currentUser?.socialProjectIDs;

    if (!socialProjectId) return;

    return socialProjectsList?.includes(socialProjectId);
  }, [currentUser?.socialProjectIDs, socialProjectId]);

  const toggleParticipate = useCallback(async () => {
    try {
      setIsLoading(true);
      let request;

      if (!isParticipant) {
        request = () =>
          axios.post(`/api/socialprojects/participate/${socialProjectId}`);
      } else {
        request = () =>
          axios.delete(`/api/socialprojects/participate/${socialProjectId}`);
      }

      await request();
      router.refresh();
      toast.success('Operação realizada com sucesso');
      setIsLoading(false);
    } catch (error: any) {
      toast.error('Houve um erro. Tente novamente');
      setIsLoading(false);
    }
  }, [isParticipant, socialProjectId, router]);

  return {
    toggleParticipate,
    isLoading,
    isParticipant,
  };
};

export default useParticipateOnProject;
