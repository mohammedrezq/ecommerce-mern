import React from "react";
import { NavLink } from "react-router-dom";

import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>Home Page</NavLink>
      </li>
      <li>
        <NavLink to="/account" exact>Account</NavLink>
      </li>
      <li>
        <NavLink to="/login" exact>Login</NavLink>
      </li>
      <li>
        <NavLink to="/search" exact>Search</NavLink>
      </li>
      <li>
        <NavLink to="/favorites" exact><FavoriteBorderOutlinedIcon /></NavLink>
      </li>
      <li>
        <NavLink to="/cart" exact><LocalMallOutlinedIcon  /></NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;