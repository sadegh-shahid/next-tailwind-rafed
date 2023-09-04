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
    </>
  );
}
