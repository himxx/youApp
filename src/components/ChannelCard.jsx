import React from "react";
import { Link } from "react-router-dom";
import { demoChannelTitle } from "../utils/constants";

const ChannelCard = ({ channel, marginTop }) => {
  return (
    <div className=" w-[100%] md:w-[358px] text-cyan-500   " style={{marginTop}}>
      <Link className="flex gap-4 flex-col items-center justify-center" to={`/channel/${channel?.id?.channelId}`}>
        <img
          className="w-[180px] rounded-full h-[180px]"
          src={channel?.snippet?.thumbnails?.high?.url}
          alt=""
        />
         <h2 className="  font-bold flex">
          {channel?.snippet?.title|| demoChannelTitle} 

        </h2>

      </Link>
    </div>
  );
};

export default ChannelCard;
