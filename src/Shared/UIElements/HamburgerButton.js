import React from "react";

import "./HamburgerButton.css";

const HamburgerButton = (props) => {
  return (
    <button className="main-navigation__humburger-btn" onClick={props.onClick}>
      <span />
      <span />
      <span />
    </button>
  );
};

export default HamburgerButton;
