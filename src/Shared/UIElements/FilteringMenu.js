import React from "react";
import { Link } from "react-router-dom";

import "./FilteringMenu.css";

//https://www.w3schools.com/howto/howto_js_sidenav.asp
const FilteringMenu = (props) => {
  return (
    <div className="left-nav">
        <nav>
      <Link to="/">About</Link>
      <Link to="/">Services</Link>
      <Link to="/">Clients</Link>
      <Link to="/">Contact</Link>
      </nav>
    </div>
  );
};

export default FilteringMenu;
