
import React from "react";
import { PersonCircle, List,Search } from "react-bootstrap-icons";
export default function Header() {
  return (
    <>
      <List className="text-2xl "/>
      <img
        src={"/svg/Logo-big.svg"}
        alt="logo-big"
        className="hidden md:block"
      />
      <img
        src={"/svg/Logo-small.svg"}
        alt="logo-big"
        className="md:hidden block h-16 mr-2 mt-4"
      />
      <PersonCircle className="mr-auto ml-5"/>
      <Search className="text-rafedPurple font-bold " />
    </>
  );
}
