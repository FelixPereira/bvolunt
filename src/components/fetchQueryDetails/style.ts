import styled from 'styled-components';
import { theme } from '../../theme';

interface FetchQueryProps {
  isActive: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 40px;
    margin-bottom: 10px;
    color: ${theme.color.textTitle};
  }

  p {
    margin-bottom: 40px;
  }

  .order {
    display: flex;
    flex-direction: column;
    row-gap: 15px;

    button {
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
    }

    ul {
      list-style: none;
      background-color: ${theme.color.neutralLight};
      margin-top: 10px;
      position: absolute;
      border-radius: ${theme.borderRadius};
      box-shadow: ${theme.boxShadow};
    }
  }
`;

export const OrderByAsc = styled.li<FetchQueryProps>`
  background: ${(props) =>
    props.isActive ? theme.color.neutralGray : theme.color.neutralLight};
  padding: 10px;
  cursor: pointer;

  :hover {
    background-color: ${theme.color.neutralGray};
  }
`;

export const OrderByDesc = styled(OrderByAsc)`
  background: ${(props) =>
    props.isActive ? theme.color.neutralGray : theme.color.neutralLight};
`;
