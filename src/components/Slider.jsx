import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { SectionBigBox } from "@/components/ExportComponents";
import "swiper/swiper-bundle.css";

export default function Slider() {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={"1.9"}
      style={{ height: "290px" }}
      breakpoints={{
        425: {
          slidesPerView: 2.2,
        },
        768: {
          slidesPerView: 4.2,
        },
        1440: {
          slidesPerView: 6,
        },
      }}
      pagination={{ clickable: true, dynamicBullets: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <SectionBigBox
          link="#"
          className="block w-full border bg-rafedWhite-w1 border-rafedGray-g4"
          imgDivClass="w-full"
          imgClass=" w-full  rounded-t-xl  h-36"
          imgSrc="/img/img4.png"
          title="بطاطس بالجبـن الموزاريـلا"
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
          imgClass=" w-full  rounded-t-xl  h-36"
          imgSrc="/img/img4.png"
          title="بطاطس بالجبـن الموزاريـلا"
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
          imgClass=" w-full  rounded-t-xl  h-36"
          imgSrc="/img/img4.png"
          title="بطاطس بالجبـن الموزاريـلا"
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
          imgClass=" w-full  rounded-t-xl  h-36"
          imgSrc="/img/img4.png"
          title="بطاطس بالجبـن الموزاريـلا"
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
          imgClass=" w-full  rounded-t-xl  h-36"
          imgSrc="/img/img4.png"
          title="بطاطس بالجبـن الموزاريـلا"
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
          imgClass=" w-full  rounded-t-xl  h-36"
          imgSrc="/img/img4.png"
          title="بطاطس بالجبـن الموزاريـلا"
          author="أطيب طبخة"
          likeCount="4545"
          viewCount="1234"
        />
      </SwiperSlide>
    </Swiper>
  );
}
