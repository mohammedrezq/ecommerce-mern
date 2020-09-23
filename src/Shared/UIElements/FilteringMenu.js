import React from "react";
import { Link } from "react-router-dom";

import "./FilteringMenu.css";

//https://www.w3schools.com/howto/howto_js_sidenav.asp
const FilteringMenu = () => {
  return (
    <div className="left-nav">
      <div>&times;</div>
      <Link to="/">About</Link>
      <Link to="/">Services</Link>
      <Link to="/">Clients</Link>
      <Link to="/">Contact</Link>
    </div>
  );
};

export default FilteringMenu;
