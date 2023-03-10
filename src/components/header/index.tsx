// import logo from '../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

import { theme } from '../../theme';
import styled from 'styled-components';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  .logo-container {
  }

  & .input-container {
    border: 1px solid red;
    width: 500px;
    height: 40px;
    border-radius: ${theme.borderRadius};

    input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      padding: 15px;
      font-size: 14px;
    }
  }

  & .links-container {
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
  }

  & a {
    text-decoration: none;
    color: ${theme.color.textTitle}
  }
`;

export function Header () {
  return(
    <StyledHeader>
      <div className="logo-container">
        {/* <img src={logo} alt="" /> */}
      </div>
      <div className="input-container">
        <input type="search" />
      </div>
      <nav className='links-container' aria-label='Visitor links'>
        <Link to=''>Link 1</Link>
        <Link to=''>Link 1</Link>
        <Link to=''>Link 1</Link>
        <Link to=''>Link 1</Link>
      </nav>
    </StyledHeader>
  );
}