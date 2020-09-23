import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import ProductItem from "../ProductItem/ProductItem";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const ProductCard = () => {
  const classes = useStyles();

  // Add history to react-router-dom to use it
  // const history = useHistory();

  // const proudctLinkHandler = () => {
  //   history.push("/product/");
  // };

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <ProductItem />
          </Link>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <ProductItem />
          </Link>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <ProductItem />
          </Link>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <ProductItem />
          </Link>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <ProductItem />
          </Link>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <ProductItem />
          </Link>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <ProductItem />
          </Link>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <ProductItem />
          </Link>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <ProductItem />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductCard;
