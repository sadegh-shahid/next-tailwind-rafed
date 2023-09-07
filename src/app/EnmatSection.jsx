import SectionBigBox from "@/components/SectionBigBox";
import SectionSmallBox from "@/components/SectionSmallBox";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

export default function EnmatSection() {
  return (
    <>
      <SectionTitle title="انماط الحياة" />
      <div className="lg:flex">
        <SectionBigBox link="#" imgSrc="/img/image7.png"/>
        <SectionSmallBox />
      </div>
    </>
  );
}
