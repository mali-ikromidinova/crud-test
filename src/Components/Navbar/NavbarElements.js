import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  padding: 20px;
  display: flex;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  border-bottom: 1px solid #f2f2f2;
`;
export const NavbarTitle = styled.h1`
  color: #79caff;
`;
export const NavbarLinks = styled.div`
  margin-left: auto;
`;

export const NavbarLink = styled(Link)`
  margin-left: 16px;
  text-decoration: none;
  padding: 6px;
`;
