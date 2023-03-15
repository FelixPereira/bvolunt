import styled from "styled-components";
import { theme } from "../../theme";

interface HeaderImageType {
  backgroundimage?: string;
}

export const Container = styled.section`
  border: ${theme.border};
  width: 100%;
  padding: 40px;

  .detail_container {

    .organization_detail {
      margin-top: 10px;
      display: flex;
      column-gap: 5px;
      align-items: center;

      p {
        color: ${theme.color.textBody};
      }
    }
  }
`;

export const HeaderImage = styled.div<HeaderImageType>`
  background-image: url(${props => props.backgroundimage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 400px;
  margin: 0 auto 30px;


`;