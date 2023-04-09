import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  border: none;
  background-color: ${theme.color.primary};
  color: ${theme.color.neutralLight};
  cursor: pointer;
  border-radius: ${theme.borderRadius};

  :hover {
    background-color: ${theme.color.secondary};
  }
`;
