import React from 'react'
import { QuestionCircleFill } from 'react-bootstrap-icons'

export default function LinkQuestionBox(props) {
  return (
    <div className={`${props.className} flex first:mt-10 even:py-4 even:bg-rafedWhite-w2`}>
      <QuestionCircleFill className="text-rafedPurple w-9 text-2xl" />
      <h4 className='mr-4'>{props.text}</h4>
    </div>
  )
}
