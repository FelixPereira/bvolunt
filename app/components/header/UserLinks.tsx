'use client';

import { useAppDispatch } from '@/app/redux/hooks';
import {
  onOpenLoginModal,
  onOpenRegisterModal,
} from '@/app/redux/features/modalSlice';
import SubMenuLink from './SubMenuLink';
import { Volunteer } from '@prisma/client';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';

interface UserLinksProps {
  setIsLinksOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLinksOpen: boolean;
  currentUser: Volunteer | null;
}

const UserLinks: React.FC<UserLinksProps> = ({
  setIsLinksOpen,
  isLinksOpen,
  currentUser,
}) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  // const { currentUser } = useAppSelector((state) => state.currentUser);

  const handleNavigation = (href: string) => {
    setIsLinksOpen(!isLinksOpen);
    router.push(href);
  };

  const handleLogOut = () => {
    signOut();
  };

  const handleOpenLoginModal = () => {
    setIsLinksOpen(!isLinksOpen);
    dispatch(onOpenLoginModal());
  };

  const handleOpenRegisterModal = () => {
    setIsLinksOpen(!isLinksOpen);
    dispatch(onOpenRegisterModal());
  };

  const userLinks = [
    {
      label: 'Minhas organizações',
      href: '/minhas-organizacoes',
      onClick: handleNavigation,
    },
    {
      label: 'Meus projectos',
      href: '/meus-projects',
      onClick: handleNavigation,
    },
    {
      label: 'Meus eventos',
      href: '/meus-eventos',
      onClick: handleNavigation,
    },
    {
      label: 'Sair',
      href: '/',
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
      {currentUser ? (
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
