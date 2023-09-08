"use client"


import { Header, Footer } from "../components/ExportComponents";
import TopSection from "./TopSection";
import QuestionSection from "./QuestionSection";
import EnmatSection from "./EnmatSection";
import WomenInSocietySection from "./WomenInSocietySection";
import KitchenSection from "./KitchenSection";
import MotherAndChildSection from "./MotherAndChildSection";
import React from "react";

export default function Home() {
  return (
    <>
      <header className="bg-rafedWhite-w1 h-14 lg:h-16 lg:px-32 drop-shadow-xl flex items-center px-4">
        <Header></Header>
      </header>
      <main className="mt-16">
        <section className="px-3 lg:px-32 mb-12">
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
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}
