import React from "react";
import { categories } from "../utils/constants";
import { Category } from "@mui/icons-material";

const Sidebar = ({ setSelectedCategory, selectedCategory }) => {
  return (
    <>
      <div className="md:border-r-[1px] pr-2 flex flex-row md:flex-col h-auto md:h-[92%] overflow-y-auto border-[#3d3d3d] ">
        {categories.map((category) => (
          <button
            onClick={() => setSelectedCategory(category.name)}
            key={category.name}
            style={{
              background: category.name === selectedCategory && "#FC1503",
            }}
            className="category-btn text-sm  w-[100%] hover:bg-[#FC1503]  space-x-2"
          >
            <span
              className="min-w-[40px]"
              style={{
                color:
                  category.name === selectedCategory ? "white" : "#FC1503",
              }}
            >
              {category.icon}
            </span>
            <span>{category.name}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
