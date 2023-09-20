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
          <a href={props.link}>{props.title}</a>
        </h4>
        <div className="flex items-center pt-3 text-xs mt-3">
          <a href="#" className="text-rafedPurple">
            {props.author}
          </a>
          <span className="ms-auto me-1">{props.viewCount}</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 text-rafedGray-g2"
          >
            <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
            <path
              fillRule="evenodd"
              d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
              clipRule="evenodd"
            />
          </svg>

          <span className="mx-1">{props.likeCount}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4 text-rafedGray-g2"
          >
            <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
          </svg>
        </div>
        <p className=" pt-2 text-sm">{props.description}</p>
      </div>
    </div>
  );
}
