import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.div``;
export const NumberPreview = styled.div`
  padding: 10px 16px;
  margin: 20px 0;
  border-bottom: 1px solid #fafafa;

  &:hover {
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 20px;
    color: #79caff;
    margin-bottom: 8px;
  }
`;

export const NumberLink = styled(Link)`
  text-decoration: none;
`;
