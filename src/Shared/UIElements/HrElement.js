import React from "react";

const HrElemnent = ({ color, height, width, border }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: height,
      width: width,
      border: border
    }}
  />
);

export default HrElemnent;
