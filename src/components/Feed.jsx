import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState("New");
  const [videos, setvideos] = useState([]);
  const [error, seterror] = useState(null);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => {
        setvideos(data.items);
        seterror(null);
      })
      .catch((error) => seterror(error.response.data.message));
  }, [selectedCategory]);
  console.log(error);
  return (
    <>
      <div className="my-container flex flex-col md:flex-row h-[92vh] overflow-y-auto ">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setselectedCategory}
        />
        <div className="flex-[2] my-container h-[90vh] overflow-y-auto">
          <h1 className="text-3xl  font-bold text-red-600">
            {selectedCategory} <span className="text-white">Videos</span>
          </h1>
          {videos && <Videos videos={videos} />}
          {error && (
            <h2 className="text-red-600 font-bold text-2xl">{error}</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Feed;
