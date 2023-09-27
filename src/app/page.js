"use client";

import { Header, Footer, Offcanvas } from "../components/ExportComponents";
import TopSection from "./TopSection";
import QuestionSection from "./QuestionSection";
import EnmatSection from "./EnmatSection";
import WomenInSocietySection from "./WomenInSocietySection";
import KitchenSection from "./KitchenSection";
import MotherAndChildSection from "./MotherAndChildSection";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [showHeaderOffcanvas, setShowHeaderOffcanvas] = useState(false);
  const toggleOffcanvas = () => {
    setShowHeaderOffcanvas(!showHeaderOffcanvas);
  };

  useEffect(() => {
    if (showHeaderOffcanvas) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showHeaderOffcanvas]);

  const [isSmall, setSmall] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;
    window.addEventListener('scroll', function () {
      let scrollTop = window.scrollY;
      if (scrollTop < lastScrollTop) {
        setSmall(false);
      }
      else {
        setSmall(true);

      }
      ////why its loging 2 times?
console.log(lastScrollTop)
      lastScrollTop = scrollTop;
    });
  })
  return (
    <>
      <Offcanvas
        showState={showHeaderOffcanvas}
        onOpen={toggleOffcanvas}
      ></Offcanvas>

      <header className={`bg-rafedWhite-w1 lg:h-16 lg:px-32 shadow-2xl shadow-rafedGray-g1 flex items-center justify-around  px-2 py-1 fixed bottom-0 w-full z-10  ${isSmall ? 'h-7' : 'h-17'}`}>
        <Header onOpen={toggleOffcanvas}></Header>
      </header>

      <main>
        <section className="px-3 lg:px-32">
          <TopSection></TopSection>
        </section>
        <section className="lg:px-32 py-12 bg-rafedWhite-w1">
          <QuestionSection></QuestionSection>
        </section>
        <section className="px-3 lg:px-32 py-12 ">
          <EnmatSection></EnmatSection>
        </section>
        <section className="px-3 lg:px-32 py-12 bg-rafedWhite-w1">
          <WomenInSocietySection></WomenInSocietySection>
        </section>
        <section className="px-3 lg:px-32 py-12 ">
          <KitchenSection></KitchenSection>
        </section>
        <section className="px-3 lg:px-32 py-12 bg-rafedWhite-w1">
          <MotherAndChildSection></MotherAndChildSection>
        </section>
      </main>

      <footer className="mb-16">
        <Footer></Footer>
      </footer>
    </>
  );
}
