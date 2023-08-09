'use client';

import { useAppDispatch } from '@/redux/hooks';
import {
  openLoginModal,
  openRegisterModal,
  openSocialOrgModal,
  openSocialProjectModal,
} from '@/redux/features/modalSlice';
import SubMenuLink from '../subMenuLink';
import { SafeUser } from '@/types/safeUser';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
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

  const handleLogOut = () => {
    signOut();
  };

  const handleOpenLoginModal = () => {
    setIsLinksOpen(!isLinksOpen);
    dispatch(openLoginModal());
  };

  const handleOpenRegisterModal = () => {
    setIsLinksOpen(!isLinksOpen);
    dispatch(openRegisterModal());
  };

  const userLinks = [
    {
      label: 'Minhas organizações',
      onClick: () => dispatch(openSocialOrgModal()),
    },
    {
      label: 'Meus projectos',
      onClick: () => dispatch(openSocialProjectModal()),
    },
    {
      label: 'Meus eventos',
      href: '/meus-eventos',
      onClick: handleNavigation,
    },
    {
      label: 'Sair',
      onClick: handleLogOut,
    },
  ];

  return (
    <div
      className='
        absolute
        right-0
        top-[50px]
        flex
        flex-col
        min-w-fit
        rounded
        bg-neutralLight
        shadow-lg
      '
    >
      {true ? (
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
              onClick={handleOpenLoginModal}
            />
            <SubMenuLink label='Registar' onClick={() => {}} />
          </div>
          <div
            className='
              flex
              flex-col
              absolute 
              bg-neutralLight 
              right-0
            '
          >
            <SubMenuLink label='Voluntário' onClick={handleOpenRegisterModal} />
            <SubMenuLink
              label='Organização'
              onClick={() => dispatch(openSocialOrgModal())}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserLinks;
