import { Backdrop } from "@material-ui/core";
import React, { useState } from "react";
import {Link} from 'react-router-dom';

import Drawer from "./Drawer";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import './MainNavigation.css'

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  // Open Menu as Drawer
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  // Close Menu as Drawer
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
        {/* This check if drawer is open, if so on click on backdrop it will close the drawer */}
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <Drawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </Drawer>

      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Home</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
