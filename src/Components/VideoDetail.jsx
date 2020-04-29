import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading ...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://youtube.com/embed/${videoId}`;
  return (
    <div>
      <div className="video-embed-section">
        <iframe
          width="80%"
          height="330"
          src={url}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
