import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom'
import { Grid } from "@material-ui/core";

import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import ProductGrid from "../../Components/ProductGrid/ProductGrid";
import SecondaryHeader from "../../../Shared/UIElements/SecondaryHeader";
import classes from "../../Components/ProductGrid/ProductGrid.module.css";
// import productsPageStyle from "./ProductsPage.module.css";
import secondaryHeaderCSS from "../../../Shared/UIElements/SecondaryHeader.module.css";
import FilteringMenu from "../../../Shared/UIElements/FilteringMenu";
import filteringMenuNavCSS from "../../../Shared/UIElements/FilteringMenu.module.css";

import Spinner from "../../../Shared/UIElements/Spinner";
import Message from "../../../Shared/UIElements/Message";

import { topRatedProductsList } from "../../../Store/Actions/productsActions";


const TopRatedProducts = () => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const dispatch = useDispatch();
  const history = useHistory();
  
  // console.log(keyword)
  const topRatedProducts = useSelector((state) => state.topRatedProducts);
  const { loading, error, products } = topRatedProducts;
  // console.log(products)
    let allProducts = products
    console.log(loading)
    console.log(error)
    console.log(products)

  // console.log(allProducts)

  useEffect(() => {
    dispatch(topRatedProductsList());
  }, [dispatch]);

  const [isFilterToggled, setisFilterToggled] = useState(false);

  const openFilters = () => {
    setisFilterToggled(true);
  };
  const closeFilters = () => {
    setisFilterToggled(false);
  };

  
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

  const highestPriceHandler = () => {
    history.push("/highprice")
  }
  const lowestPriceHandler = () => {
    history.push("/lowprice")
  }
  const topRatedHandler = () => {
    history.push("/top-rated")
  }

  return (
    <Grid container direction="column">
      <div className={secondaryHeaderCSS.stickySecondaryHeader}>
        <SecondaryHeader className={secondaryHeaderCSS.ProductsPaddingTop}>
          <h1 className={secondaryHeaderCSS.secondaryHeader}>Top Rated Products</h1>
          <nav className={secondaryHeaderCSS.secondaryHeaderNav}>
            <div
              className={`${secondaryHeaderCSS.filterToggle} ${secondaryHeaderCSS.filterToggleBtn}`}
            >
              {isFilterToggled ? (
                <Button onClick={closeFilters}>Hide Filters</Button>
              ) : (
                <Button onClick={openFilters}>Show Filters</Button>
              )}
            </div>
            <div className={secondaryHeaderCSS.sortBy}>
            <Button
          style={{textTransform: "capitalize", fontSize:"1rem", backgroundColor:"#f2f2f2" }}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Sort By
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
                    <div><MenuItem style={{fontSize:"0.88rem"}} onClick={highestPriceHandler}>Highest Price</MenuItem></div>
                    <div><MenuItem style={{fontSize:"0.88rem"}} onClick={lowestPriceHandler}>Lowest Price</MenuItem></div>
                    <div><MenuItem style={{fontSize:"0.88rem"}} onClick={topRatedHandler}>Top Rated</MenuItem></div>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
              
            </div>
          </nav>
          <div className={secondaryHeaderCSS.headerOffset}></div>
        </SecondaryHeader>
      </div>
      <Grid item container>
        <FilteringMenu
          className={
            isFilterToggled
              ? filteringMenuNavCSS.showLeftNav
              : filteringMenuNavCSS.hideLeftNav
          }
        />
        <Grid item className={`${classes.grid12} ${classes.productGridResult}`}>
          {/* Products List Grid */}
          {loading ? (
            <Spinner />
          ) : error ? (
            <Message>{error}</Message>
          ) : (
            <>
            <ProductGrid items={allProducts} />
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TopRatedProducts;
