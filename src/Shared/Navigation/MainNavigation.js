import React, { useState, useEffect } from "react";
import { Link, useHistory, Route } from "react-router-dom";
import MediaQuery from "react-responsive";
import ReactResizeDetector from "react-resize-detector";
import SearchBox from "../Search/SearchBox";
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';

/* Redux */
import { connect, useSelector } from 'react-redux';
import * as actions from '../../Store/Actions'


import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import Drawer from "./Drawer";
import HamburgerButton from "../UIElements/HamburgerButton";
import Backdrop from "../UIElements/Backdrop";
import "./MainNavigation.css";
import classes from "./Drawer.module.css";
import CartPage from "../../Products/Pages/CartPage/CartPage";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  // console.log(props)
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

  // useEffect (() => {
  //   actions.getProductsNumber();
  // }, [])

  let history = useHistory();

  // const goToCartPage = () => {
  //   history.push('/cart');
  // }



  
  const productToCart = useSelector((state) => state.addProductToCart); // from Store combine reduers
  // console.log(productToCart)
  const { err, loadingStatus, cartProducts } = productToCart;

  // console.log(cartProducts);


  let arr = JSON.parse(localStorage.getItem("cartProducts"));
  // if( arr === null || undefined ) arr = [];
  // localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  // localStorage.setItem("cartProducts", JSON.stringify(arr))

// console.log(arr)


  // const productArr = arr.map((p) => p);
  // const nr = productArr.map((x) => x[0]);
  // const productItem = nr.map((item) => item); // all items in LocalStorage


  // if (productItem && productItem.length <= 9) {
  //   productItem.length
  // } else {
  //   <span>9+</span>
  // }
  // console.log(productItem.length)
  return (
    <>
      <ReactResizeDetector onResize={handleWindowResizing}>
        {/* This check if drawer is open, if so on click on backdrop it will close the drawer */}
        <MediaQuery query="(max-width: 767.9px)">
          {drawerIsOpen && <Backdrop menu onClick={closeDrawerHandler} />}

          <Drawer
            className={`${classes.menuDrawer} ${
              drawerIsOpen ? classes.show : classes.hide
            }`}
            onClick={closeDrawerHandler}
          >
            {/* <nav className="main-navigation__drawer-nav"> */}
            <NavLinks textHome="Home" textCart="Cart" textFavorite="Favorite" />
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
        <div className={`items_Header_Main_Navgiation`}>
        <Route render={({ history }) => <SearchBox history={history} />} />
        <nav className="main-navigation__header-nav">
          <NavLinks IconCart={<svg width="26px" height="26px" fill="#111" viewBox="0 0 24 24"><path d="M16 7a1 1 0 0 1-1-1V3H9v3a1 1 0 0 1-2 0V3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1z"></path><path d="M20 5H4a2 2 0 0 0-2 2v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a2 2 0 0 0-2-2zm0 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7h16z"></path></svg>} IconFavorite={<FavoriteBorderOutlinedIcon />} textHome="Home" number={arr && arr.length <= 9 ? arr.length : "9+"} to="/cart" />
        </nav>
        <MediaQuery query="(max-width: 767.9px)">
          <HamburgerButton onClick={openDrawerHandler} />
        </MediaQuery>
        </div>
      </MainHeader>
    </>
  );
};

// const mapStateToProps = state => {
//   return {
//     productsNumber: state.addtoCartReducer
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getProductsNumber: () => dispatch(actions.getProductsNumber())
//   }
// }

export default MainNavigation;
