import React from "react";

export default function Modal(props) {
  return (
    <div className="fixed right-0 top-0 min-h-screen min-w-full inset-0 flex items-center justify-center z-50">
      <div className="relative h-screen w-full">
        <div
          className=" h-screen w-full bg-rafedGray-g1 bg-opacity-70  top-0 "
          onClick={props.onClose}
        ></div>
        <section className=" w-64 h-28 rounded-md origin-right transition-all  flex-col text-base  absolute top-28  bg-rafedWhite-w1">
          <h1>hi</h1>
        </section>
      </div>
    </div>
  );
}
