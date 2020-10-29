import React from "react";

import "./Backdrop.css";

const Backdrop = (props) => {
  return <div className={props.menu ? "backdrop" : "backdrop-productPage"} onClick={props.onClick}></div>;
};

export default Backdrop;
