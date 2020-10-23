import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

import { logout } from "../../Store/Actions/userActions";

import "./TopNavbar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const TestingNavbar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const dispatch = useDispatch();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    console.log("LoggedOut!");
    dispatch(logout());
    // history.push('/login') // Redirect user to homepage ('/') after logout
  };

  return (
    <div className="top__navbar">
      <div className="brand__items" style={{ fontSize: ".88rem" }}>
        AnyThing..
      </div>
      <div>
        {userInfo && (
          <div>
            <Button
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              {`Hi, ${userInfo.firstName} ${userInfo.lastName} `}
              <PersonOutlineIcon />
            </Button>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem
                          style={{ fontSize: "0.88rem" }}
                          onClick={handleClose}
                        >
                          <Link
                            style={{
                              color: "inherit",
                              textDecoration: "inherit",
                            }}
                            to="/profile"
                          >
                            Profile
                          </Link>
                        </MenuItem>
                        <MenuItem
                          style={{ fontSize: "0.88rem" }}
                          onClick={logoutHandler}
                        >
                          <span>Logout</span>
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        )}
        {!userInfo && (
          <div className="auth__buttons">
            <div className="auth__login">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/login"
              >
                <span>Login</span>
              </Link>
            </div>
            <span className="seperator__verticalBar">|</span>
            <div className="auth__singup">
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/register"
              >
                <span>Join Us</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestingNavbar;
