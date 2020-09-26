import React from "react";
import ReactDOM from "react-dom";

// Drawers open on hover like in Nike.com/w or RalphLauren.com
const Drawer = (props) => {
  const content = <div show={props.show} className={props.className} onClick={props.onClick}>
      {props.children}
    </div>
  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
};

export default Drawer;
