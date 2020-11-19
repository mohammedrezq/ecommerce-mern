import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from 'react-router-dom'
import { Grid } from "@material-ui/core";

import ProductGrid from "../../Components/ProductGrid/ProductGrid";
import SecondaryHeader from "../../../Shared/UIElements/SecondaryHeader";
import classes from "../../Components/ProductGrid/ProductGrid.module.css";
// import productsPageStyle from "./ProductsPage.module.css";
import secondaryHeaderCSS from "../../../Shared/UIElements/SecondaryHeader.module.css";
import FilteringMenu from "../../../Shared/UIElements/FilteringMenu";
import filteringMenuNavCSS from "../../../Shared/UIElements/FilteringMenu.module.css";


import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Spinner from "../../../Shared/UIElements/Spinner";
import Message from "../../../Shared/UIElements/Message";

import { listProducts } from "../../../Store/Actions/productsActions";
import Paginate from "../../../Shared/Navigation/Paginate";
import Sizes from "../../../Shared/Assets/Sizes";


const ProductsPage = () => {
  const [open, setOpen] = useState(false);
  const [Size, setSize] = useState([]);

  const anchorRef = useRef(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const keyword = useParams().keyword;

  const pageNumber = useParams().pageNumber || 1;
  
  // console.log(keyword)
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, pages, page } = productList;
  console.log(products)

  // console.log(allProducts)

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);



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

  console.log(Size)
  let someProducts = products.filter(product => {
    // console.log(product.Sizes)
    // if( Size === [] ){
    //   return (products)
    // }
    return (product.Sizes.some(sizes => {
      return (Size.includes(sizes))
    }));
  });
  console.log(someProducts)

  // let thegenderedProducts = someProducts.filter(product => {
  //   return (product.Genders.some(gender => {
  //     return (["female"].includes(gender));
  //   }))
  // })
  // console.log(thegenderedProducts)

  const highestPriceHandler = () => {
    history.push("/highprice")
  }
  const lowestPriceHandler = () => {
    history.push("/lowprice")
  }
  const topRatedHandler = () => {
    history.push("/top-rated")
  }

  console.log(Size)
  const onSizeChange = (e) => {
    let TheSizesArray = [...Size, e.currentTarget.value]; // Filtering Array : https://stackoverflow.com/questions/61986464/react-checkbox-if-checked-add-value-to-array
    // console.log("THE SIZES",Size)
    let SizesChecked = e.currentTarget.checked;
    if(Size.includes(e.currentTarget.value)) {
      TheSizesArray = TheSizesArray.filter((size) =>  { 
        // console.log("TheSize",size) 
        return (size !== e.currentTarget.value)
      });
      setSize(TheSizesArray);
      // setCheckedSizes(SizesChecked);
    }
    // console.log(TheSizesArray)
    setSize(TheSizesArray);
    // setCheckedSizes(SizesChecked);

  }

  return (
    <Grid container direction="column">
      <div className={secondaryHeaderCSS.stickySecondaryHeader}>
        <SecondaryHeader className={secondaryHeaderCSS.ProductsPaddingTop}>
          <h1 className={secondaryHeaderCSS.secondaryHeader}>All Products</h1>
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
            <div style={{maxWidth:"300px"}}>
            {Sizes.map((size, index) => {
    return (
        <FormControlLabel
        key={index}
        control={
          <Checkbox
            id={size.value}
            // checked={Sizes.inclues(size.value) ? true : false} "Same As indexOf(size.value) === -1 ?false: true"
            checked={Size[size.key]}
            onChange={onSizeChange}
            value={size.value}
            name={size.value}
          />
        }
        label={size.key}
      />
    )
  })};
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
            {(Size.length === 0) ? <ProductGrid items={products} /> : <ProductGrid items={someProducts} /> }
            
            <Paginate activeClass={`activePage`} pages={pages} pageNum={page} keyword={keyword ? keyword : ""} />
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductsPage;
