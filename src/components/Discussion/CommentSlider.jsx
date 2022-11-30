import React from 'react'
import { Navigation, Scrollbar, A11y } from 'swiper'

import { C } from './commentslider.style'

export default () => {
  return (
    <C.SwiperContainer>
      <C.Swiper
        modules={[Navigation, Scrollbar, A11y]}
        slidesPerView={4}
        freeMode={true}
        scrollbar={{ draggable: true }}
      >
        <C.SwiperSlide>
          <C.Item>Slide 1</C.Item>
        </C.SwiperSlide>
        <C.SwiperSlide>
          <C.Item>Slide 2</C.Item>
        </C.SwiperSlide>
        <C.SwiperSlide>
          <C.Item>Slide 3</C.Item>
        </C.SwiperSlide>
        <C.SwiperSlide>
          <C.Item>Slide 4</C.Item>
        </C.SwiperSlide>
        <C.SwiperSlide>
          <C.Item>Slide 4</C.Item>
        </C.SwiperSlide>
        <C.SwiperSlide>
          <C.Item>Slide 4</C.Item>
        </C.SwiperSlide>
        <C.SwiperSlide>
          <C.Item>Slide 4</C.Item>
        </C.SwiperSlide>
      </C.Swiper>
    </C.SwiperContainer>
  )
}
