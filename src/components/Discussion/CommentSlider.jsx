import React from 'react'
import { Navigation, Scrollbar, A11y, FreeMode } from 'swiper'

import { C } from './commentslider.style'
import avatar from '../../assets/images/avatar2-04.png'

export default () => {
  return (
    <C.SwiperContainer>
      <C.Swiper
        modules={[Navigation, Scrollbar, A11y, FreeMode]}
        slidesPerView={'auto'}
        freeMode={true}
        scrollbar={{ el: '.swiper-scrollbar' }}
      >
        {[1, 2, 3, 4, 5, , 6, 7, 8, 9, 10].map((item) => (
          <C.SwiperSlide key={item}>
            <C.Item>
              <C.Profile>
                <C.ProfileImg src={avatar} />
                <C.ProfileDetails>
                  <C.Name>Shinobi Leaf</C.Name>
                  <C.Time>- a minute ago</C.Time>
                </C.ProfileDetails>
              </C.Profile>
              <C.Comment>Peak episode man wow </C.Comment>
              <C.AnimeName>Naruto</C.AnimeName>
            </C.Item>
          </C.SwiperSlide>
        ))}
      </C.Swiper>
      <div className="swiper-scrollbar"></div>
    </C.SwiperContainer>
  )
}
