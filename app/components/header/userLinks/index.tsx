'use client';

import { useAppDispatch } from '@/redux/hooks';
import {
  openLoginModal,
  openRegisterTypeModal,
} from '@/redux/features/modalSlice';
import SubMenuLink from '../subMenuLink';
import { SafeUser } from '@/types/safeUser';
import { useRouter } from 'next/navigation';
import { USER_LINKS } from '@/constants/navLinks';

interface UserLinksProps {
  setIsLinksOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLinksOpen: boolean;
  currentUser: SafeUser | null;
}

const UserLinks: React.FC<UserLinksProps> = ({
  setIsLinksOpen,
  isLinksOpen,
  currentUser,
}) => {
  // const [isRegisterOpen, setIsRegisterOpen] = useState(true);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleNavigation = (href: string | undefined) => {
    if (!href) {
      return null;
    }
    setIsLinksOpen(!isLinksOpen);
    router.push(href);
  };

  return (
    <div
      className='
        absolute
        right-0
        top-[50px]
        flex
        flex-col
        min-w-[120px]
        rounded
        bg-neutralLight
        shadow-lg
      '
    >
      {currentUser ? (
        <>
          {USER_LINKS.map((link) => (
            <SubMenuLink
              key={link.label}
              label={link.label}
              onClick={() => router.push(link.url)}
            />
          ))}
        </>
      ) : (
        <div>
          <div className='flex flex-col'>
            <SubMenuLink
              label='Iniciar sessão'
              onClick={() => dispatch(openLoginModal())}
            />
            <SubMenuLink
              label='Registar'
              onClick={() => dispatch(openRegisterTypeModal())}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserLinks;
