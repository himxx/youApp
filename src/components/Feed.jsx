import React from "react";
import Sidebar from "./Sidebar";

const Feed = () => {
  return (
    <div className="my-container flex flex-col md:flex-row h-[92vh] ">
      <Sidebar />
      <div className="flex-[2]">
        <h1 className="text-3xl my-container font-bold text-red-600">
          New <span className="text-white">Videos</span>
        </h1>
      </div>
    </div>
  );
};

export default Feed;
