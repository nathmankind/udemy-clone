import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  const imgUrl = video.snippet.thumbnails.medium.url;
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
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};
export default VideoItem;
