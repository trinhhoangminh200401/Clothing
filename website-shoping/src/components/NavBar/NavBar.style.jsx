import styled from "styled-components";
import { Link } from "react-router-dom";
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 6.75em;
  padding: 25px;
`;
export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: black;

`;