import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ContainerBox = styled.div`
  display: flex;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),
    inset 0 0 40px rgba(0, 0, 0, 0.1);
  padding: 40px;
`;
export const Title = styled.h4`
  margin-top: 0;
  font-size: 24px;
  font-weight: 700;
  color: #032541;
`;

export const Overlay = styled.p`
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const ContainerDescription = styled.div`
  width: 800px;
  padding: 10px;
  margin-left: 40px;
`;

export const List = styled.ul`
  margin: 0;
  padding-left: 0;
  align-items: center;
  display: flex;
  gap: 20px;
`;

export const Item = styled.li`
  list-style: none;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  text-align: center;
  width: 100px;
  display: block;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),
    inset 0 0 40px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  :hover {
    background-color: #032541;
    color: #ffffff;
  }
`;

export const GenresParagraph = styled.span`
  margin-top: 20px;
  display: block;
`;
