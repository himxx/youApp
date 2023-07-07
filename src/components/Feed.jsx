import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState("New");
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setvideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <div className="my-container flex flex-col md:flex-row h-[92vh] overflow-y-auto ">
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setselectedCategory}
      />
      <div className="flex-[2] my-container h-[90vh] overflow-y-auto" >
        <h1 className="text-3xl  font-bold text-red-600">
          {selectedCategory} <span className="text-white">Videos</span>
        </h1>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default Feed;
