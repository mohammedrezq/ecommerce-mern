import React from "react";

import { CSSTransition } from "react-transition-group";

import './Drawer.css';


// Drawers open on hover like in Nike.com/w or RalphLauren.com
const Drawer = props => {
    return(
        <CSSTransition in={props.show} timeout={1000} classNames="slide-in-left" mountOnEnter unmountOnExit>
      <div className="menu-drawer" onClick={props.onClick}>{props.children}</div>

        </CSSTransition>
    )
}


export default Drawer;
