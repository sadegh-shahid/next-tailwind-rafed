import React from "react";
import ImageCard from "@/components/ImageCard";
import { HouseDoorFill, ChevronLeft } from "react-bootstrap-icons";
export default function TopSection() {
  return (
    <>
      <ul className="flex items-center font-Almarai">
        <li className="flex items-center">
          <a href="#">
            <HouseDoorFill className="text-rafedPurple text-lg " />
          </a>
          <ChevronLeft className="text-xs mx-1" />
        </li>
        <li className="flex items-center">
          <a href="#" className="font-bold text-sm">
            ریحانه
          </a>
          <ChevronLeft className="text-xs mx-1" />
        </li>
        <li>
          <a href="#" className="text-rafedPurple text-sm font-bold">
            مطبخ
          </a>
        </li>
      </ul>
      <div className="grid lg:grid-cols-2 mt-5 gap-4">
        <ImageCard
          imgSrc={"/img/img-1.png"}
          imgAlt={"A caption for the above image."}
          captionText={"A caption for the above image."}
          className="h-56 lg:h-[21rem]"
          link="#"
        />

        <div className="grid grid-cols-2 gap-4">
          <ImageCard
            imgSrc={"/img/img-1.png"}
            imgAlt={"A caption for the above image."}
            captionText={"A caption for the above image."}
            className="h-40"
            link="#"
          />
          <ImageCard
            imgSrc={"/img/img-1.png"}
            imgAlt={"A caption for the above image."}
            captionText={"A caption for the above image."}
            className="h-40"
            link="#"
          />
          <ImageCard
            imgSrc={"/img/img-1.png"}
            imgAlt={"A caption for the above image."}
            captionText={"A caption for the above image."}
            className="h-40"
            link="#"
          />
          <ImageCard
            imgSrc={"/img/img-1.png"}
            imgAlt={"A caption for the above image."}
            captionText={"A caption for the above image."}
            className="h-40"
            link="#"
          />
        </div>
      </div>
    </>
  );
}
