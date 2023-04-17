import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  padding-right: 15px;
  padding-left: 15px;
`;

export const Header = styled.header`
  padding: 15px 0;
  background: #032541;
`;

export const OverlayHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(NavLink)`
  svg {
    fill: #ffffff;
    display: block;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  font-size: 22px;
  font-weight: 700px;

  &.active {
    color: white;
    border-bottom: 1px solid #ffffff;
  }

  :not(:last-child) {
    margin-right: 100px;
  }
`;

export const Main = styled.main`
  padding-bottom: 40px;
`;

export const Footer = styled.footer`
  padding: 15px 0;
  color: #ffffff;
  background: #032541;
`;

export const Paragraph = styled.p`
  text-align: center;
  margin-top: 10px;
`;

export const NetworkList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 0;
  padding: 0;
`;

export const LinkNetworks = styled(NavLink)`
  list-style: none;
  svg {
    width: 20px;
    height: 20px;
    fill: #ffffff;
    :hover {
      fill: #00ced1;
    }
  }
`;
