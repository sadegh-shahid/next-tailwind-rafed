import React from "react";

export default function Footer() {
  return (
    <>
      <div className=" flex flex-col items-center bg-rafedGray-g4 py-5">
        <a href="#">
          <img src={"/svg/logo-footer.svg"} alt="logo footer" />
        </a>
        <div className="flex items-center gap-3 mt-5">
          <a
            href="#"
            className="border-l pe-2 border-rafedGray-g1 font-bold text-sm"
          >
            درباره ما
          </a>
          <a href="#" className="font-bold text-sm">
            درباره ما
          </a>
          <a href="#" className="ms-auto">
            <img src={"/svg/Instgram.svg"} alt="Instgram" />
          </a>
          <a href="#">
            <img src={"/svg/Facebook.svg"} alt="Facebook" />
          </a>
          <a href="#">
            <img src={"/svg/Twitter.svg"} alt="Twitter" />
          </a>
          <a href="#">
            <img src={"/svg/Youtube.svg"} alt="Youtube" />
          </a>
        </div>
      </div>
      <div className="bg-rafedGray-g1 text-rafedWhite-w1 flex">
        <h6 className="m-auto text-sm py-3">
          Copyright © 1998-2022 rafed.net.
        </h6>
      </div>
    </>
  );
}
