import SectionBigBox from "@/components/SectionBigBox";
import SectionSmallBox from "@/components/SectionSmallBox";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

export default function EnmatSection() {

  return (
    <>
      <SectionTitle title="انماط الحياة" />
      <div className="lg:flex">
        <SectionBigBox link="#" imgSrc="/img/image7.png" title="بطاطس بالجبـن الموزاريـلا" description="  تقدّم ل5 أشخاص ــ وقت التحضير: 10 دقيقة. وقت الطبــخ: 20 دقيقة. مجموع
          الوقت: 30 دقيقـة. المكوّنـات ..." author="أطيب طبخة" likeCount="4545" viewCount="1234" />
        <SectionSmallBox link="#" imgSrc="/img/image6.png" title="الامام الحسين" />
        <SectionSmallBox link="#" imgSrc="/img/image6.png" title="الامام الحسين" />
        <SectionSmallBox link="#" imgSrc="/img/image6.png" title="الامام الحسين" />
        <SectionSmallBox link="#" imgSrc="/img/image6.png" title="الامام الحسين" />
      </div>
    </>
  );
}
