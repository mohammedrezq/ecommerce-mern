import React from "react";


//https://www.w3schools.com/howto/howto_js_sidenav.asp
const FilteringMenu = (props) => {

  return (
    <div className={props.className}>
      <nav>
        <div style={{ width: "192px" }}>
          {props.children}
        </div>
      </nav>
    </div>
  );
};

export default FilteringMenu;
