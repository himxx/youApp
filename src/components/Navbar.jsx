import React from "react";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between gap-2 sticky top-0 my-container">
      <Link to={"/"}>
        <img src={logo} className="h-11" alt="logo" />
      </Link>
      <SearchBar />
    </div>
  );
};

export default Navbar;
