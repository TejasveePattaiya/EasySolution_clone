import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../assets/css/Swiper.css";




// import required modules
import { Navigation } from 'swiper/modules';

export default function SwiperSlider({
  margin,
  loop,
  nav,
  children,
  items,
  onSlideChange,
}) {
  const breaks = {
    // when window width is >= 640px
    640: {
      width: 640,
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      width: 768,
      slidesPerView: 2,
    },
  };
  return (
    <>
      <Swiper
        slidesPerView={items ? items : 1}
        spaceBetween={margin ? margin : 30}
        slidesPerGroup={1}
        loop={loop ? loop : false}
        navigation={nav ? nav : true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={items ? items : breaks}
        onSlideChange={onSlideChange}
      >
        {children}
      </Swiper>
    </>
  );
}
