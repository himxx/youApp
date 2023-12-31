import React, { useEffect } from "react";
import VideoCard from "./VideoCard.jsx";
import ChannelCard from "./ChannelCard.jsx";
import Loader from "./Loader.jsx";

const Videos = ({ videos }) => {
  if(!videos?.length) return <Loader />;

  return (
    <div className="mt-2 flex flex-wrap gap-2 justify-center">
      {videos.map((item, index) => (
        <div key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channel={item} />}
        </div>
      ))}
    </div>
  );
};

export default Videos;
