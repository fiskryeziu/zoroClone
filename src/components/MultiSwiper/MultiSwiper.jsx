import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'
import { S } from './swiper.style'
import { data } from './data'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const MultiSwiper = () => {
  return (
    <S.SwiperContainer>
      <S.Swiper
        slidesPerView={3}
        spaceBetween={2}
        breakpoints={{
          479: {
            spaceBetween: 15,
          },
          575: {
            spaceBetween: 15,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1300: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
        }}
        modules={[Pagination]}
        navigation={{
          nextEl: '.btn-nextTwo',
          prevEl: '.btn-prevTwo',
        }}
      >
        {data.map((item, idx) => (
          <S.SwiperSlide key={idx}>
            <S.Item>
              <S.Number>
                <S.SpanNum>
                  {idx + 1 >= 10 ? idx + 1 : '0' + (idx + 1)}
                </S.SpanNum>
                <S.ItemName>{item.name}</S.ItemName>
              </S.Number>
              <S.LinkImg to="/home">
                <S.SwiperImg src={item.image} />
              </S.LinkImg>
            </S.Item>
          </S.SwiperSlide>
        ))}
      </S.Swiper>
      <S.NavBtn>
        <div className="btn-nextTwo">
          <FaChevronRight />
        </div>
        <div className="btn-prevTwo">
          <FaChevronLeft />
        </div>
      </S.NavBtn>
    </S.SwiperContainer>
  )
}

export default MultiSwiper
