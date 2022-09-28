import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing:  border-box;
        margin: 0;
        padding: 0;
        color: #333;
        font-family: 'Kanit', sans-serif;
    }
`;

export const Content = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 20px;
`;
