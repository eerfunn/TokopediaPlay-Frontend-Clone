import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const VideoItemComponent = ({ key, id, stat, count, title, store }) => {
  const [storeData, setStoreData] = useState([]);
  useEffect(() => {
    axios
      .create({
        baseURL: `http://localhost:5000/api/v1/user/${store}`,
      })
      .get()
      .then((res) => {
        setStoreData(res.data.data);
      });
  }, []);
  return (
    <>
      <Link
        to={`/detail/${id}`}
        className="videox"
        style={{
          backgroundImage: `url("https://img.youtube.com/vi/${id}/hqdefault.jpg")`,
          backgroundPosition: "center",
        }}
      >
        <div className="video-count">
          {stat ? <div className="live-stat">Live</div> : ""}
          <div className="watch-count">{count}</div>
        </div>
        <div className="video-desc">
          <div className="title">{title}</div>
          <div className="store-name">{storeData.name}</div>
        </div>
      </Link>
    </>
  );
};

export default VideoItemComponent;
