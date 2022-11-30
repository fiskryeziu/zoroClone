import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

export const C = {}

C.SwiperContainer = styled.div`
  display: flex;
  width: 100%;
  height: 224px;
`

C.Swiper = styled(Swiper)`
  width: 100%;
  height: 100%;
`

C.SwiperSlide = styled(SwiperSlide)`
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
C.Item = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;
`
