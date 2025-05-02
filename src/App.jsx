import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'

import { FaArrowAltCircleRight,FaArrowAltCircleLeft } from "react-icons/fa";

export default function FlowerGallery() {
  return (
    <div className="gallery-container">
      <h2 className="title">Flower Gallery</h2>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={10}
        slidesPerView="auto"
        loop={true}
        autoplay={
          {
            delay: 4500,
            disableOnInteraction: false
          }
        }
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 3.6,
          slideShadows: true,
        }}
        pagination={{
          el: '.custom-pagination',
          clickable: true,          
        }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev'
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="flowerSwiper"
      >
        <SwiperSlide><img src={img1} alt="1" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="2" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="3" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="4" /></SwiperSlide>
        <SwiperSlide><img src={img5} alt="5" /></SwiperSlide>
        <SwiperSlide><img src={img4} alt="4" /></SwiperSlide>
      </Swiper>
      <div className="swiper-controler">
        <button className="custom-prev"><FaArrowAltCircleLeft /></button>
        <button className="custom-next"><FaArrowAltCircleRight /></button>
        <div className="custom-pagination"></div>
      </div>
    </div>
  );
}
