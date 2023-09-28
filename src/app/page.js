"use client";

import { Header, Footer, Offcanvas } from "../components/ExportComponents";
import TopSection from "./TopSection";
import QuestionSection from "./QuestionSection";
import EnmatSection from "./EnmatSection";
import WomenInSocietySection from "./WomenInSocietySection";
import KitchenSection from "./KitchenSection";
import MotherAndChildSection from "./MotherAndChildSection";
import React, { useEffect, useRef, useState } from "react";

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
  const lastScrollTopRef = useRef(0);

  useEffect(() => {
    window.addEventListener('scroll', function () {
      let scrollTop = window.scrollY;
      if (scrollTop < lastScrollTopRef.current) {
        setSmall(false);
      } else {
        setSmall(true);
      }
      lastScrollTopRef.current = scrollTop;
    });
  }, []);

  return (
    <>
      <Offcanvas
        showState={showHeaderOffcanvas}
        onOpen={toggleOffcanvas}
      ></Offcanvas>

      <header className={`bg-rafedWhite-w1 lg:h-16 lg:px-32 shadow-2xl shadow-rafedGray-g1 flex items-center justify-around  px-2 py-1 fixed bottom-0 w-full z-10  ${isSmall ? 'h-14' : 'h-17'}`}>
        <Header onOpen={toggleOffcanvas} isSmall={isSmall} />
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

      <footer className={"mb-16"}>
        <Footer></Footer>
      </footer>
    </>
  );
}
