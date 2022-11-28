import styled from 'styled-components'

export const T = {}

T.Container = styled.div`
  margin-bottom: 0;
  padding: 0 0 40px 15px;
  background: #121315;
  /* background: -moz-linear-gradient(0deg, #121315 0, rgba(18, 19, 21, 0) 99%); */
  background: -webkit-linear-gradient(0deg, #121315 0, rgba(18, 19, 21, 0) 99%);
  background: linear-gradient(0deg, #121315 0, rgba(18, 19, 21, 0) 99%);

  @media screen and (max-width: 575px) {
    padding: 0 0 40px 0;
  }
`
T.HeadingWrapper = styled.div`
  margin-bottom: 15px;
  display: block;
  width: 100%;
`
T.Heading = styled.h1`
  font-size: 22px;
  line-height: 40px;
  font-weight: 600;
  padding: 0;
  margin: 0;
  color: #cae962;

  @media screen and (max-width: 575px) {
    padding-left: 15px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`
T.ShareBox = styled.div`
  background-color: #121315;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-bottom: -4px;
  position: relative;
  padding: 20px 20px;
  color: #cae962;
  font-size: 14px;
`
T.Gif = styled.img`
  width: 80px;
  height: 80px;

  @media screen and (max-width: 575px) {
    display: none;
  }
`
