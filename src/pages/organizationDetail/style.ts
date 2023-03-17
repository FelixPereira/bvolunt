import styled from 'styled-components';
import { theme } from '../../theme';

interface CoverImageType {
  coverimage?: string;
}

export const Container = styled.section`
  border: ${theme.border};
  width: 100%;
  padding: 40px;

  h2 {
    margin-bottom: 20px;
    color: ${theme.color.textTitle};
  }

  .organization_description {
    margin-bottom: 30px;
    width: 80%;
  }

  .organization_detail {
    margin-top: 10px;
    display: flex;
    column-gap: 5px;
    align-items: center;

    p {
      color: ${theme.color.textBody};
    }
  }
`;

export const CoverImage = styled.div<CoverImageType>`
  background-image: url(${(props) => props.coverimage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 400px;
  margin: 0 auto 30px;
`;
