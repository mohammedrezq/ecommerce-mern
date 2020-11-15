import React from "react";

import StarIcon from "@material-ui/icons/Star"; //Full Star
import StarBorderIcon from "@material-ui/icons/StarBorder"; // Empty Star
import StarHalfIcon from "@material-ui/icons/StarHalf"; // Half Star

const Rating = ({ value, text, color, style }) => {
  return (
    <div className="rating" style={style}>
      <span>
        {value >= 1 ? (
          <StarIcon style={{ color }} />
        ) : value >= 0.5 ? (
          <StarHalfIcon style={{ color }} />
        ) : (
          <StarBorderIcon style={{ color }} />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <StarIcon style={{ color }} />
        ) : value >= 1.5 ? (
          <StarHalfIcon style={{ color }} />
        ) : (
          <StarBorderIcon style={{ color }} />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <StarIcon style={{ color }} />
        ) : value >= 2.5 ? (
          <StarHalfIcon  style={{ color }} />
        ) : (
          <StarBorderIcon style={{ color }} />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <StarIcon style={{ color }} />
        ) : value >= 3.5 ? (
          <StarHalfIcon style={{ color }} />
        ) : (
          <StarBorderIcon style={{ color }} />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <StarIcon style={{ color }} />
        ) : value >= 4.5 ? (
          <StarHalfIcon style={{ color }} />
        ) : (
          <StarBorderIcon style={{ color }} />
        )}
      </span>
      <div>{text && text}</div>
    </div>
  );
};

Rating.defaultProps = {
    color: "#FFD700"
}

export default Rating;
