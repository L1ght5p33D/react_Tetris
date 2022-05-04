import styled from 'styled-components';
// BG Image
import bgImage from '../../img/pgrad_bg.jpeg';

export const StyledTetrisWrapper = styled.div`
  // width: 98vw;
  height: 80vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow-y: hidden;
`;


  export const StyledTetris = styled.div`
  display: flex;
  align-items: flex-start;
  // padding: 40px;
  // margin: 0 auto;
  // max-width: 100%;
  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px;
  }

`;

