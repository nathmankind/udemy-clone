import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading ...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://youtube.com/embed/${videoId}`;
  return (
    <div className="col-md-8">
      <div className="video-embed-section">
        <iframe
          width="90%"
          height="370"
          marginWidth="auto"
          src={url}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="ytvid-details">
        <div className="ytvid-title">{video.snippet.title}</div>
        <div className="ytvid-description py-3">
          {video.snippet.description}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
