import styled from 'styled-components';

export const C = {};

C.Card = styled.div`
  width: calc(16.66% - 14px);
  margin: 0 7px 14px;
  float: left;
  background: #2a2c31;
  border-radius: 0;
  position: relative;

  @media screen and (max-width: 1400px) {
    width: calc(25% - 14px);
  }
  @media screen and (max-width: 1023px) {
    width: calc(25% - 14px);
  }
  @media screen and (max-width: 759px) {
    width: calc(33% - 14px);
  }
  @media screen and (max-width: 479px) {
    width: calc(50% - 6px);
    margin: 0 3px 6px;
  }
`;

C.Poster = styled.div`
  display: block;
  position: relative;
  width: 100%;
  border-radius: 0;
  padding-bottom: 130%;
  font-size: 0;
  background-color: rgba(255, 255, 255, 0.1);
  overflow: hidden;
  & svg {
    fill: white;
    position: absolute;
    z-index: 9999999;
    width: 30px;
    height: 30px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    transition: all 0.5s ease 0s;
    -webkit-transition: all 0.5s ease 0s;
    opacity: 0;
    z-index: 2;
  }
  &:hover {
    cursor: pointer;
    & svg {
      opacity: 1;
    }
    &::after {
      content: '';
      position: absolute;
      top: auto;
      right: 0;
      left: 0;
      bottom: 0;
      height: 100%;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.3);
      transition: all 250ms ease;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
    }
  }

  &::after {
    content: '';
    position: absolute;
    top: 40%;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background: #2a2c31;
    background: -moz-linear-gradient(0deg, #2a2c31 0, rgba(42, 44, 49, 0) 76%);
    background: -webkit-linear-gradient(
      0deg,
      #2a2c31 0,
      rgba(42, 44, 49, 0) 76%
    );
    background: linear-gradient(0deg, #2a2c31 0, rgba(42, 44, 49, 0) 76%);
  }
`;

C.Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

C.InfoL = styled.div`
  position: absolute;
  display: flex;
  bottom: 3px;
  left: 10px;
  z-index: 3;
`;

C.InfoR = styled.div`
  position: absolute;
  bottom: 3px;
  right: 10px;
  z-index: 3;
`;

C.BtnL = styled.div`
  font-size: 12px;
  font-family: arial;
  font-weight: 600;
  display: inline-block;
  line-height: 1.2em;
  padding: 2px 4px;
  border-radius: 5px;
  background: #fff;
  color: #111;
  margin-right: 4px;

  @media screen and (max-width: 579px) {
    font-size: 11px;
    padding: 1px 2px;
  }
`;

C.BtnR = styled.div`
  font-size: 12px;
  font-family: arial;
  font-weight: 600;
  display: inline-block;
  line-height: 1.2em;
  padding: 2px 4px;
  border-radius: 5px;
  background: #7bfcfc;
  color: #111;

  @media screen and (max-width: 759px) {
    font-size: 11px;
    padding: 1px 2px;
  }
  @media screen and (max-width: 479px) {
    padding: 1px 2px;
  }
`;

C.Details = styled.div`
  color: #aaa;
  font-size: 12px;
  padding: 10px;
  border-radius: 0 0 10px 10px;
  min-height: 84px;
`;
C.Name = styled.h3`
  color: #fff;
  font-size: 14px;
  line-height: 1.3em;
  margin: 0;
  font-weight: 500;
  margin-bottom: 8px;
  height: 37px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    color: #cae962;
  }
`;
C.MovieInfo = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
