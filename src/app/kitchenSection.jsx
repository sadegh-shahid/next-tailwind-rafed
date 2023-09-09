"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SectionBigBox from "@/components/SectionBigBox";
import SectionTitle from "@/components/SectionTitle";
export default function KitchenSection() {
  register();

  return (
    <div>
      <SectionTitle title="مطبخ" />
      <Swiper
        slidesPerView={2.2}
        spaceBetween={20}
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
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <SectionBigBox
            link="#"
            className="block w-full border bg-rafedWhite-w1 border-rafedGray-g4"
            imgDivClass="w-full"
            imgClass=" w-full  rounded-t-xl "
            imgSrc="/img/img4.png"
            title="بطاطس بالجبـن الموزاريـلا"
            description=""
            author="أطيب طبخة"
            likeCount="4545"
            viewCount="1234"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SectionBigBox
            link="#"
            className="block w-full border bg-rafedWhite-w1 border-rafedGray-g4"
            imgDivClass="w-full"
            imgClass=" w-full  rounded-t-xl "
            imgSrc="/img/img4.png"
            title="بطاطس بالجبـن الموزاريـلا"
            description=""
            author="أطيب طبخة"
            likeCount="4545"
            viewCount="1234"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SectionBigBox
            link="#"
            className="block w-full border bg-rafedWhite-w1 border-rafedGray-g4"
            imgDivClass="w-full"
            imgClass=" w-full  rounded-t-xl "
            imgSrc="/img/img4.png"
            title="بطاطس بالجبـن الموزاريـلا"
            description=""
            author="أطيب طبخة"
            likeCount="4545"
            viewCount="1234"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SectionBigBox
            link="#"
            className="block w-full border bg-rafedWhite-w1 border-rafedGray-g4"
            imgDivClass="w-full"
            imgClass=" w-full  rounded-t-xl "
            imgSrc="/img/img4.png"
            title="بطاطس بالجبـن الموزاريـلا"
            description=""
            author="أطيب طبخة"
            likeCount="4545"
            viewCount="1234"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SectionBigBox
            link="#"
            className="block w-full border bg-rafedWhite-w1 border-rafedGray-g4"
            imgDivClass="w-full"
            imgClass=" w-full  rounded-t-xl "
            imgSrc="/img/img4.png"
            title="بطاطس بالجبـن الموزاريـلا"
            description=""
            author="أطيب طبخة"
            likeCount="4545"
            viewCount="1234"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SectionBigBox
            link="#"
            className="block w-full border bg-rafedWhite-w1 border-rafedGray-g4"
            imgDivClass="w-full"
            imgClass=" w-full  rounded-t-xl "
            imgSrc="/img/img4.png"
            title="بطاطس بالجبـن الموزاريـلا"
            description=""
            author="أطيب طبخة"
            likeCount="4545"
            viewCount="1234"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
