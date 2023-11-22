import axios, { isAxiosError } from 'axios';
import { useCallback, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

interface IParams {
  socialProjectId?: string;
  socialProjectIDs?: string[];
}

const useParticipateOnProject = ({
  socialProjectId,
  socialProjectIDs,
}: IParams) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const isParticipant = useMemo(() => {
    if (!socialProjectId || !socialProjectIDs) return;

    return socialProjectIDs.includes(socialProjectId);
  }, [socialProjectIDs, socialProjectId]);

  const toggleParticipate = useCallback(async () => {
    try {
      setIsLoading(true);
      let request;

      if (!isParticipant) {
        request = () =>
          axios.post(`/api/social-projects/participate/${socialProjectId}`);
      } else {
        request = () =>
          axios.delete(`/api/social-projects/participate/${socialProjectId}`);
      }

      await request();
      toast.success('Operação realizada com sucesso');
      router.refresh();
      setIsLoading(false);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        const { response } = error;
        const message = response?.data.message;
        toast.error(message);
      } else {
        toast.error('Houve um error. Tente novamente');
      }
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
