import LinkQuestionBox from '@/components/LinkQuestionBox'
import SectionTitle from '@/components/SectionTitle'
import React from 'react'
import { Search } from 'react-bootstrap-icons'

export default function QuestionSection() {
  return (
    <>
      <SectionTitle title="اسألي الفقيه" />

      <div className="flex bg-rafedPurple text-rafedWhite-w1 py-3 px-4 rounded-[10px] items-center">
        <input type="text" className='bg-rafedPurple text-rafedWhite-w1  font-Almarai placeholder:text-rafedWhite-w1 placeholder:font-Almarai w-full ml-4 focus-visible:border-none' placeholder='بحث في استفتائات ...' />
        <Search className='ms-auto' />
      </div>

      <div className="rounded-lg bg-rafedGray-g5 flex pl-3 pt-2 my-7">
        <img src="/img/image.png" alt="sistany" />
        <h4 className='font-Almarai m-auto text-center leading-7 '>الإستفتائات حسب فتاوى
          السيد علي الحسيني السيستاني</h4>
      </div>

      <button className='rounded-[10px] bg-rafedGray-g2 w-full py-3'>
        <a href="#" className='flex justify-center w-full h-full text-rafedWhite-w1 '>
          سوال الإستفتاء
        </a>
      </button>

      <LinkQuestionBox text="شخص من اقربائی ولد له ولد و سماه(بسم الله) فهل هاذا الاسم یجوز شرعاً؟ " />
      <LinkQuestionBox text="شخص من اقربائی ولد له ولد و سماه(بسم الله) فهل هاذا الاسم یجوز شرعاً؟ " />
      <LinkQuestionBox text="شخص من اقربائی ولد له ولد و سماه(بسم الله) فهل هاذا الاسم یجوز شرعاً؟ " />
      <LinkQuestionBox text="شخص من اقربائی ولد له ولد و سماه(بسم الله) فهل هاذا الاسم یجوز شرعاً؟ " />
    </>
  )
}
