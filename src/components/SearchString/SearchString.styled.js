import styled from "styled-components";

export const InputBox = styled.div`
  position: relative;
  padding: 40px 0;

  svg {
    position: absolute;
    width: 47px;
    height: 47px;
    right: 172px;
    bottom: 40px;
    display: block;
    background: #add8e6;
    cursor: pointer;

    :hover {
      background: #4682b4;
    }
  }
`;

export const Input = styled.input`
  /* position: absolute; */
  width: 70%;
  display: block;
  margin: 0 auto;
  border: none;
  background: #b0c4de;
  padding: 5px;
  border-radius: 3px;
  padding: 15px;
  outline: none;
`;

