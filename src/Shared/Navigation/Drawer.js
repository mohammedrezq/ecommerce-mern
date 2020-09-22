import React from "react";

import './Drawer.css';


// Drawers open on hover like in Nike.com/w or RalphLauren.com
const Drawer = props => {
    return(
      <div show={props.show} className={props.className} onClick={props.onClick}>{props.children}</div>
    )
}


export default Drawer;
