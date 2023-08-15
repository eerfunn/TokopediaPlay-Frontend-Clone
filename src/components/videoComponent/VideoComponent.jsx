import React, { useEffect, useState } from "react";
import axios from "axios";
import VideoItemComponent from "./VideoItemComponent";

const VideoComponent = (id) => {
  const client = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}/api/v1/videos`,
  });
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    client.get().then((res) => {
      setVideos(res.data.data);
      console.log("Response: ", res.data.data);
    });
  }, []);
  return (
    <>
      <div className="videos">
        {videos.map((dum) => (
          <VideoItemComponent
            key={dum.videoId}
            id={dum.videoId}
            stat={dum.livestat ? dum.livestat : 0}
            count={dum.count}
            title={dum.title}
            store={dum.userId}
          />
        ))}
      </div>
    </>
  );
};

export default VideoComponent;
