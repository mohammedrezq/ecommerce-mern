import React, { useState, useRef ,useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';


import { logout } from "../../Store/Actions/userActions";
import "./TopNavbar.css";

const TopNavbar = (props) => {

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const history = useHistory();
  const logoutHandler = () => {
    console.log("LoggedOut!")
    dispatch(logout());
    // history.push('/login') // Redirect user to homepage ('/') after logout 
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if(anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }


  function handleListKeyDown(event) {
    if (event.key === "Tab" ) {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);

  useEffect(() => {
    if(prevOpen.current === true && open === false ) {
      anchorRef.current.focus();
    }
    prevOpen.current = open;
  }, [open])

  const userLogin = useSelector(state =>  state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div className="top__navbar">
      <div className="brand__items">AnyThing..</div>
      {userInfo ? (
        <div>
          <Button
          style={{textTransform: "capitalize"}}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {`Hi, ${userInfo.firstName} ${userInfo.lastName}`}
        </Button>
        <Popper style={{zIndex:"1000"}} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem style={{fontSize:"0.88rem"}} onClick={handleClose}><Link style={{color: "inherit", textDecoration:"inherit"}} to="/profile">Profile</Link></MenuItem>
                    <MenuItem style={{fontSize:"0.88rem"}} onClick={logoutHandler}><span>Logout</span></MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        </div>
      ): (
        <div className="auth__buttons">
        <div className="auth__login">
          <Link to="/login">
            <span>Login</span>
          </Link>
        </div>
        <span className="seperator__verticalBar">|</span>
        <div className="auth__singup">
          <Link to="/register">
            <span>Join Us</span>
          </Link>
        </div>
      </div>
      ) }
      
    </div>
  );
};

export default TopNavbar;
