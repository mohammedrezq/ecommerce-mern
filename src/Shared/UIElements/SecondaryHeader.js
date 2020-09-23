import React from "react";

// import secondaryHeader from "./SecondaryHeader.module.css";


const SecondaryHeader = (props) => {
  return <div style={{display: "flex"}} className={props.className}>
      {props.children}
  </div>;
};

export default SecondaryHeader;
