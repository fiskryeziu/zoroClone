import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'

export const S = {}
S.SwiperContainer = styled.div`
  padding-right: 60px;
  padding-left: 0;
  position: relative;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  z-index: 1;

  @media screen and (max-width: 759px) {
    padding-right: 0;
  }
`

S.Swiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`

S.SwiperSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
`

S.Item = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 115%;
  position: relative;
  display: inline-block;
  overflow: hidden;

  @media screen and (max-width: 575px) {
    padding-bottom: 150%;
  }
`
S.Number = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  width: 40px;
  text-align: center;
  font-weight: 600;
  cursor: default;
  background: #4a4b51;
  background: -moz-linear-gradient(180deg, #4a4b51 0, rgba(74, 75, 81, 0) 99%);
  background: -webkit-linear-gradient(
    180deg,
    #4a4b51 0,
    rgba(74, 75, 81, 0) 99%
  );
  background: linear-gradient(180deg, #4a4b51 0, rgba(74, 75, 81, 0) 99%);

  @media screen and (max-width: 575px) {
    bottom: auto;
    top: 0;
    right: auto;
    width: 40px;
    left: 0;
    height: 30px;
    background: #fff;
    z-index: 9;
  }
`
S.SpanNum = styled.span`
  position: absolute;
  bottom: 0;
  font-size: 24px;
  line-height: 1em;
  text-align: center;
  color: #cae962;
  z-index: 9;
  left: 0;
  right: 0;

  @media screen and (max-width: 575px) {
    color: #111;
    font-size: 18px;
    line-height: 30px;
    transform: none;
    text-align: center;
    color: #111;
  }
`
S.ItemName = styled.div`
  width: 100px;
  text-align: left;
  height: 40px;
  transform: rotate(-90deg);
  position: absolute;
  bottom: 100px;
  width: 150px;
  line-height: 40px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  left: -55px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
`

S.LinkImg = styled(Link)`
  display: inline-block;
  background: #2a2c31;
  position: absolute;
  width: auto;
  left: 40px;
  right: 0;
  top: 0;
  bottom: 0;
  padding-bottom: 0;
  height: auto;
  margin-bottom: 0;

  @media screen and (max-width: 575px) {
    left: 0;
    top: 0;
    bottom: 0;
  }
`

S.SwiperImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
S.NavBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 40px;

  @media screen and (max-width: 759px) {
    display: none;
  }
`
