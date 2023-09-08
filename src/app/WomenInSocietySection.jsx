import ImageCard from "@/components/ImageCard";
import SectionBigBox from "@/components/SectionBigBox";
import SectionTitle from "@/components/SectionTitle";
import React from "react";

export default function WomenInSocietySection() {
  return (
    <div >
      <SectionTitle title="المرأة في المجتمع" />
      <div className="lg:flex lg:gap-x-5 ">
        <SectionBigBox className="border-rafedGray-g4 border" link="#" imgSrc="/img/image6.png" title="بطاطس بالجبـن الموزاريـلا" description="  تقدّم ل5 أشخاص ــ وقت التحضير: 10 دقيقة. وقت الطبــخ: 20 دقيقة. مجموع
          الوقت: 30 دقيقـة. المكوّنـات ..." author="أطيب طبخة" likeCount="4545" viewCount="1234" />
        <div className="flex lg:w-8/12 lg:gap-x-5 justify-between max-lg:mt-6 ">

          <ImageCard
            imgSrc={"/img/img-1.png"}
            imgAlt={"A caption for the above image."}
            captionText={"A caption for the above image."}
            className="h-full"
            linkClass={"max-lg:w-1/2 max-lg:pe-3"}
            link="#"
          />
          <ImageCard
            imgSrc={"/img/img-1.png"}
            imgAlt={"A caption for the above image."}
            captionText={"A caption for the above image."}
            className="h-full"
            linkClass={"max-lg:w-1/2 max-lg:ps-3"}
            link="#"
          />
          <ImageCard
            imgSrc={"/img/img-1.png"}
            imgAlt={"A caption for the above image."}
            captionText={"A caption for the above image."}
            className="h-full hidden lg:flex"
            linkClass={"hidden lg:flex"}
            link="#"
          />
          <ImageCard
            imgSrc={"/img/img-1.png"}
            imgAlt={"A caption for the above image."}
            captionText={"A caption for the above image."}
            className="h-full"
            linkClass={"hidden lg:flex"}
            link="#"
          />

        </div>


      </div>
    </div>
  )
}
