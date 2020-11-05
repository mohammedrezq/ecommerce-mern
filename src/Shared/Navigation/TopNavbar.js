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
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
    // console.log("LoggedOut!")
    dispatch(logout());
    setOpen(false) // Make menu close on logout so it will not open when we loggin again (Second time logging in -issue solved-)
    setAdminMenu(false) // Make menu close on logout so it will not open when we loggin again (Second time logging in -issue solved-)
    history.push('/login')
    // history.push('/login') // Redirect user to homepage ('/') after logout 
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

  // return focus to the button when we transitioned from !open -> open

  // const prevOpen = useRef(open);
  // useEffect(() => {
  //   if (prevOpen.current === true && open === false) {
  //     anchorRef.current.focus();
  //   }

  //   prevOpen.current = open;
  // }, [open]);

  const userLogin = useSelector(state =>  state.userLogin);

  // console.log(userLogin)
  const { userInfo } = userLogin;
  // const { userInfo } = userSignup;

  // const userSignup = useSelector(state =>  state.userSignup);
  // const { userInfo } = userSignup;

  // console.log("Signup Info",userSignup)

  // const userInfoFromLS = JSON.parse(localStorage.getItem("userInfo"));
  // console.log(userInfoFromLS);




  // console.log("User INFO",userInfo)
  // console.log(userInfo.users)

  // console.log(open)
  return (
    <div className="top__navbar">
      <div className="brand__items" style={{fontSize:".88rem"}}>AnyThing..</div>
      {console.log(userInfo)}
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
          {`Hi, Adminstrator`}<SupervisorAccountIcon />
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
                    <MenuItem style={{fontSize:"0.88rem"}} onClick={handleAdminMenuClose}><Link style={{color: "inherit", textDecoration:"inherit"}} to="/admin/userList">User List</Link></MenuItem>
                    <MenuItem style={{fontSize:"0.88rem"}} onClick={handleAdminMenuClose}><Link style={{color: "inherit", textDecoration:"inherit"}} to="/admin/orderList">Order List</Link></MenuItem>
                    <MenuItem style={{fontSize:"0.88rem"}} onClick={handleAdminMenuClose}><Link style={{color: "inherit", textDecoration:"inherit"}} to="/admin/productList">Product List</Link></MenuItem>
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
          {`Hi, ${userInfo.firstName} ${userInfo.lastName}`}<PersonOutlineIcon />
        </Button>
        {/* {console.log(open)} */}
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
