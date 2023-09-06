import React from 'react'

export default function SectionTitle(props) {
  return (
    <div className="flex items-center mb-6">
        <img src={"/svg/section-icon.svg"} alt="section-icon" className='w-7' />
        <h2 className="font-Almarai text-md font-bold mr-4">
         {props.title}
        </h2>
      </div>
  )
}
