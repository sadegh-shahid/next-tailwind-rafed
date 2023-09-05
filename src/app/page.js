
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
      <header className='bg-rafedWhite-w1 h-14 drop-shadow-xl flex items-center px-4'>
        <Header></Header>
      </header>
      <main className='mt-10'>
        <section className='px-4'>
          <TopSection></TopSection>
        </section>
        <section className='px-4'>
          <QuestionSection></QuestionSection>
        </section>
        <section className='px-4'>
          <EnmatSection></EnmatSection>
        </section>
        <section className='px-4'>
          <WomenInSocietySection></WomenInSocietySection>
        </section>
        <section className='px-4'>
          <KitchenSection></KitchenSection>
        </section>
        <section className='px-4'>
          <MotherAndChildSection></MotherAndChildSection>
        </section>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}
