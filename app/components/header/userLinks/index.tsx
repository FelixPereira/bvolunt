'use client';

import { useAppDispatch } from '@/app/redux/hooks';
import {
  openLoginModal,
  openRegisterModal,
  openSocialOrgModal,
  openSocialProjectModal,
} from '@/app/redux/features/modalSlice';
import SubMenuLink from '../subMenuLink';
import { SafeUser } from '@/app/types/safeUser';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

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
        gap-y-2
        w-[165px]
        rounded
        bg-neutralLight
        shadow-lg
      '
    >
      {true ? (
        <>
          {userLinks.map((link) => (
            <SubMenuLink
              key={link.label}
              label={link.label}
              onClick={() => link.onClick(link.href)}
            />
          ))}
        </>
      ) : (
        <>
          <SubMenuLink label='Iniciar sessão' onClick={handleOpenLoginModal} />
          <SubMenuLink label='Registar' onClick={handleOpenRegisterModal} />
        </>
      )}
    </div>
  );
};

export default UserLinks;
