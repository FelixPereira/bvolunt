'use client';

import { Volunteer } from '@prisma/client';
import Container from '../Container';
import Logo from './Logo';
import NavLinks from './NavLinks';
import SearchInput from './SearchInput';

interface HeaderProps {
  currentUser: Volunteer | null;
}

const Header: React.FC<HeaderProps> = ({ currentUser }) => {
  return (
    <header
      className='
        w-full
        py-4
        fixed
        bg-neutralLight
        shadow-boxShadow
      '
    >
      <Container>
        <div
          className='
            flex
            justify-between
            items-center
            gap-x-4
          '
        >
          <Logo />
          <SearchInput />
          <NavLinks currentUser={currentUser} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
