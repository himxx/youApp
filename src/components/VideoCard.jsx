import React from "react";
import { Link } from "react-router-dom";
import { demoChannelTitle, demoChannelUrl, demoVideoTitle, demoVideoUrl } from "../utils/constants";
import { CheckCircleRounded } from "@mui/icons-material";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div className="flex flex-col w-[100%] md:w-[358px]">
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <img
          className="object-cover w-[100%] h-[180px]"
          src={snippet?.thumbnails?.high?.url}
          alt="snippet?.title"
        />
      </Link>
      <div className="bg-[#1e1e1e] h-[120px]">
        <h2 className="p-2 font-bold text-cyan-50">
          {snippet?.title.slice(0, 40)|| demoVideoTitle.slice(0, 40)}
        </h2>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`: demoChannelUrl}>
      <h2 className="px-2 font-bold text-gray-500 flex">
          {snippet?.channelTitle|| demoChannelTitle} 
          <CheckCircleRounded className="ml-1"/>

        </h2>
      </Link>
      </div>
   
    </div>
  );
};

export default VideoCard;
