import styled from "styled-components";

export const InputBox = styled.div`
  position: relative;
  padding: 40px 0;
`;

export const Input = styled.input`
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

export const SubmitButton = styled.button`
  position: absolute;
  display: block;
  width: 47px;
  height: 48px;
  background: #add8e6;
  cursor: pointer;
  border: none;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  bottom: 40px;
  right: 172px;

  :hover {
    background: #4682b4;
  }

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;