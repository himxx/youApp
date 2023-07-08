import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";
import Loader from "./Loader";

const ChannelDetail = () => {
  const { id } = useParams();
  const [ChannelDetail, setChannelDetail] = useState(null);
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setvideos(data?.items)
    );
  }, [id]);

  if (!ChannelDetail?.snippet) return <Loader />;

  return (
    <div className="min-h-[95vh] justify-center ">
      <div className="bg-linear h-[200px] z-10"></div>
      <div className="flex justify-center">
        <ChannelCard channel={ChannelDetail} marginTop={"-60px"} />
      </div>
      <div className="my-container flex ">
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default ChannelDetail;
