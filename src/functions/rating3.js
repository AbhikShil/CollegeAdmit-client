import React from "react";
import StarRating from "react-star-ratings";

export const showRating = (p) => {
  if (p && p.ratings) {
    return (
      <div className="">
        <span style={{fontSize:"12px"}}>
          <StarRating
            starDimension="20px"
            starSpacing="1px"
            starRatedColor="red"
            rating={p.ratings}
            editing={false}
          />{" "}
          ({p.ratings})
        </span>
      </div>
    );
  }
};
