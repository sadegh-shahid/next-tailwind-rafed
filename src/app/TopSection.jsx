import React from "react";
import { HouseDoorFill, ChevronLeft } from "react-bootstrap-icons";
export default function TopSection() {
  return (
    <>
      <ul className="flex items-center">
        <li className="flex items-center">
          <a href="#">
            <HouseDoorFill className="text-rafedPurple text-lg " />

          </a>
          <ChevronLeft className="text-xs mx-1" />
        </li>
        <li className="flex items-center">
          <a href="#" className="font-bold text-sm">ریحانه</a>
          <ChevronLeft className="text-xs mx-1" />
        </li>
        <li>
          <a href="#" className="text-rafedPurple text-sm font-bold">
            مطبخ
          </a>
        </li>
      </ul>
      <div className="flex flex-1 mt-5">
        <figure class="relative inline-block min-w-full">
          <img
            src={"/img/img-1.png"}
            class="mb-4 min-w-full h-auto rounded-lg "
            alt="top section big image" />
          <figcaption class="text-sm text-neutral-600 dark:text-neutral-400">
            A caption for the above image.
          </figcaption>
        </figure>
      </div>

    </>
  );
}
