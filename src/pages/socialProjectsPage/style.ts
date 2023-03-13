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

      /* select {
        border: none;
        outline: none;
        background-color: ${theme.color.neutralGray};
        padding: 10px 20px;
      } */

      button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 10px;
      }

      ul {
        list-style: none;
        border: ${theme.border};
        background-color: ${theme.color.neutralGray};
        margin-top: 10px;

        li {
          padding: 5px 10px;
          cursor: pointer;

          :hover {
            background-color: #fff;
          }
        
          :not(:last-child) {
          margin-bottom: 10px;
        }
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
