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
      <div className="video-list py-3 py-1">
        <div className="video-image px-2">
          <img className="image" src={imgUrl} style={{ width: "100%" }} />
        </div>
        <div className="video-detail px-3 py-3">
          <div className="media-heading title">Title: {video.title}</div>
          <div className="media-heading author">Author: {video.instructor}</div>
        </div>
      </div>
    </li>
  );
};
export default NewVideoItem;
