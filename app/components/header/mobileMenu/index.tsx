'use client';

import { NAV_LINKS, USER_LINKS } from '@/constants/navLinks';
import { usePathname } from 'next/navigation';
import MenuItem from './MenuItem';
import CustomButton from '../../customButton';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/types/safeUser';

interface MobileMenuProps {
  currentUser: SafeUser | null;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ currentUser }) => {
  const pathName = usePathname();

  return (
    <nav
      className='
        pt-[30px]
        pb-[30px]
        flex
        justify-between
        md:hidden
      '
    >
      <MenuItem
        linksList={NAV_LINKS}
        menuTitle='MENU PRINCIPAL'
        pathName={pathName}
      />
      {true && (
        <div className='flex flex-col justify-between'>
          <MenuItem
            linksList={USER_LINKS}
            menuTitle='MENU DO USUÁRIO'
            pathName={pathName}
          />
          <CustomButton label='Sair' onClick={() => signOut()} outline />
        </div>
      )}
    </nav>
  );
};

export default MobileMenu;
