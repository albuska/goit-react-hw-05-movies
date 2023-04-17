import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  list-style: none;
`;
export const Item = styled.li`
  width: calc(100% / 6);
  height: 270px;
  text-align: center;
  padding: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),
    inset 0 0 40px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 100px;
  height: auto;
`;
