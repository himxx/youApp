import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <div className="w-60  bg-[#fff] rounded-lg  md:w-80 flex gap-2 items-center">
      <input
        className="w-[180px] md:w-60 pl-4 outline-none rounded-lg  "
        type="text"
        placeholder="Search..."
      />
      <IconButton  sx={{ color: "red" }}>
        <Search  />
      </IconButton>
    </div>
  );
};

export default SearchBar;
