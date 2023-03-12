import styled from "styled-components";
import { theme } from "../../../theme";

export const Container = styled.form`
  width: 500px;
  height: 45px;
  border-radius: 50px;
  background-color: ${theme.color.neutralGray};

  display: flex;
  align-items: center;
  column-gap: 15px;
  padding: 15px 20px;

  input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: inherit;
    outline: none;
    font-size: 15px;
    background: transparent;
  }
`;