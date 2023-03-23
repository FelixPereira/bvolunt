import styled from 'styled-components';

interface CoverImageType {
  coverimage?: string;
}

export const Container = styled.section`
  width: 80%;
  padding: 40px 0;
  margin: 0 auto;

  .organization-details {
    margin-top: 50px;
    display: flex;
    column-gap: 50px;

    h3 {
      margin-bottom: 10px;
    }

    li {
      margin-bottom: 10px;

      strong {
        font-size: 14px;
      }

      p {
        margin-top: 5px;
        font-size: 14px;
      }
    }

    div {
      display: flex;
      flex-direction: column;

      ul {
        list-style: none;
      }
    }
  }

  h2 {
    margin-bottom: 20px;
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
