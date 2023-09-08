import SectionBigBox from "@/components/SectionBigBox";
import SectionSmallBox from "@/components/SectionSmallBox";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

export default function MotherAndChildSection() {
  return (
    <>
      <SectionTitle title="إمومة و طفولة" />
      <div className="lg:flex lg:gap-x-5">
        <SectionBigBox link="#" imgSrc="/img/image7.png" title="بطاطس بالجبـن الموزاريـلا" description="  تقدّم ل5 أشخاص ــ وقت التحضير: 10 دقيقة. وقت الطبــخ: 20 دقيقة. مجموع
          الوقت: 30 دقيقـة. المكوّنـات ..."className="border border-rafedGray-g4" author="أطيب طبخة" likeCount="4545" viewCount="1234" />
        <div className="lg:w-8/12">
          <div className="lg:grid grid-cols-3 w-full lg:gap-5 flex-wrap">
            <SectionSmallBox className="border border-rafedGray-g4" link="#" imgSrc="/img/image6.png" title="الامام الحسين" titleSpan="صلوات الله عليهما" />
            <SectionSmallBox className="border border-rafedGray-g4" link="#" imgSrc="/img/image6.png" title="الامام الحسين" titleSpan="صلوات الله عليهما" />
            <SectionSmallBox className="border border-rafedGray-g4" link="#" imgSrc="/img/image6.png" title="الامام الحسين" titleSpan="صلوات الله عليهما" />
            <SectionSmallBox className="border border-rafedGray-g4" link="#" imgSrc="/img/image6.png" title="الامام الحسين" titleSpan="صلوات الله عليهما" />
            <SectionSmallBox className="hidden lg:flex border border-rafedGray-g4" link="#" imgSrc="/img/image6.png" title="الامام الحسين" titleSpan="صلوات الله عليهما" />
            <SectionSmallBox className="hidden lg:flex border border-rafedGray-g4" link="#" imgSrc="/img/image6.png" title="الامام الحسين" titleSpan="صلوات الله عليهما" />

          </div>
        </div>
      </div>
    </>
  );
}
