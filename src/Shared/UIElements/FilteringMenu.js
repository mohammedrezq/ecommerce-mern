import React from "react";


//https://www.w3schools.com/howto/howto_js_sidenav.asp
const FilteringMenu = () => {
    return(
        <div className="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>
    )
}

export default FilteringMenu;