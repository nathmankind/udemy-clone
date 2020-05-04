import React, { Component } from "react";
import { Player, BigPlayButton, PosterImage } from "video-react";
import ReactStarRating from "react-star-ratings-component";

const VideoStream = ({ video, liked, handleLike }) => {
  if (!video) {
    return <div>Loading ...</div>;
  }
  const url = video.videoUrl;
  const poster = video.posterImage;
  const text = liked ? "Unlike" : "Like";
  return (
    <div className="row">
      <div className="col-md-7">
        <div className="video-embed-section">
          <Player poster={poster} src={url}>
            <BigPlayButton position="center" />
          </Player>
        </div>
      </div>
      <div className="col-md-5">
        <div className="details">
          <div className="title">{video.title}</div>
          <div className="description py-4">{video.description}</div>

          <div className="author ">Created by: {video.instructor}</div>

          <ReactStarRating
            numberOfStar={5}
            numberOfSelectedStar={video.rating}
            colorFilledStar="gold"
            colorEmptyStar="#968787"
            starSize="20px"
            spaceBetweenStar="10px"
            disableOnSelect={false}
            onSelectStar={(val) => {
              console.log(val);
            }}
          />
          <button className="like-button" onClick={() => handleLike()}>
            {text}
          </button>
        </div>
      </div>
    </div>
  );
};
export default VideoStream;
