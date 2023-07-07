import { CheckCircleRounded } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const ChannelCard = ({ channel }) => {
  return (
    <div className=" w-[100%] md:w-[358px] ">
      <Link className="flex gap-4 flex-col items-center justify-center" to={`/channel/${channel?.id?.channelId}`}>
        <img
          className="w-[180px] rounded-full h-[180px]"
          src={channel?.snippet?.thumbnails?.high?.url}
          alt=""
        />
         <h2 className="  font-bold text-cyan-500 flex">
          {channel?.snippet?.channelTitle|| demoChannelTitle} 

        </h2>
      </Link>
    </div>
  );
};

export default ChannelCard;
