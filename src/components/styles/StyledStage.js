import styled from 'styled-components';


export const StyledStage = styled.div
`
margin:0;
padding:0;
display: grid;
  grid-template-rows: repeat(
    ${props => props.height},
    calc(80vh / ${props => props.height})
  );
  grid-template-columns: repeat(${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  
  width:100%;
  max-width: 40vh;
  height:100%;
  max-height:90vh;
  background: #111;


 @media (max-width: 600px) {
  margin:0;
  padding:0;
  display: grid;
  grid-template-rows: 
    repeat( ${props => props.height},
    calc(55vh / ${props => props.height})
  );
  grid-template-columns: 
    repeat( ${props => props.width}, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  
  width:100%;
  min-width:60vw;
  max-width: 80vw;
  height:100%;
  max-height:90vh;
  background: #111;
 }
`;


