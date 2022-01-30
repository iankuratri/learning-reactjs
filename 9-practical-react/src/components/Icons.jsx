import React from "react";
import { FaAngellist } from "react-icons/fa";
import { AiFillFormatPainter } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { FcBusiness } from "react-icons/fc";

export const Icons = () => {
  return (
    <IconContext.Provider value={{ color: "green", size: "5rem" }}>
      <FaAngellist />
      <AiFillFormatPainter color="red" size="4rem" />
      <FcBusiness size="3rem" />
    </IconContext.Provider>
  );
};
