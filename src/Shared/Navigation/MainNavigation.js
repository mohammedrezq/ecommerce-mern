import React, { useState } from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import ReactResizeDetector from "react-resize-detector";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import Drawer from "./Drawer";
import HamburgerButton from "../UIElements/HamburgerButton";
import Backdrop from "../UIElements/Backdrop";
import './MainNavigation.css';

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

const openDrawerHandler = () => {
    setDrawerIsOpen(true);
};

// Close Menu as Drawer
const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
};

const handleWindowResizing = () => {
  window.addEventListener('resize', closeDrawerHandler)
};
  return (
    <>
      <ReactResizeDetector onResize={handleWindowResizing}>
        {/* This check if drawer is open, if so on click on backdrop it will close the drawer */}
        <MediaQuery query="(max-width: 768px)">
          {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

          <Drawer
            className={"menu-drawer" + (drawerIsOpen ? " show" : " hide")}
            onClick={closeDrawerHandler}
          >
            {/* <nav className="main-navigation__drawer-nav"> */}
            <NavLinks />
            {/* </nav> */}
          </Drawer>
        </MediaQuery>
      </ReactResizeDetector>

      <MainHeader>
        <h1 className="main-navigation__title">
          <Link to="/">Home</Link>
        </h1>
        <MediaQuery query="(max-width: 768px)">
          <HamburgerButton onClick={openDrawerHandler} />
        </MediaQuery>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};

export default MainNavigation;
