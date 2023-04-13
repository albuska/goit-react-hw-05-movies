import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const StyledLink = styled(NavLink)`
  text-decoration: none;
`;

export const Title = styled.h1`
  margin-top: 20px;
  text-align: center;
  font-style: italic;
`;
export const List = styled.ul`
  margin-top: 20px;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Item = styled.li`
  list-style: none;
  width: calc(100% / 5);
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-align: center;
  cursor: pointer;

  :hover {
    -webkit-transform: translateX(-7px);
    transform: translateX(-7px);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

export const TitleCard = styled.h4`
  color: #0000ff;
`;

export const RatingCard = styled.span`
  color: #032541;
`;
