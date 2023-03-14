import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { theme } from '../../theme';

interface HeaderProps {
  backgroundImage: string;
}

export const Container = styled.div`
  border: ${theme.border};
  border-width: 1px;
  text-decoration: none;
  transition: 0.5s;
  background-color: ${theme.color.neutralLight};

  :hover {
    box-shadow: ${theme.boxShadow};
    transition: 0.3s;
  }

  h3 {
    color: ${theme.color.textTitle};
  }

  .project_body {
    padding: 0 15px 10px;
    margin: 10px 0;
  }

  .project_footer {
    padding: 0 15px 20px;

    .footer_content {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }

    .label {
      color: ${theme.color.textBody};
      font-size: 11px;
    }

    .description {
      color: ${theme.color.textTitle};
      font-size: 13px;
      word-break: break-all;
      font-weight: 500;
    }
  }

  &:hover footer {
    display: block;
  }

  .logos-container {
    display: flex;
    column-gap: 5px;
    margin: 20px 0;

    img {
      width: 50px;
      height: 30px;
      object-fit: fill;
      border: ${theme.borderRadius};
    }
  }
`;

export const Header = styled.header<HeaderProps>`
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 180px;
  border-radius: 5px 5px 0 0;
`;
