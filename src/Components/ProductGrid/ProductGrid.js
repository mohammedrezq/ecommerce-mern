import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import ProductItem from "../ProductItem/ProductItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const ProductCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={false} >
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
      </Grid>
    </div>
  );
};

export default ProductCard;
