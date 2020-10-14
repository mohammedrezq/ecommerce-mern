import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Grid } from "@material-ui/core";

import ProductGrid from "../../Components/ProductGrid/ProductGrid";
import SecondaryHeader from "../../../Shared/UIElements/SecondaryHeader";
import classes from "../../Components/ProductGrid/ProductGrid.module.css";
// import productsPageStyle from "./ProductsPage.module.css";
import secondaryHeaderCSS from "../../../Shared/UIElements/SecondaryHeader.module.css";
import FilteringMenu from "../../../Shared/UIElements/FilteringMenu";
import filteringMenuNavCSS from "../../../Shared/UIElements/FilteringMenu.module.css";

import Spinner from "../../../Shared/UIElements/Spinner";
import Message from "../../../Shared/UIElements/Message";

import { listProducts } from "../../../Store/Actions/productsActions";


const ProductsPage = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const allProducts = products.products;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const [isFilterToggled, setisFilterToggled] = useState(false);

  const openFilters = () => {
    setisFilterToggled(true);
  };
  const closeFilters = () => {
    setisFilterToggled(false);
  };

  return (
    <Grid container direction="column">
      <div className={secondaryHeaderCSS.stickySecondaryHeader}>
        <SecondaryHeader className={secondaryHeaderCSS.ProductsPaddingTop}>
          <h1 className={secondaryHeaderCSS.secondaryHeader}>All Products</h1>
          <nav className={secondaryHeaderCSS.secondaryHeaderNav}>
            <button
              className={`${secondaryHeaderCSS.filterToggle} ${secondaryHeaderCSS.filterToggleBtn}`}
            >
              {isFilterToggled ? (
                <span onClick={closeFilters}>Hide Filters</span>
              ) : (
                <span onClick={openFilters}>Show Filters</span>
              )}
            </button>
            <div className={secondaryHeaderCSS.sortBy}>
              <span>Sort By</span>
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
            <ProductGrid items={allProducts} />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductsPage;
