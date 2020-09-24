import React from "react";
import { Link } from "react-router-dom";

import classes from "./FilteringMenu.module.css";

//https://www.w3schools.com/howto/howto_js_sidenav.asp
const FilteringMenu = (props) => {
  return (
    <div className={props.className}>
      <nav>
        <div style={{width: "192px"}}>
          <div className={classes.categories}>
            <Link className={`${classes.categoryItem} ${classes.isLink}`} to="/">
              About
            </Link>
            <Link className={`${classes.categoryItem} ${classes.isLink}`} to="/">
              Services
            </Link>
            <Link className={`${classes.categoryItem} ${classes.isLink}`} to="/">
              Clients
            </Link>
            <Link className={`${classes.categoryItem} ${classes.isLink}`} to="/">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default FilteringMenu;
