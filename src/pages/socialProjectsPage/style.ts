import styled from 'styled-components';
import { theme } from '../../theme';

export const Container = styled.div`
  width: 100%;

  .content_header {
    display: flex;
    justify-content: space-between;

    .order {
      display: flex;
      flex-direction: column;
      row-gap: 15px;

      select {
        border: none;
        outline: none;
        background-color: ${theme.color.neutralGray};
        padding: 10px 20px;
      }
    }
  }

  h2 {
    font-size: 40px;
    margin-bottom: 10px;
    color: ${theme.color.textTitle};
  }

  p {
    color: ${theme.color.textBody};
    margin-bottom: 40px;
  }
`;
