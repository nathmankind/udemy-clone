import React from "react";
import ReactStarRating from "react-star-ratings-component";

const StarButton = ({ video, starNumber }) => {
  const rate = video.rate;
  return (
    <ReactStarRating
      numberOfStar={5}
      numberOfSelectedStar={rate}
      colorFilledStar="gold"
      colorEmptyStar="#968787"
      starSize="20px"
      spaceBetweenStar="10px"
      disableOnSelect={false}
      onSelectStar={(value) => {
        rate = value;
        console.log(calue);
      }}
    />
  );
};
export default NewVideoItem;
