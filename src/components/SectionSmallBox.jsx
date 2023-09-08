import React from "react";

export default function SectionSmallBox(props) {
  let className = "";
  if (props.className) {
    className = props.className;
  }
  return (
    <div className={`${className} rounded-md  bg-rafedWhite-w1 mt-5 lg:odd:mt-0 lg:even:mt-auto `}>
      <a href={props.link} className="flex items-center">
        <img src={props.imgSrc} alt="image6" className="w-16" />
        <h4 className="ms-4">{props.title}
          <span className="text-xs ms-2">
            {props.titleSpan}</span></h4>
      </a>
    </div>
  )
}
