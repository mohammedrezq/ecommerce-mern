import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import MediaQuery from "react-responsive";
import ReactResizeDetector from "react-resize-detector";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import Drawer from "./Drawer";
import HamburgerButton from "../UIElements/HamburgerButton";
import Backdrop from "../UIElements/Backdrop";
import "./MainNavigation.css";
import classes from "./Drawer.module.css";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

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

          <Drawer
            className={`${classes.menuDrawer} ${
              drawerIsOpen ? classes.show : classes.hide
            }`}
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
          <Link to="/">
            <svg
              height="60px"
              width="60px"
              fill="#111"
              viewBox="0 0 69 32"
            >
              <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
            </svg>
          </Link>
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

export default withRouter(MainNavigation);
