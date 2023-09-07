import React from "react";

export default function SectionSmallBox(props) {
  return (
    <div className=" rounded-md bg-rafedWhite-w1 mt-5">
      <a href={props.link} className="flex items-center">
        <img src={props.imgSrc} alt="image6" />
        <h4 className="ms-4">{props.title}
          <span className="text-xs ms-2">
            صلوات الله عليهما</span></h4>
      </a>
    </div>
  )
}
