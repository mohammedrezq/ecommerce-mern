import React from "react";
import { Link } from "react-router-dom";

import "./TopNavbar.css";

const TopNavbar = (props) => {
  return (
    <div className="top__navbar">
      <div className="brand__items">AnyThing..</div>
      <div className="auth__buttons">
        <div className="auth__login">
          <Link to="/login">
            <span>Login</span>
          </Link>
        </div>
        <span className="seperator__verticalBar">|</span>
        <div className="auth__singup">
          <Link to="/register">
            <span>Join Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
