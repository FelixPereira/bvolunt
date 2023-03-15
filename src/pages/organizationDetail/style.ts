import styled from "styled-components";
import { theme } from "../../theme";

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