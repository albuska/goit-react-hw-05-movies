import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  margin: 10px 0;
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 5px;
  font-size: 18px;
  color: #000000;

  :hover {
    color: #8A2BE2;
  }
`;