import React from "react";
import { NavLink } from "react-router-dom";


import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
  <NavLink to="/" exact><span>{props.textHome}</span></NavLink>
      </li>
      <li>
  <NavLink to="/favorites" exact>{props.IconFavorite}<span>{props.textFavorite}</span></NavLink>
      </li>
      <li>
        <NavLink to="/cart" onClick={props.onClick} exact><div className="cart__Icon">{props.IconCart}{props.textCart}<span>{props.number}</span></div></NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;