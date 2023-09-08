"use client"

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import SectionBigBox from "@/components/SectionBigBox";
import SectionTitle from "@/components/SectionTitle";
export default function KitchenSection() {
  register();

  return (
    <div>
    <SectionTitle title="مطبخ"/>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SectionBigBox link="#" className="block" imgSrc="/img/image7.png" title="بطاطس بالجبـن الموزاريـلا" description="" author="أطيب طبخة" likeCount="4545" viewCount="1234" />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
