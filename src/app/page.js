
import { Header, Footer } from '../components/ExportComponents'
import TopSection from './TopSection'
import QuestionSection from './QuestionSection'
import EnmatSection from './EnmatSection'
import WomenInSocietySection from './WomenInSocietySection'
import KitchenSection from './KitchenSection'
import MotherAndChildSection from './MotherAndChildSection'
import React from 'react'

export default function Home() {
  return (
    <>
      <header className='container bg-rafedWhite-w1 h-14 drop-shadow-xl flex items-center px-4'>
        <Header></Header>
      </header>
      <main className='mt-10'>
        <section>
          <TopSection></TopSection>
        </section>
        <section>
          <QuestionSection></QuestionSection>
        </section>
        <section>
          <EnmatSection></EnmatSection>
        </section>
        <section>
          <WomenInSocietySection></WomenInSocietySection>
        </section>
        <section>
          <KitchenSection></KitchenSection>
        </section>
        <section>
          <MotherAndChildSection></MotherAndChildSection>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}
