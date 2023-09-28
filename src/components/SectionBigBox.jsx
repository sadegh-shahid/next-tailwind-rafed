import React from "react";

export default function SectionBigBox(props) {
  let className = "";
  if (props.className) {
    className = props.className;
  }
  let displayClass = props.className.search("block");
  if (!displayClass) {
    className = className + "";
  } else className = className + " flex";
  return (
    <div className={`${className}  rounded-xl  `}>
      <div className={`relative  ${props.imgDivClass}`}>
        <img
          src={props.imgSrc}
          alt="image box"
          className={`h-full ${props.imgClass} `}
        />
      </div>
      <div className="p-2">
        <h4 className=" text-rafedGray-g1 font-bold text-center text-sm">
          <a href={props.link}>{props.title}</a>
        </h4>
        <div className="flex items-center pt-3 text-xs mt-3">
          <a href="#" className="text-rafedPurple">
            {props.author}
          </a>
          <span className="ms-auto me-1">{props.viewCount}</span>

       <h6 className="text-rafedGray-g3">{props.datePublished}</h6>
        </div>
        <p className=" pt-2 text-sm">{props.description}</p>
      </div>
    </div>
  );
}
