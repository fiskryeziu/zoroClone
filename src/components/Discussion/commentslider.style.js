import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'

export const C = {}

C.SwiperContainer = styled.div`
  display: flex;
  width: 100%;
  height: 224px;
`

C.Swiper = styled(Swiper)`
  width: auto;
  height: auto;
`

C.SwiperSlide = styled(SwiperSlide)`
  width: auto;
  margin-inline: 1em;

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
  align-items: flex-start;
  cursor: grab;
`
C.Item = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 200px;
  min-height: 200px;
  height: auto;
  background: #121315;
  border-radius: 1em;
  @media screen and (max-width: 860px) {
    width: 190px;
  }
`
C.Profile = styled.div`
  display: flex;
  margin: 0.7em;
  gap: 0.3em;
`
C.ProfileImg = styled.img`
  width: 40px;
  height: 40px;
`
C.ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
`
C.Name = styled.p`
  font-size: 11px;
`
C.Time = styled.p`
  font-size: 11px;
  color: #888;
`

C.Comment = styled.p`
  font-size: 12px;
  -webkit-line-clamp: 6;
  height: 9em;
  margin: 0 auto;
  overflow: hidden;
`
C.AnimeName = styled.p`
  color: #cae962;
  font-weight: 500;
  font-size: 12px;
  text-align: left;
  margin-left: 2em;
`
