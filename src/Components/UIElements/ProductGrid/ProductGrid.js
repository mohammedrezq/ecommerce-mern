import React from "react";
import { Link,  useHistory } from "react-router-dom";

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

  const history = useHistory();

  const proudctLinkHandler = () => {
    history.push('/product/')
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item sm={12} md={6} lg={4}>
          <Link
            style={{ textDecoration: "none" }}
            onClick={proudctLinkHandler}
          >
            <ProductItem />
          </Link>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Link
            style={{ textDecoration: "none" }}
            onClick={proudctLinkHandler}
          >
            <ProductItem />
          </Link>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Link
            style={{ textDecoration: "none" }}
            onClick={proudctLinkHandler}
          >
            <ProductItem />
          </Link>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Link
            style={{ textDecoration: "none" }}
            onClick={proudctLinkHandler}
          >
            <ProductItem />
          </Link>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Link
            style={{ textDecoration: "none" }}
            onClick={proudctLinkHandler}
          >
            <ProductItem />
          </Link>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Link
            style={{ textDecoration: "none" }}
            onClick={proudctLinkHandler}
          >
            <ProductItem />
          </Link>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Link
            style={{ textDecoration: "none" }}
            onClick={proudctLinkHandler}
          >
            <ProductItem />
          </Link>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Link
            style={{ textDecoration: "none" }}
            onClick={proudctLinkHandler}
          >
            <ProductItem />
          </Link>
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <Link
            style={{ textDecoration: "none" }}
            onClick={proudctLinkHandler}
          >
            <ProductItem />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductCard;
