import React from 'react'
import {
  FaCalendar,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaPlayCircle,
} from 'react-icons/fa'
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper'
import 'swiper/swiper-bundle.css'
import { H } from './hero.style'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])
import { data } from './data'

const Hero = () => {
  return (
    <H.Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      direction="horizontal"
      loop={true}
      autoplay={{ delay: 3000 }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Pagination]}
      className="swiper"
      navigation={{
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
      }}
    >
      {data.map((item, idx) => (
        <H.Slides key={idx}>
          <H.ImgContainer>
            <H.Img src={item.image} />
          </H.ImgContainer>
          <H.Content>
            <H.Rank>
              <p>#{item.spot} Spotlight</p>
            </H.Rank>
            <H.Title>{item.name}</H.Title>
            <H.Icons>
              <H.Icon>
                <FaPlayCircle size={12} />
                {item.type}
              </H.Icon>
              <H.Icon>
                <FaClock size={12} /> {item.duration}m
              </H.Icon>
              <H.Icon>
                <FaCalendar size={12} />
                {item.streamDate}
              </H.Icon>
              <H.IconSpan>HD</H.IconSpan>
            </H.Icons>
            <H.Description>{item.description}</H.Description>
            <H.WatchBtn>
              <H.WatchLink to="/watch">
                <FaPlayCircle />
                Watch Now
              </H.WatchLink>
              <H.DetailLink to="/detail">
                Detail <FaChevronRight size={12} />
              </H.DetailLink>
            </H.WatchBtn>
          </H.Content>
        </H.Slides>
      ))}
      <div className="btn-prev">
        <FaChevronLeft />
      </div>
      <div className="btn-next">
        <FaChevronRight />
      </div>
    </H.Swiper>
  )
}

export default Hero
