import { useRef, useState } from "react"
// import Swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

 import './BannerCard.css';

// import required modules
import { EffectCards } from 'swiper/modules'
const BannerCard = () => {
  return (
    <div className="banner">
        <Swiper 
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
        </Swiper>
    </div>
  )
}

export default BannerCard

