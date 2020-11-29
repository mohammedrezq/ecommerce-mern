import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import { logout } from "../../Store/Actions/userActions";
import "./TopNavbar.css";

const TopNavbar = (props) => {

  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [adminMenu, setAdminMenu] = useState(false);
  const anchorRef = useRef(null);
  const anchorAdminRef = useRef(null);

  const history = useHistory();
  const logoutHandler = () => {
    dispatch(logout());
    setOpen(false) // Make menu close on logout so it will not open when we loggin again (Second time logging in -issue solved-)
    setAdminMenu(false) // Make menu close on logout so it will not open when we loggin again (Second time logging in -issue solved-)
    history.push('/login')
  }

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }
  const handleAdminToggle = () => {
    setAdminMenu((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if(anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setAdminMenu(false);

    setOpen(false);
  }
  const handleAdminMenuClose = (event) => {
    if(anchorAdminRef.current && anchorAdminRef.current.contains(event.target)) {
      return;
    }

    setAdminMenu(false);
  }


  function handleListKeyDown(event) {
    if (event.key === "Tab" ) {
      event.preventDefault();
      setOpen(false);
      setAdminMenu(false);
    }
  }

  const userLogin = useSelector(state =>  state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div className="top__navbar">
      <div className="brand__items" style={{fontSize:".88rem"}}>AnyThing..</div>
      {userInfo ? (
        <div className="topNav_Right">
          {userInfo.isAdmin && ( // If User is Admin add Second Menu for Main Admin Pages
          <>
          <Button
          style={{textTransform: "capitalize", fontSize:".88rem"}}
          ref={anchorAdminRef}
          aria-controls={open ? 'menu-admin_list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleAdminToggle}
        >
          <span className="adminstrator_Options">{`Hi, Adminstrator`}</span>
          <SupervisorAccountIcon />
        </Button>
        <Popper style={{zIndex:"1000"}} open={adminMenu} anchorEl={anchorAdminRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleAdminMenuClose}>
                  <MenuList id="menu-admin_list-grow" onKeyDown={handleListKeyDown}>
                  <Link style={{color: "inherit", textDecoration:"inherit"}} to="/admin/userslist"><MenuItem style={{fontSize:"0.88rem"}} onClick={handleAdminMenuClose}>User List</MenuItem></Link>
                    <Link style={{color: "inherit", textDecoration:"inherit"}} to="/admin/orderslist"><MenuItem style={{fontSize:"0.88rem"}} onClick={handleAdminMenuClose}>Order List</MenuItem></Link>
                    <Link style={{color: "inherit", textDecoration:"inherit"}} to="/admin/productslist"><MenuItem style={{fontSize:"0.88rem"}} onClick={handleAdminMenuClose}>Product List</MenuItem></Link>
                    <Link style={{color: "inherit", textDecoration:"inherit"}} to="/admin/categorieslist"><MenuItem style={{fontSize:"0.88rem"}} onClick={handleAdminMenuClose}>Categories List</MenuItem></Link>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        </>
        )} 
          <Button
          style={{textTransform: "capitalize", fontSize:".88rem"}}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <span className="loggedIn_Info">{`Hi, ${userInfo.firstName} ${userInfo.lastName}`}</span>
          <PersonOutlineIcon />
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
                    <Link style={{color: "inherit", textDecoration:"inherit"}} to="/profile"><MenuItem style={{fontSize:"0.88rem"}} onClick={handleClose}>Profile</MenuItem></Link>
                    <div><MenuItem style={{fontSize:"0.88rem"}} onClick={logoutHandler}>Logout</MenuItem></div>
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
          <Link style={{color: "inherit", textDecoration:"inherit"}}  to="/login">
            <span>Login</span>
          </Link>
        </div>
        <span className="seperator__verticalBar">|</span>
        <div className="auth__singup">
          <Link style={{color: "inherit", textDecoration:"inherit"}}  to="/register">
            <span>Join Us</span>
          </Link>
        </div>
      </div>
      ) }
      
    </div>
  );
};

export default TopNavbar;
