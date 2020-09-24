import React, { useState } from "react";
import { Grid } from "@material-ui/core";

import ProductGrid from "../../Components/ProductGrid/ProductGrid";
import SecondaryHeader from "../../../Shared/UIElements/SecondaryHeader";
import classes from "../../Components/ProductGrid/ProductGrid.module.css";
// import productsPageStyle from "./ProductsPage.module.css";
import secondaryHeader from "../../../Shared/UIElements/SecondaryHeader.module.css";
// import FilteringMenu from "../../../Shared/UIElements/FilteringMenu";
import productsPageStyling from "./ProductsPage.module.css";

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
      <div className={secondaryHeader.stickySecondaryHeader}>
        {/* <div className={secondaryHeader.headerOffset}></div> */}
        <SecondaryHeader className={secondaryHeader.ProductsPaddingTop}>
          <h1 className={secondaryHeader.secondaryHeader}>All Products</h1>
          <div className={secondaryHeader.filterToggle}>
            {isFilterToggled ? (
              <span onClick={closeFilters}>Hide Filters</span>
            ) : (
              <span onClick={openFilters}>Show Filters</span>
            )}
          </div>
          <span>Sort By</span>
          <div className={secondaryHeader.headerOffset}></div>
        </SecondaryHeader>
      </div>
      <Grid item container className={`${productsPageStyling.effect}${productsPageStyling.container}`}>
        {/* <Grid item className={classes.grid1} /> */}
        {/* <FilteringMenu /> */}
        <Grid item className={classes.grid12} >
          <ProductGrid />
        </Grid>
        {/* <Grid item className={classes.grid1} /> */}
      </Grid>
    </Grid>
  );
}

export default ProductsPage;
