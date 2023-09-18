"use client";


import React from "react";
import { SectionTitle, Slider } from "@/components/ExportComponents";

export default function KitchenSection() {


  return (
    <>
      <SectionTitle title="مطبخ" />
      <Slider></Slider>
    </>
  )

  return (
    <div>
      <SectionTitle title="مطبخ" />

      <EmblaCarousel slides={SLIDES} options={OPTIONS} />

      <SectionBigBox
        link="#"
        className="block w-full border bg-rafedWhite-w1 border-rafedGray-g4"
        imgDivClass="w-full"
        imgClass=" w-full  rounded-t-xl  h-36"
        imgSrc="/img/img4.png"
        title="بطاطس بالجبـن الموزاريـلا"
        description=""
        author="أطيب طبخة"
        likeCount="4545"
        viewCount="1234"
      />

    </div>
  );
}
