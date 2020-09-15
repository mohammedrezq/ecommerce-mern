import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import ProductItem from "../ProductItem/ProductItem";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const ProductCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6} lg={4}>
            <Link
              style={{ textDecoration: "none" }}
              href="https://www.twitter.com"
            >
              <ProductItem />
            </Link>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <Link
              style={{ textDecoration: "none" }}
              href="https://www.twitter.com"
            >
              <ProductItem />
            </Link>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <Link
              style={{ textDecoration: "none" }}
              href="https://www.twitter.com"
            >
              <ProductItem />
            </Link>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <Link
              style={{ textDecoration: "none" }}
              href="https://www.twitter.com"
            >
              <ProductItem />
            </Link>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <Link
              style={{ textDecoration: "none" }}
              href="https://www.twitter.com"
            >
              <ProductItem />
            </Link>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <Link
              style={{ textDecoration: "none" }}
              href="https://www.twitter.com"
            >
              <ProductItem />
            </Link>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <Link
              style={{ textDecoration: "none" }}
              href="https://www.twitter.com"
            >
              <ProductItem />
            </Link>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <Link
              style={{ textDecoration: "none" }}
              href="https://www.twitter.com"
            >
              <ProductItem />
            </Link>
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <Link
              style={{ textDecoration: "none" }}
              href="https://www.twitter.com"
            >
              <ProductItem />
            </Link>
          </Grid>
        </Grid>
    </div>
  );
};

export default ProductCard;
