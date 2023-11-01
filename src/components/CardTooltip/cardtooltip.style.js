import styled from "styled-components";

export const CTooltip = {}

CTooltip.Wrapper = styled.div`
opacity: ${({ show }) => (show ? '1' : '0')};
display: flex;
flex-direction: column;
width: 300px;
gap: .5em;
padding:1em;
position: absolute;
top: ${({ top }) => top};
transition:opacity 250ms ease-in;
left: 50%;
z-index: 10;
word-wrap: break-word;
border: none;
background: rgba(78,78,82,.6);
backdrop-filter: blur(10px);
-webkit-backdrop-filter: blur(10px);
border-radius: 7px;
box-shadow: 0 20px 20px rgba(0,0,0,.05);



@media screen and (max-width: 1278px) {
    display:none;
  }
`

CTooltip.Title = styled.p`
color: #fff;
font-weight:600;
`
CTooltip.Details = styled.div`
display: flex;
justify-content: space-between;
`
CTooltip.Description = styled.p`
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;
font-family: "Poppins", sans-serif;
font-size: 12px;
margin: 2em 0;
color: #cccccc;
  `
CTooltip.Info = styled.div`
display: flex;
flex-direction: column;
gap: .3em;
color: #fff;
font-size: 12px;
`
CTooltip.BtnWrapper = styled.div`
display: flex;
gap: 1em;

`
CTooltip.Btn = styled.button`
border-radius: 20px;
width: 80%;
display: flex;
justify-content: center;
align-items: center;
gap: 1em;
font-size: 13px;
font-weight: 600;
background-color: #ffdd95;
`