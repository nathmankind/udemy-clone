import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  const imgUrl = video.snippet.thumbnails.medium.url;
  return (
    <li
      className="ytvideo-list-item"
      onClick={() => {
        onVideoSelect(video);
      }}
    >
      <div className="ytvideo-list">
        <div className="video-image ytvid-img">
          <img className="image" src={imgUrl} />
        </div>
        <div className="video-detail px-1">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};
export default VideoItem;
