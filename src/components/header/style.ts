import { theme } from '../../theme';
import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  column-gap: 20px;

  .links-container {
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
  }

  a {
    text-decoration: none;
    color: ${theme.color.textTitle};
    font-size: 15px;
  }
`;
