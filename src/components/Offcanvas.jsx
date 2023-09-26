import React from "react";

export default function Offcanvas(props) {
  return (
    <>
      <div
        className={`${
          !props.showState ? "hidden" : ""
        } min-h-screen min-w-full absolute bg-rafedGray-g1 bg-opacity-70 h-full z-10`}
        onClick={props.onOpen}
        id="mobile-menu-bg"
      ></div>
      <section
        className={`${
          !props.showState ? "opacity-0 translate-x-80" : ""
        } w-2/3 fixed origin-right transition-all h-full flex-col text-base  bg-rafedWhite-w1 z-10`}
        id="mobile-menu"
      >
        <nav
          className="flex min-h-screen flex-col items-start py-2"
          aria-label="mobile"
        >
          <div className="flex justify-between items-center w-full pe-4">
            <a href="#">
              <img
                src={"/svg/Logo-small.svg"}
                alt="logo-small"
                className=" h-20 -mr-1 mt-4 "
              />
            </a>

            <button onClick={props.onOpen}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-8 h-8 text-rafedGray-g4"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <a href="#hero" className="w-full py-3 px-6 hover:opacity-90">
            صفحه اصلی
          </a>
          <a href="#rockets" className="w-full py-3 px-6 hover:opacity-90 lg:">
            ريحانة
          </a>
          <a href="#testimonials" className="w-full py-3 px-6 hover:opacity-90">
            ريحانة
          </a>
          <a href="#contact" className="w-full py-3 px-6 hover:opacity-90">
            ريحانة
          </a>
          <a href="#footer" className="w-full py-3 px-6 hover:opacity-90">
            ريحانة
          </a>
        </nav>
      </section>
    </>
  );
}
