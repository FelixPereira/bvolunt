'use client';

import Container from '../Container';
import Logo from './logo';
import NavLinks from './navLinks';
import SearchInput from './searchInput';
import MobileMenu from './mobileMenu';
import MenuIcon from './menuIcon';
import { toggleMobileMenu } from '@/redux/features/mobileMenu';
import { SafeUser } from '@/types/safeUser';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { Hamburger, X } from 'phosphor-react';

interface HeaderProps {
  currentUser: SafeUser | null;
}

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  const dispatch = useAppDispatch();
  const { isMenuOpened } = useAppSelector((state) => state.mobileMenu);

  return (
    <header
      className={`
        w-full
        py-4
        fixed
        bg-neutralLight
        shadow-[0px_30px_60px_-30px_rgba(0,0,0,0.16)]
        z-[2]
      `}
    >
      <Container>
        <div className='flex justify-between items-center gap-x-5'>
          <Logo />

          <SearchInput />

          <NavLinks currentUser={currentUser} />

          <div className='md:hidden'>
            <MenuIcon handleClick={() => dispatch(toggleMobileMenu())}>
              {isMenuOpened ? (
                <X height={30} width={30} weight='bold' />
              ) : (
                <Hamburger height={30} width={30} weight='bold' />
              )}
            </MenuIcon>
          </div>
        </div>
        {isMenuOpened && <MobileMenu currentUser={currentUser} />}
      </Container>
    </header>
  );
};

export default Header;
