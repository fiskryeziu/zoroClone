import React from "react";
import {
  FaCalendar,
  FaChevronLeft,
  FaChevronRight,
  FaClock,
  FaPlayCircle,
} from "react-icons/fa";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper";
import "swiper/swiper-bundle.css";
import { H } from "./hero.style";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);
import useTrendingAnime from "../../hooks/useTrendingAnime";
import { format } from "date-fns";

const Hero = () => {
  const { data, isFetched } = useTrendingAnime();

  return (
    <H.Swiper
      slidesPerView={1}
      pagination={{
        clickable: true,
      }}
      direction="horizontal"
      loop={true}
      autoplay={{ delay: 3000 }}
      modules={[Pagination]}
      className="swiper"
      navigation={{
        nextEl: ".btn-next",
        prevEl: ".btn-prev",
      }}
    >
      {isFetched &&
        data.data.map((item, idx) => (
          <H.Slides key={idx}>
            <H.ImgContainer>
              <H.Img src={item.attributes.coverImage.large} />
            </H.ImgContainer>
            <H.Content>
              <H.Rank>
                <p>#{idx + 1} Spotlight</p>
              </H.Rank>
              <H.Title>{item.attributes.canonicalTitle}</H.Title>
              <H.Icons>
                <H.Icon>
                  <FaPlayCircle size={12} />
                  {item.attributes.showType}
                </H.Icon>
                <H.Icon>
                  <FaClock size={12} /> {item.attributes.episodeLength}m
                </H.Icon>
                <H.Icon>
                  <FaCalendar size={12} />
                  {format(new Date(item.attributes.startDate), "MMM d, y")}
                </H.Icon>
                <H.IconSpan>HD</H.IconSpan>
              </H.Icons>
              <H.Description>{item.attributes.description}</H.Description>
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
  );
};

export default Hero;
