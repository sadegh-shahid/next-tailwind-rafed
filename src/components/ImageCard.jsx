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
        <figcaption className=" bg-rafedWhite-w1 bg-opacity-70 absolute bottom-0 rounded-b-xl text-rafedGray-g1 font-bold text-base w-full text-center h-12 py-2 overflow-hidden leading-8 group-hover:leading-6 group-hover:h-16 group-hover:transition-all">
          {props.captionText}
        </figcaption>
      </figure>
    </a>
  );
}
