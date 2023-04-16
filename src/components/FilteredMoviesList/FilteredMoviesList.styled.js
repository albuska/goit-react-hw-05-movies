import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;

export const Item = styled.li`
  width: calc() 100% / 6;
  /* text-align: center; */
  align-items: center;
`;