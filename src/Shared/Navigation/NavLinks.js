import React from "react";
import { NavLink } from "react-router-dom";


import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/favorites" exact><FavoriteBorderOutlinedIcon /></NavLink>
      </li>
      <li>
        <NavLink to="/cart" onClick={props.onClick} exact><LocalMallOutlinedIcon  /><span>{`${props.number}`}</span></NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;