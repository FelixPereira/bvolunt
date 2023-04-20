'use client';

import Container from '../Container';
import Logo from './Logo';
import NavLinks from './NavLinks';
import SearchInput from './SearchInput';

const Header = () => {
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
          <NavLinks />
        </div>
      </Container>
    </header>
  );
};

export default Header;
