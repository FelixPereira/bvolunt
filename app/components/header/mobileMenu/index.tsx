'use client';

import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { MAIN_MENU_LINKS, USER_MENU_LINKS } from '@/constants/navigationLinks';
import MenuItem from './MenuItem';

import { SafeUser } from '@/types/safeUser';

import { Door } from 'phosphor-react';

interface MobileMenuProps {
  currentUser: SafeUser | null;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ currentUser }) => {
  const pathName = usePathname();

  return (
    <nav
      className='
        bg-neutralGray
        p-5
        mt-4
        rounded
        flex
        justify-between
        md:hidden
      '
    >
      <MenuItem
        linksList={MAIN_MENU_LINKS}
        menuTitle='MENU PRINCIPAL'
        pathName={pathName}
      />
      {currentUser && (
        <div className='flex flex-col justify-between'>
          <MenuItem
            linksList={USER_MENU_LINKS}
            menuTitle='MENU DO USUÁRIO'
            pathName={pathName}
          />
          <div
            onClick={() => signOut()}
            className='
              flex
              items-center
              gap-x-1
              cursor-pointer
              w-fit
              rounded
              pb-1
              border-primary
              hover:border-b-2
            '
          >
            <Door />
            <strong>Sair</strong>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileMenu;
