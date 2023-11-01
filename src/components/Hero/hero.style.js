import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const H = {};

H.Swiper = styled(Swiper)`
  position: relative;
  display: flex;
  width: 100%;
  height: 600px;
  overflow: hidden;
  z-index: 1;

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

H.Slides = styled(SwiperSlide)``;

H.ImgContainer = styled.div`
  &::before {
    content: "";
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #202125;
    background: -moz-linear-gradient(
      90deg,
      #202125 0,
      rgba(32, 33, 37, 0.6) 40%,
      rgba(32, 33, 37, 0) 60%,
      rgba(32, 33, 37, 0) 80%,
      #202125 100%
    );
    background: -webkit-linear-gradient(
      90deg,
      #202125 0,
      rgba(32, 33, 37, 0.6) 40%,
      rgba(32, 33, 37, 0) 60%,
      rgba(32, 33, 37, 0) 80%,
      #202125 100%
    );
    background: linear-gradient(
      90deg,
      #202125 0,
      rgba(32, 33, 37, 0.6) 40%,
      rgba(32, 33, 37, 0) 60%,
      rgba(32, 33, 37, 0) 80%,
      #202125 100%
    );
  }

  &::after {
    content: "";
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: -1px;
    background: #202125;
    background: -moz-linear-gradient(
      0deg,
      #202125 0,
      rgba(32, 33, 37, 0) 50%,
      #202125 100%
    );
    background: -webkit-linear-gradient(
      0deg,
      #202125 0,
      rgba(32, 33, 37, 0) 50%,
      #202125 100%
    );
    background: linear-gradient(
      0deg,
      #202125 0,
      rgba(32, 33, 37, 0) 50%,
      #202125 100%
    );
  }
  @media screen and (max-width: 759px) {
    &::after {
      background: #202125;
      background: -moz-linear-gradient(
        0deg,
        #202125 0,
        rgba(32, 33, 37, 0) 82%
      );
      background: -webkit-linear-gradient(
        0deg,
        #202125 0,
        rgba(32, 33, 37, 0) 82%
      );
      background: linear-gradient(0deg, #202125 0, rgba(32, 33, 37, 0) 82%);
    }
    &::before {
      content: "";
      opacity: 0;
    }
  }
`;

H.Img = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  @media screen and (max-width: 759px) {
    opacity: 0.5;
  }
`;
H.Content = styled.div`
  z-index: 1;
  width: 600px;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  color: #cae962;
  left: 2em;
  bottom: 2em;
  padding-bottom: 3em;
  bottom: 0 !important;

  @media screen and (max-width: 1200px) {
    width: 50%;
  }
  @media screen and (max-width: 759px) {
    width: 100%;
    padding-right: 100px;
    box-shadow: none;
    background: rgb(0, 0, 0, 0);
  }
  @media screen and (max-width: 480px) {
    padding-right: 10px;
    left: 10px;
  }
`;
H.Rank = styled.div`
  color: #cae962;
  font-size: 14px;
  font-family: "Ubuntu", sans-serif;
  font-weight: bolder;
  text-transform: uppercase;
  @media screen and (max-width: 1200px) {
    font-size: 1px;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;
H.Title = styled.h1`
  font-family: "Ubuntu", sans-serif;
  color: #fff;
  letter-spacing: 2px;
  margin-bottom: 20px;
  font-size: 50px;

  @media screen and (max-width: 1200px) {
    font-size: 30px;
    line-height: 1.1em;
    -webkit-line-clamp: 2;
  }
  @media screen and (max-width: 759px) {
    font-size: 30px;
    line-height: 1.1em;
    -webkit-line-clamp: 2;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 480px) {
    font-size: 25px;
    margin-bottom: 0px;
  }
`;
H.Icons = styled.div`
  display: flex;
  gap: 1em;
  font-size: 14px;
  align-items: center;

  @media screen and (max-width: 759px) {
    display: none;
  }
`;
H.Icon = styled.p`
  display: flex;
  align-items: center;
  gap: 0.3em;
  color: #fff;
`;
H.IconSpan = styled.span`
  display: inline-block;
  padding: 3px 4px;
  background: #cae962;
  color: #111;
  border-radius: 5px;
  line-height: 1em;
  font-weight: 600;
  font-size: 12px;
`;
H.Description = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-family: "Poppins", sans-serif;
  color: #fff;
  font-size: 16px;
  margin: 2em 0;

  @media screen and (max-width: 1299px) {
    line-height: 1.1em;
    -webkit-line-clamp: 2;
  }
  @media screen and (max-width: 480px) {
    font-size: 13px;
    width: 80%;
  }
`;
H.WatchBtn = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;

  @media screen and (max-width: 320px) {
    flex-wrap: wrap;
  }
`;
H.WatchLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.3em;
  padding: 0.7rem 1em;
  background-color: #cae962;
  color: #111;
  font-size: 18px;
  border-radius: 30px;
  font-family: "Ubuntu", sans-serif;
  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
    padding-inline: 1.2rem;
  }
`;
H.DetailLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.7rem 1em;
  background-color: #4a4b51;
  color: #fff;
  gap: 0.3em;
  font-size: 18px;
  border-radius: 30px;
  font-family: "Ubuntu", sans-serif;
  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 12px;
    padding-inline: 1.2rem;
  }
`;
