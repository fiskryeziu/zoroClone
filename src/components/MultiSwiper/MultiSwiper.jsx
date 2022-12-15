import React from 'react'

import { Pagination } from 'swiper'
import { S } from './swiper.style'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import useTrendingAnime from '../../hooks/useTrendingAnime'

const MultiSwiper = () => {
  const { data, isFetched } = useTrendingAnime()

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
        {isFetched &&
          data.data.map((item, idx) => (
            <S.SwiperSlide key={idx}>
              <S.Item>
                <S.Number>
                  <S.SpanNum>
                    {idx + 1 >= 10 ? idx + 1 : '0' + (idx + 1)}
                  </S.SpanNum>
                  <S.ItemName>{item.attributes.canonicalTitle}</S.ItemName>
                </S.Number>
                <S.LinkImg to="/home">
                  <S.SwiperImg src={item.attributes.posterImage.original} />
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
