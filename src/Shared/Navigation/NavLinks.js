import React from "react";
import { NavLink, useHistory } from "react-router-dom";

import './NavLinks.css';

const NavLinks = (props) => {
  const history = useHistory();
  const handleListItemClick = (toUrl) => {
    history.push(toUrl)
  }

  return (
    <ul className="nav-links">
      <li onClick={() => handleListItemClick("/")}><div className="nav_Link_Item">
  <NavLink to="/" exact><span>{props.textHome}</span></NavLink>
      </div>
      </li>
      <li onClick={() => handleListItemClick("/")}><div className="nav_Link_Item">
  <NavLink to="/" exact>{props.IconFavorite}<span>{props.textFavorite}</span></NavLink>
      </div>
      </li>
      <li onClick={() => handleListItemClick("/cart")}><div className="nav_Link_Item">
        <NavLink to="/cart" onClick={props.onClick} exact><span className="navLinkCart">Cart</span><div className="cart__Icon">{props.IconCart}{props.textCart}<span>{props.number}</span></div></NavLink>
      </div>
      </li>
    </ul>
  );
};

export default NavLinks;