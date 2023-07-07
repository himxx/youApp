import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const navigate = useNavigate();

  const onHandleSubmit=e=> {
    e.preventDefault();
    if(searchTerm) {
      navigate(`search/${searchTerm}`);
      setsearchTerm('');
    }
  }
  return (
    <div
      className="w-60  bg-[#fff] rounded-lg  md:w-80 flex gap-2 items-center"
    >
      <form onSubmit={onHandleSubmit}>
        <input
          className="w-[180px] md:w-60 pl-4 outline-none rounded-lg  "
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setsearchTerm(e.target.value)}
        />
        <IconButton type="submit" sx={{ color: "red" }}>
          <Search />
        </IconButton>
      </form>
    </div>
  );
};

export default SearchBar;
