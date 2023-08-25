import { SafeUser } from '@/types/safeUser';
import { getUserName } from '@/utils/user';

interface WllcomeBarProps {
  currentUser: SafeUser | null;
}

const WellcomeBar: React.FC<WllcomeBarProps> = ({ currentUser }) => {
  const userName = getUserName(currentUser?.name);
  return (
    <h3 className='text-[25px] font-bold border-b-4 border-b-primary'>
      Olá, {userName?.firstLastName}!
    </h3>
  );
};

export default WellcomeBar;
