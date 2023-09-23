import React, { useEffect, useState } from "react";
import { Modal } from "./ExportComponents";

export default function Header() {
  const [showHeaderOffcanvas, setShowHeaderOffcanvas] = useState(false);
  const [showHeaderModal, setShowHeaderModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const toggleOffcanvas = () => {
    setShowHeaderOffcanvas(!showHeaderOffcanvas);
  };
  const toggleModal = () => {
    setShowHeaderModal(!showHeaderModal);
  };

  useEffect(() => {
    if (showHeaderOffcanvas || showHeaderModal) {
      document.body.classList.add("overflow-hidden")
    }
    else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [showHeaderOffcanvas, showHeaderModal])



  return (
    <>
      <a href="#">
        <img
          src={"/svg/Logo-big.svg"}
          alt="logo-big"
          className="hidden lg:block h-20 mt-4 order-first"
        />
      </a>
      <div>
        <nav
          className="hidden space-x-8 text-xl lg:block lg:order-2"
          aria-label="main"
        >
          <a href="#rockets" className="hover:opacity-90">
            المكتبة الاسلامية
          </a>
          <a href="#" className="hover:opacity-90">
            مرايا الولاء
          </a>
          <a href="#" className="hover:opacity-90">
            موسوعة الطفل
          </a>
          <a href="#" className="hover:opacity-90">
            عقائد اسلامية
          </a>
          <a href="#" className="hover:opacity-90">
            ريحانة
          </a>
          <a href="#" className="hover:opacity-90">
            المـــؤمل
          </a>
        </nav>
      </div>

      <button onClick={toggleOffcanvas}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6  text-rafedGray-g2 lg:hidden cursor-pointer"
          id="hamburger-button"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {showHeaderOffcanvas && (
        <div>
          <div
            className=" mobile-menu-bg min-h-screen min-w-full absolute bg-rafedGray-g1 bg-opacity-70 right-0 top-0 justify-center "
            onClick={toggleOffcanvas}
          ></div>
          <section className="mobile-menu right-0 top-0 w-2/3 absolute origin-right transition-all  flex-col text-base  bg-rafedWhite-w1">
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

                <button onClick={toggleOffcanvas}>
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
              <a
                href="#rockets"
                className="w-full py-3 px-6 hover:opacity-90 lg:"
              >
                ريحانة
              </a>
              <a
                href="#testimonials"
                className="w-full py-3 px-6 hover:opacity-90"
              >
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
        </div>
      )}
      <a href="#">
        <img
          src={"/svg/Logo-small.svg"}
          alt="logo-small"
          className="lg:hidden block h-16 mr-2 mt-4 "
        />
      </a>

      {isLogin ? (
        <div className="mr-auto ml-5 relative group ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[1.3rem] h-[1.33rem]  text-rafedGray-g2"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>

          <div className="bg-rafedWhite-w1 rounded-md hidden group-hover:flex justify-between items-center w-28 h-10 px-2 mt-5 absolute left-0 top-2 drop-shadow-lg">
            <h4 className="">خروج</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      ) : (
        <div className="mr-auto ml-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[1.3rem] h-[1.33rem]  text-rafedGray-g2"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}

      {showHeaderModal && <Modal onClose={toggleModal} />}



      <button onClick={toggleModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 stroke-2 text-rafedPurple"
          strokeWidth={2}
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>

    </>
  );
}
