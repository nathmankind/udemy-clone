import React from "react";

const NewVideoItem = ({ video, onVideoSelect }) => {
  const imgUrl = video.posterImage;
  return (
    <li
      className="video-list-item"
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <div className="video-list">
        <div className="video-image">
          <img className="image" src={imgUrl} />
        </div>
        <div className="video-detail">
          <div className="media-heading">Title: {video.title}</div>
          <div className="media-heading">Author: {video.instructor}</div>
        </div>
      </div>
    </li>
  );
};
export default NewVideoItem;
