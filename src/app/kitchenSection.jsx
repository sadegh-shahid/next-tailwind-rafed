"use client";


import React from "react";
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SectionBigBox from "@/components/SectionBigBox";
import SectionTitle from "@/components/SectionTitle";
export default function KitchenSection() {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Register Swiper web component
    register();

    // Object with parameters
    const params = {
      slidesPerView: 2.2,
      spaceBetween: 20,
      freeMode: true,
      height: 500,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 6,
        },
      },

    };
    // Assign it to swiper element
    Object.assign(swiperRef.current, params);

    // initialize swiper
    swiperRef.current.initialize();
  }, []);



  return (
    <div>
      <SectionTitle title="مطبخ" />

      <swiper-container init="false" ref={swiperRef} >
        <swiper-slide>
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
        </swiper-slide>
        <swiper-slide>
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
        </swiper-slide>
        <swiper-slide>
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
        </swiper-slide>
        <swiper-slide>
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
        </swiper-slide>
        <swiper-slide>
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
        </swiper-slide>
        <swiper-slide>
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
        </swiper-slide>
      </swiper-container>


      {/* <Swiper
        slidesPerView={2.2}
        height={"19rem"}
       
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
      </Swiper> */}
    </div>
  );
}
