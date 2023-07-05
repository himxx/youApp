import React from "react";
import { categories } from "../utils/constants";

const Sidebar = () => {
  const selectedCategory = "New";
  return (
    <>
      <div className="md:border-r-[1px] pr-2 flex flex-row md:flex-col h-auto md:h-[92%] border-[#3d3d3d] overflow-auto ">
        {categories.map((catetegory) => (
          <button
            style={{
              background: catetegory.name === selectedCategory && "#FC1503",
            }}
            className="category-btn text-sm  w-[100%] hover:bg-[#FC1503]  space-x-2"
          >
            <span 
            className="min-w-[40px]"
              style={{
                color:
                  catetegory.name === selectedCategory ? "white" : "#FC1503",
              }}
            >
              {catetegory.icon}
            </span>
            <span>{catetegory.name}</span>
          </button>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
