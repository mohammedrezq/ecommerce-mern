import React from "react";
import { Button, Typography, Grid } from "@material-ui/core";

import ProductGrid from "../../Components/UIElements/ProductGrid/ProductGrid";
import ProductPage from '../ProductPage/ProductPage'
import classes from '../../Components/UIElements/ProductGrid/ProductGrid.module.css'

function ProductsPage() {
  return (
    <Grid container direction="column">
        <h1>Hello World</h1>
        <ProductPage />
        <Button variant="contained" color="primary">
          <Typography variant="h3" component="h3">
            Hello World Again in a Button
          </Typography>
        </Button>
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
