import React from "react";
import Navbar from "./Navbar";
import { useQuery } from "react-query";
import userService from "../services/user.service";

const Header = () => {
  return (
    <header>
      <h1>Urheiluvälinevuokraamo Oy</h1>
      <Navbar />
    </header>
  )
};
export default Header;