import { theme } from '../../theme';
import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  column-gap: 20px;

  & .input-container {
    width: 500px;
    height: 40px;
    border-radius: 50px;
    border: ${theme.border};

    input {
      width: 100%;
      height: 100%;
      border: none;
      border-radius: inherit;
      outline: none;
      padding: 15px;
      font-size: 14px;
      /* background-color: ${theme.color.neutralGray}; */
      background-color: transparent;
    }
  }

  & .links-container {
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
  }

  & a {
    text-decoration: none;
    color: ${theme.color.textTitle};
    font-size: 15px;
  }
`;
