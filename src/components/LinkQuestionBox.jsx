import React from "react";
import { QuestionCircleFill } from "react-bootstrap-icons";

export default function LinkQuestionBox(props) {
  return (
    <a
      href={props.link}
      className={
        " flex first:mt-10 lg:first:mt-0 px-3 py-5 odd:bg-rafedWhite-w2"
      }
    >
      <QuestionCircleFill className="text-rafedPurple w-9 text-2xl" />
      <h4 className="mr-4 font-NotoSanse">{props.text}</h4>
    </a>
  );
}
