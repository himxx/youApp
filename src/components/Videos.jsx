import React from "react";
import VideoCard from "./VideoCard.jsx";
import ChannelCard from "./ChannelCard.jsx";

const Videos = ({ videos }) => {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
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
