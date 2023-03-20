import styled from 'styled-components';
import { theme } from '../../theme';

interface CoverImageType {
  coverimage?: string;
}

export const Container = styled.section`
  width: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: space-between;
  column-gap: 20px;

  .left__panel {
    width: 35%;
  }

  .right__panel {
    width: 60%;
  }

  h2 {
    margin-bottom: 20px;
  }

  .organization_detail {
    margin-top: 10px;
    display: flex;
    column-gap: 5px;
    align-items: center;
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
  border-radius: 10px;
`;
