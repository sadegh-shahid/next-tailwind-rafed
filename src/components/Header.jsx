import React, { useEffect } from "react";
import { PersonCircle, List, Search, XCircleFill } from "react-bootstrap-icons";

export default function Header() {
  const toggleMenu = () => {
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileMenuBg = document.querySelector(".mobile-menu-bg");
    const hamburgerBtn = document.getElementById("hamburger-button");

    if (mobileMenu && hamburgerBtn) {
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("flex");
      mobileMenuBg.classList.toggle("hidden");
      mobileMenuBg.classList.toggle("flex");
      hamburgerBtn.classList.toggle("toggle-btn");
    }
  };

  useEffect(() => {
    const hamburgerBtn = document.getElementById("hamburger-button");
    const mobileMenu = document.querySelector(".mobile-menu");
    const mobileMenuBg = document.querySelector(".mobile-menu-bg");

    if (hamburgerBtn && mobileMenu && mobileMenuBg) {
      hamburgerBtn.addEventListener("click", toggleMenu);
      mobileMenu.addEventListener("click", toggleMenu);
      mobileMenuBg.addEventListener("click", toggleMenu);
    }

    return () => {
      if (hamburgerBtn && mobileMenu && mobileMenuBg) {
        hamburgerBtn.removeEventListener("click", toggleMenu);
        mobileMenu.removeEventListener("click", toggleMenu);
        mobileMenuBg.addEventListener("click", toggleMenu);
      }
    };
  }, []);

  return (
    <>
      <div className=" mobile-menu-bg min-h-screen min-w-full absolute bg-rafedGray-g1 bg-opacity-70 right-0 top-0 justify-center  hidden   ">
        <section className="mobile-menu right-0 top-0 w-2/3 absolute origin-right transition-all  flex-col text-base hidden bg-rafedWhite-w1">
          <nav
            className="flex min-h-screen flex-col items-start py-2"
            aria-label="mobile"
          >
            <div className="flex justify-between items-center w-full pe-4">
              <a href="#">
                <img
                  src={"/svg/Logo-small.svg"}
                  alt="logo-small"
                  className="lg:hidden block h-20 -mr-1 mt-4 "
                />
              </a>
              <XCircleFill className="text-rafedGray-g4 text-2xl"/>
            </div>
            <a href="#hero" className="w-full py-3 px-6 hover:opacity-90">
              صفحه اصلی
            </a>
            <a href="#rockets" className="w-full py-3 px-6 hover:opacity-90">
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
      <button>
        <List
          className="text-2xl lg:hidden cursor-pointer"
          id="hamburger-button"
        />
      </button>

      <a href="#">
        <img
          src={"/svg/Logo-big.svg"}
          alt="logo-big"
          className="hidden lg:block h-20 mt-4 order-first"
        />
      </a>
      <a href="#">
        <img
          src={"/svg/Logo-small.svg"}
          alt="logo-small"
          className="lg:hidden block h-16 mr-2 mt-4 "
        />
      </a>

      <PersonCircle className="mr-auto ml-5 text-rafedGray-g2" />
      <Search className="text-rafedPurple font-bold " />
    </>
  );
}
