import { useCallback, useMemo, useState } from 'react';
import { SafeUser } from '../types/safeUser';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';

interface IParams {
  currentUser: SafeUser | null;
  socialOrgId?: string;
}

export function useParticipateOnOrg({ currentUser, socialOrgId }: IParams) {
  const [isLoading, setIsloading] = useState(false);
  const router = useRouter();

  const isParticipant = useMemo(() => {
    const socialrOgsList = currentUser?.socialOrganizationIDs;

    if (!socialOrgId) return;

    return socialrOgsList?.includes(socialOrgId);
  }, [currentUser, socialOrgId]);

  const toggleParticipate = useCallback(async () => {
    let request;
    try {
      setIsloading(true);
      if (!isParticipant) {
        request = () =>
          axios.post(`/api/social-organizations/participate/${socialOrgId}`);
      } else {
        request = () =>
          axios.delete(`/api/social-organizations/participate/${socialOrgId}`);
      }

      await request();
      toast.success('Operação realizada com sucesso.');
      router.refresh();
      setIsloading(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const { response } = error;
        const message = response?.data.message;
        toast.error(message);
        setIsloading(false);
        return;
      }
      toast.error('Houve um erro. Tente novamente.');
      return;
    }
  }, [isParticipant, socialOrgId, router]);

  return {
    isLoading,
    toggleParticipate,
    isParticipant,
  };
}
