import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CommentComponent = ({ userId, title }) => {
  const { id } = useParams();
  const [newComment, setNewComment] = useState({
    username: "",
    comment: "",
  });
  const commentList = axios.create({
    baseURL: `${process.env.REACT_APP_BACKEND_URL}/api/v1/video/${id}/comments`,
  });

  const [videoCommentData, setVideoCommentData] = useState([]);
  useEffect(() => {
    commentList.get().then((res) => {
      setVideoCommentData(res.data.data);
    });
  }, []);
  console.log("List of Comments: ", videoCommentData);
  const handleChange = (e) => {
    const value = e.target.value;
    setNewComment({
      ...newComment,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Before update: ", videoCommentData);
    const commentData = {
      vid: id,
      uid: newComment.username,
      content: newComment.comment,
    };
    console.log("Comment Post: ", commentData);
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_URL}/api/v1/comment/add/`,
        commentData
      )
      .then((res) => {
        let newData = res.data.data;
        newData.userId[0] = {};
        newData.userId[0].name = commentData.uid;
        console.log("NEW: ", newData);
        alert("Comment added!");
        setVideoCommentData([...videoCommentData, newData]);
        setNewComment({
          username: "",
          comment: "",
        });
      });
  };
  return (
    <>
      <div className="comments-bar">
        <div className="user-container">
          <div className="user-bar">
            <img
              src="https://upload-os-bbs.hoyolab.com/upload/2023/01/24/140523135/e6573f41f5e9adf0eb5013c471907ddf_8824173343382018668.png?x-oss-process=image/resize,s_1000/quality,q_80/auto-orient,0/interlace,1/format,png"
              alt=""
            />
            <div className="username">{userId}</div>
          </div>
          <div className="post-description">
            <div className="user-bar">
              <img
                src="https://upload-os-bbs.hoyolab.com/upload/2023/01/24/140523135/e6573f41f5e9adf0eb5013c471907ddf_8824173343382018668.png?x-oss-process=image/resize,s_1000/quality,q_80/auto-orient,0/interlace,1/format,png"
                alt=""
              />
            </div>
            <div className="username">{userId}</div>
            <div className="desc-text">{title}</div>
            <div className="uploaded">16m ago</div>
          </div>
        </div>
        {videoCommentData?.map((comment) => (
          <div className="new-comment" key={comment.commentId}>
            <div className="user-bar">
              <img
                src="https://upload-os-bbs.hoyolab.com/upload/2023/01/24/140523135/e6573f41f5e9adf0eb5013c471907ddf_8824173343382018668.png?x-oss-process=image/resize,s_1000/quality,q_80/auto-orient,0/interlace,1/format,png"
                alt=""
              />
            </div>
            <div className="comment-data-container">
              <div className="username">{comment.userId[0].name}</div>
              <div className="desc-text">{comment.content}</div>
            </div>
            <div className="uploaded">13m ago</div>
          </div>
        ))}
        <form className="input-comment" onSubmit={handleSubmit}>
          <div className="user-bar">
            <img
              src="https://upload-os-bbs.hoyolab.com/upload/2023/01/24/140523135/e6573f41f5e9adf0eb5013c471907ddf_8824173343382018668.png?x-oss-process=image/resize,s_1000/quality,q_80/auto-orient,0/interlace,1/format,png"
              alt=""
            />
          </div>
          <label htmlFor="username">
            <input
              type="text"
              id="username"
              name="username"
              onChange={handleChange}
              value={newComment.username}
              placeholder="Your Name"
            />
          </label>
          <label htmlFor="comment" className="input-comment-text">
            <input
              name="comment"
              id="comment"
              cols="40"
              rows="3"
              className="input-comment-text"
              maxlength="70"
              placeholder="Write something..."
              onChange={handleChange}
              value={newComment.comment}
              required
            />
          </label>
          <button className="submit-comment">Send</button>
        </form>
      </div>
    </>
  );
};

export default CommentComponent;
