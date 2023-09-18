import {LinkQuestionBox, SectionTitle} from "@/components/ExportComponents";
import React from "react";
import { Search, ThreeDots } from "react-bootstrap-icons";

export default function QuestionSection() {
  return (
    <>
      <SectionTitle title="اسألي الفقيه" className="px-3 lg:ps-0" />
      <div className="lg:flex lg:flex-row-reverse ">
        <div className="px-3 lg:pe-0 lg:w-3/12">
          <div className="flex bg-rafedPurple text-rafedWhite-w1 py-3 px-4 rounded-[10px] items-center">
            <input
              type="text"
              className="bg-rafedPurple text-rafedWhite-w1  font-Almarai placeholder:text-rafedWhite-w1 placeholder:font-Almarai w-full ml-4 focus-visible:border-none"
              placeholder="بحث في استفتائات ..."
            />
            <Search className="ms-auto" />
          </div>

          <div className="rounded-lg bg-rafedGray-g5 flex pl-3 my-7">
            <img src="/img/image.png" alt="sistany" className="w-32" />
            <h4 className=" text-rafedGray-g2 font-NotoSanse font-bold m-auto text-center leading-7 ">
              أجوبة الاستفتاءات الخاصة بالنساء طبقا لفتاوى المرجع الديني السيد
              علي الحسيني السيستـاني
            </h4>
          </div>

          <button className="rounded-[10px] bg-rafedGray-g2 w-full py-3 mb-7 lg:mb-0 ">
            <a
              href="#"
              className="flex justify-center w-full h-full text-rafedWhite-w1 "
            >
              سوال الإستفتاء
            </a>
          </button>
        </div>
        <div className=" lg:w-9/12 h-full">
          <LinkQuestionBox
            text="شخص من اقربائی ولد له ولد و سماه(بسم الله) فهل هاذا الاسم یجوز شرعاً؟ "
            link="#"
          />
          <LinkQuestionBox
            text="شخص من اقربائی ولد له ولد و سماه(بسم الله) فهل هاذا الاسم یجوز شرعاً؟ "
            link="#"
          />
          <LinkQuestionBox
            text="شخص من اقربائی ولد له ولد و سماه(بسم الله) فهل هاذا الاسم یجوز شرعاً؟ "
            link="#"
          />
          <LinkQuestionBox
            text="شخص من اقربائی ولد له ولد و سماه(بسم الله) فهل هاذا الاسم یجوز شرعاً؟ "
            link="#"
          />
          <button className=" px-3 mt-5 w-full">
            <a
              href="#"
              className="flex justify-center w-full h-full text-rafedWhite-w1 border-rafedGray-g4 border rounded-full "
            >
              <ThreeDots className="text-rafedGray-g2 text-[32px] h-min" />
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
