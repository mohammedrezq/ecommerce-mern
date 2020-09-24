import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import ProductGrid from "../../Components/ProductGrid/ProductGrid";
import SecondaryHeader from "../../../Shared/UIElements/SecondaryHeader";
import classes from "../../Components/ProductGrid/ProductGrid.module.css";
// import productsPageStyle from "./ProductsPage.module.css";
import secondaryHeaderCSS from "../../../Shared/UIElements/SecondaryHeader.module.css";
import FilteringMenu from "../../../Shared/UIElements/FilteringMenu";
import filteringMenuNavCSS from "../../../Shared/UIElements/FilteringMenu.module.css";

function ProductsPage() {
  const [isFilterToggled, setisFilterToggled] = useState(false);

  const openFilters = () => {
    setisFilterToggled(true);
  };
  const closeFilters = () => {
    setisFilterToggled(false);
  };

  console.log(isFilterToggled);
  return (
    <Grid container direction="column">
      <div className={secondaryHeaderCSS.stickySecondaryHeader}>
        {/* <div className={secondaryHeader.headerOffset}></div> */}
        <SecondaryHeader className={secondaryHeaderCSS.ProductsPaddingTop}>
          <h1 className={secondaryHeaderCSS.secondaryHeader}>All Products</h1>
          <nav className={secondaryHeaderCSS.secondaryHeaderNav}>
          <button className={`${secondaryHeaderCSS.filterToggle} ${secondaryHeaderCSS.filterToggleBtn}`}>
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
        {/* <Grid item className={classes.grid1} /> */}
        <FilteringMenu
          className={
            isFilterToggled
              ? filteringMenuNavCSS.showLeftNav
              : filteringMenuNavCSS.hideLeftNav
          }
        />
        <Grid item className={`${classes.grid12} ${classes.productGridResult}`}>
          <ProductGrid />
        </Grid>
        {/* <Grid item className={classes.grid1} /> */}
      </Grid>
    </Grid>
  );
}

export default ProductsPage;
