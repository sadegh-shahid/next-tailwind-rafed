import React from "react";

export default function ImageCard(props) {
  return (
    <a href={props.link}>
      <figure
        className={`${props.className} relative inline-block min-w-full shadow-rafedGray-g1 drop-shadow-xl group`}
      >
        <img
          src={props.imgSrc}
          className="min-w-full h-full rounded-xl object-cover "
          alt={props.imgAlt}
        />
        <figcaption className=" bg-rafedWhite-w1 bg-opacity-70 absolute bottom-0 rounded-b-xl text-rafedGray-g1 font-bold text-xl w-full text-center h-12 py-2 overflow-hidden leading-8 group-hover:leading-6 group-hover:h-16 group-hover:transition-all">
          {props.captionText}
        </figcaption>
      </figure>
    </a>
  );
}
