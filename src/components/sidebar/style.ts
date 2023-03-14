import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.aside`
  width: 20%;
  height: 100%;

  & h3 {
    margin-bottom: 25px;
    color: ${theme.color.textTitle};
    font-size: 20px;
  }

  & li {
    list-style: none;
    border-left: 3px solid ${theme.color.primary};
    margin-bottom: 15px;
    color: ${theme.color.textBody};
    cursor: pointer;
    width: fit-content;
    padding: 5px 20px 5px 10px;
    border-radius: ${theme.borderRadius};

    &:hover {
      background-color: ${theme.color.primary};
      color: ${theme.color.neutralLight};
      transition: 0.3s;
      border-left-color: ${theme.color.secondary};
    }
  }
`;