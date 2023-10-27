import styled from "styled-components";

export const CTooltip = {}

CTooltip.Wrapper = styled.div`
display: ${({ show }) => (show ? 'block' : 'none')};
width: 300px;
height: 300px;
background-color: red;
position: absolute;
top: ${({ top }) => top};
left: 50%;
z-index: 10;

@media screen and (max-width: 1278px) {
    display:none;
  }
`