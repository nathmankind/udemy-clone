import React from "react";
import NewVideoItem from "./NewVideoItem";

const NewVideoList = ({ videos, onVideoSelect }) => {
  if (!videos) {
    return <div>Loading...</div>;
  }
  const videoItems = videos.map((video) => {
    return (
      <NewVideoItem
        onVideoSelect={onVideoSelect}
        key={video.id}
        video={video}
      />
    );
  });

  return <ul className="list-group">{videoItems}</ul>;
};

export default NewVideoList;
