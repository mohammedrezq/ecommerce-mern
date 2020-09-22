import React, { useState } from "react";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import ReactResizeDetector from "react-resize-detector";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import Drawer from "./Drawer";
import Backdrop from "../UIElements/Backdrop";
import "./MainNavigation.css";

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

  const handleWindowResizing = () => {
    window.addEventListener("resize", closeDrawerHandler);
  };

  return (
    <>
      <ReactResizeDetector onResize={handleWindowResizing}>
        {/* This check if drawer is open, if so on click on backdrop it will close the drawer */}
        <MediaQuery query="(max-width: 768px)">
          {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

          <Drawer show={drawerIsOpen} onClick={closeDrawerHandler}>
            <nav className="main-navigation__drawer-nav">
              <NavLinks />
            </nav>
          </Drawer>
        </MediaQuery>
      </ReactResizeDetector>
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
