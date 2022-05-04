import React from 'react';
import styled from 'styled-components';

const StyledStartButton = styled.button`
  
{box-sizing: border-box;
  // margin: 0 0 20px 0;
  // padding: 20px;
  height:14vh;
  align-items: center;
  min-height: 10vh;
  width: 100%;
  border-radius: 20px;
  border: 2px solid black;
  color: white;
  background: #333;
  font-family: Pixel, Arial, Helvetica, sans-serif;
  font-size: 3vh;
  outline: none;
  cursor: pointer;
  -webkit-tap-highlight-color: #6ea5ff;
}:hover{
  background-color:#6ea5ff;
}
`;

const StartButton = ({ callback }) => (
  <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;
