import React from "react";

export default function ImageCard(props) {
  let className = "";
  if (props.className) {
    className = props.className;
  }

  return (
    <a href={props.link} className={props.linkClass}>
      <figure
        className={`${className} relative inline-block min-w-full shadow-rafedGray-g1  group`}
      >
        <img
          src={props.imgSrc}
          className="min-w-full h-full rounded-xl object-cover "
          alt={props.imgAlt}
        />
        {props.withDate && (
          <div className="flex items-center w-12 absolute bottom-14 left-0 rounded-r-md bg-rafedWhite-w1 bg-opacity-75 group-hover:bottom-20 group-hover:transition-all">
            <span className="text-rafedPurple border-l border-l-rafedGray-g2 px-1 font-bold text-xs text-center align-middle">
              05
            </span>

            <span className=" text-rafedGray-g1 flex-wrap flex text-[9px] py-1 px-1 f leading-tight">
              2023 ینــایر
            </span>
          </div>
        )}
        <figcaption className=" bg-rafedWhite-w1 bg-opacity-70 absolute bottom-0 rounded-b-xl text-rafedGray-g1 font-bold text-base w-full text-center h-12 py-2 overflow-hidden leading-8 group-hover:leading-6 group-hover:h-16 group-hover:transition-all">
          {props.captionText}
        </figcaption>
      </figure>
    </a>
  );
}
