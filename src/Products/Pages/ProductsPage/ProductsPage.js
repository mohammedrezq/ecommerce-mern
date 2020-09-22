import React from "react";
import { Grid } from "@material-ui/core";

import ProductGrid from "../../Components/ProductGrid/ProductGrid";
import classes from '../../Components/ProductGrid/ProductGrid.module.css'

function ProductsPage() {
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item className={classes.grid1} />
        <Grid item className={classes.grid10}>
          <ProductGrid />
        </Grid>
        <Grid item className={classes.grid1} />
      </Grid>
    </Grid>
  );
}

export default ProductsPage;
