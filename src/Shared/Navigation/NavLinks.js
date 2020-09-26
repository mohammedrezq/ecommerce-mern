import React from "react";
import { NavLink } from "react-router-dom";

import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

import './NavLinks.css';

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/">Home Page</NavLink>
      </li>
      <li>
        <NavLink to="/account">Account</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/search">LinkToSearch (RalphLauren)</NavLink>
      </li>
      <li>
        <NavLink to="/favorites"><FavoriteBorderOutlinedIcon /></NavLink>
      </li>
      <li>
        <NavLink to="/cart"><LocalMallOutlinedIcon  /></NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;