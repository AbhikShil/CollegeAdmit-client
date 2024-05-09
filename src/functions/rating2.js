import React from "react";
import StarRating from "react-star-ratings";

export const showRating2 = (p) => {
  if (p && p.ratings) {
    return (
      <div className="text-center ">
        <p class="jsx-3916197676 snap-card-body-title mb-0 d-flex align-items-center justify-content-end"><svg xmlns="http://www.w3.org/2000/svg" width="85.384" height="81.954" viewBox="6.92 9.412 85.384 81.954" class="mr-1" style={{width: "15px", height: "15px", fill: "rgb(248, 193, 0)"}}><path d="M59.609 24.778c2.517 4.892 9.037 9.467 14.492 10.168l13.094 1.683c5.455.701 6.75 4.469 2.875 8.373l-9.301 9.369c-3.875 3.904-6.213 11.52-5.193 16.926l2.445 12.973c1.02 5.406-2.164 7.801-7.074 5.32l-11.784-5.949c-4.91-2.479-12.876-2.348-17.702.291l-11.582 6.336c-4.826 2.64-8.087.353-7.246-5.084l2.017-13.047c.841-5.437-1.745-12.972-5.747-16.746l-9.604-9.058c-4.002-3.774-2.833-7.582 2.597-8.462l13.031-2.113c5.43-.88 11.797-5.668 14.149-10.64l5.647-11.934c2.353-4.972 6.335-5.038 8.851-.146l6.035 11.74z"></path></svg> <b>{p.ratings}/5</b></p>
      </div>
    );
  }
};
