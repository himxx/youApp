import React, { useEffect, useState } from "react";
import Videos from "./Videos";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setvideos] = useState([]);
  const {searchTerm} = useParams();  
  useEffect(()=> {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data)=> (setvideos(data?.items)))
  },[searchTerm])
 

  return (
    <div className="my-container flex flex-col md:flex-row h-[92vh] overflow-y-auto ">
     
      <div className="flex-[2] my-container h-[90vh] overflow-y-auto" >
        <h1 className="text-3xl  font-bold text-red-600">
          Search results for: <span className="text-white">{searchTerm}</span>
        </h1>
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default SearchFeed;
