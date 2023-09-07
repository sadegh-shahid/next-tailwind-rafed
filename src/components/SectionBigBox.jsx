import React from "react";
import { EyeFill, HeartFill } from "react-bootstrap-icons";

export default function SectionBigBox(props) {
  return (
    <div className="flex bg-rafedWhite-w1 rounded-xl">
      <div className="relative  w-11/12">
        <img src={props.imgSrc} alt="image box" className="h-full w-full" />
        <div className="flex items-center w-12 absolute bottom-5 left-0 rounded-r-md bg-rafedWhite-w1 bg-opacity-75">
          <span className="text-rafedPurple border-l border-l-rafedGray-g2 px-1 font-bold text-xs text-center align-middle">
            05
          </span>

          <span className=" text-rafedGray-g1 flex-wrap flex text-[9px] py-1 px-1 f leading-tight">
            2023 ینــایر
          </span>
        </div>
      </div>
      <div className="p-2">
        <h4 className=" text-rafedGray-g1 font-bold text-center text-sm">
          <a href={props.link}>بطاطس بالجبـن الموزاريـلا</a>
        </h4>
        <div className="flex items-center pt-3 text-xs mt-3">
          <a href="#" className="text-rafedPurple">
            أطيب طبخة
          </a>
          <span className="ms-auto me-1">1245</span>
          <EyeFill className="text-base text-rafedGray-g2" />
          <span className="mx-1">2135</span>
          <HeartFill className="mt-[2px] text-rafedGray-g2" />
        </div>
        <p className=" pt-2 text-sm">
          تقدّم ل5 أشخاص ــ وقت التحضير: 10 دقيقة. وقت الطبــخ: 20 دقيقة. مجموع
          الوقت: 30 دقيقـة. المكوّنـات ...
        </p>
      </div>
    </div>
  );
}
