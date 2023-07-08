import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";
import Loader from "./Loader";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([])
  const { id } = useParams();
  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
    fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items))
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;

  const {
    snippet: { title, channelTitle, channelId },
    statistics: { commentCount, viewCount, likeCount },
  } = videoDetail;

  return (
    <div className="min-h-[95vh] my-container ">
      <div className="flex flex-col gap-4 md:flex-row  text-cyan-50">
        <div className="sticky flex-[2]" >
          <div className="w-[100%] sticky  top-[86px]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              className="react-player"
            />

          <div className="mt-5 ">
            <div className="flex justify-between flex-wrap">
              <Link className="flex text-xl" to={`/channel/${channelId}`}>
                <h2 className="px-4 text-cyan-500">{channelTitle}</h2>
                <CheckCircle />
              </Link>
              <div className="px-4">
                <p>Views:{parseInt(viewCount).toLocaleString()}</p>
                <p>Likes:{parseInt(likeCount).toLocaleString()}</p>
                <p>Comments:{parseInt(commentCount).toLocaleString()}</p>
              </div>
            </div>
          </div>
          <h1 className="font-bold text-2xl mt-4 px-4">{title}</h1>
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
