import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import { StyledHeader } from './style';
import { SearchForm } from './searchForm';

export function Header() {
  return (
    <StyledHeader>
      <Link to='/' className='logo-container'>
        <img src={logo} alt='Logo do Portal do Voluntário' />
      </Link>
      <SearchForm />
      <nav className='links-container' aria-label='Visitor links'>
        <Link to='/projectos-sociais'>Projectos</Link>
        <Link to='/organizacoes'>Organizações</Link>
        <Link to='#'>Login</Link>
        <Link to='#'>Sign up</Link>
      </nav>
    </StyledHeader>
  );
}
