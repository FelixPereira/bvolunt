import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../theme';

interface HeaderImage {
  backgroundImage: string;
}

export const Card = styled.article`
  border-radius: 10px;
  border-width: 1px;
  text-decoration: none;
  transition: 0.5s;
  margin-top: 20px;
  background-color: ${theme.color.neutralLight};

  :hover {
    box-shadow: ${theme.boxShadow};
    transition: 0.3s;
  }

  h3 {
    color: ${theme.color.textTitle};
  }

  .card_body {
    padding: 0 15px 10px;
    margin: 20px 0;
  }

  .card_footer {
    padding: 0 15px 20px;
    border-top: 2px solid ${theme.color.neutralGray};

    .footer_content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
    }

    .label {
      color: ${theme.color.textBody};
      font-size: 12px;
    }

    .description {
      color: ${theme.color.textTitle};
      font-size: 13px;
      word-break: break-all;
      font-weight: 500;
    }
  }

  .logos-container {
    display: flex;
    column-gap: 5px;
    margin: 30px 0 20px;

    img {
      width: 50px;
      height: 30px;
      object-fit: fill;
      border: ${theme.borderRadius};
    }
  }
`;

export const HeaderImage = styled.div<HeaderImage>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 90%;
  height: 180px;
  border-radius: 10px 10px 10px 0;
  margin-top: -20px;
  box-shadow: 24px 24px 80px -16px rgba(0, 0, 0, 0.24);
`;
