import React, { useEffect, useState } from "react";
import "../../styles/detail.css";
import axios from "axios";
import ProductComponent from "../../components/productComponent/ProductComponent";
import EmbedYouTubeComponent from "../../components/embedYouTubeComponent/EmbedYouTubeComponent";
import CommentComponent from "../../components/commentComponent/CommentComponent";
import { Link, useParams } from "react-router-dom";
import closeButton from "../../images/icons8-close-30.png";

const DetailVideo = () => {
  const { id } = useParams();
  const [videoData, setVideoData] = useState([]);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const getVideo = async () => {
      await axios
        .create({
          baseURL: `${process.env.REACT_APP_BACKEND_URL}/api/v1/video/${id}`,
        })
        .get()
        .then((res) => {
          setVideoData(res.data.data);
          axios
            .create({
              baseURL: `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/${res.data.data.userId}`,
            })
            .get()
            .then((res) => {
              setUserData(res.data.data);
              console.log("Response: ", res.data.data);
            });
          console.log("Response: ", res.data.data);
        });
    };
    getVideo();
  }, []);

  return (
    <>
      <div className="body-detail">
        <Link to={"/"} className="close-btn">
          <h1>
            {" "}
            <img
              src={closeButton}
              alt="close detail page"
              className="header-btn"
            />
          </h1>
        </Link>
        <ProductComponent productData={videoData.products} />
        <EmbedYouTubeComponent videoId={videoData.videoId} />
        <CommentComponent userId={userData?.name} title={videoData.title} />
      </div>
    </>
  );
};

export default DetailVideo;
