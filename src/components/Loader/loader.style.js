import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const L = {};



const skeletonLoading = keyframes`
  0% {
    background-color: hsl(228, 7%, 14%);
  }
  100% {
    background-color: hsl(228, 7%, 50%, 0.1);
  }
`;

L.Skeleton = styled.div`
  animation: ${skeletonLoading} 1s linear infinite alternate;

`;

L.Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
  padding-left: 2em;
  width: 100%;
  height: 600px;
  align-items: start;
  @media screen and ((max-width: 1400px)) {
    height: 570px;
  }
  @media screen and (max-width: 1299px) {
    height: 500px;
  }
  @media screen and (max-width: 759px) {
    height: 350px;
  }
`;

L.Group = styled.div`
display: flex;
flex-direction:column;
gap: 1em;
`


L.Rank = styled.div`
width:20px;
height: 10px;
`
L.Title = styled.div`
width:100px;
height: 20px;
`


L.Desc = styled.div`
width:300px;
height: 10px;
`


//skeleton
L.Wrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
margin: 2em;
gap: 2em;
`
L.Card = styled.div`
width: 100%;
height: 400px;
`


