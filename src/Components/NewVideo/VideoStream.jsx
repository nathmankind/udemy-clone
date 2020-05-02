import React, { Component } from "react";
import { Player, BigPlayButton, PosterImage } from "video-react";

const VideoStream = ({ video }) => {
  if (!video) {
    return <div>Loading ...</div>;
  }
  const url = video.videoUrl;
  const poster = video.posterImage;
  return (
    <div>
      <div className="video-embed-section">
        <Player poster={poster} src={url}>
          <BigPlayButton position="center" />
        </Player>
      </div>
      <div className="details">
        <div>{video.title}</div>
        <div>{video.description}</div>
        <div>Created by: {video.instructor}</div>
      </div>
    </div>
  );
};
export default VideoStream;
