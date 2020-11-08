import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardMedia, CardContent, Typography } from "@material-ui/core";

import productItemCSS from './ProductItem.module.css'

// import ProductInfo from "./ProductInfo/ProductInfo";

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: "0 0 black",
    borderRadius: "0",
  },
  media: {
    height: 0,
    paddingTop: "100%", // 16:9
  },
}));

const ProductItem = (props) => {
  const classes = useStyles();

  /* Replace spaces with dashes || https://stackoverflow.com/questions/1983648/replace-spaces-with-dashes-and-make-all-letters-lower-case */
  // let productTitleUrl = props.title;
  // productTitleUrl = productTitleUrl.replace(/\s+/g, '-').toLowerCase();

  // let categoryUrl = props.category;
  // categoryUrl = categoryUrl.replace(/\s+/g, '-')

  return (
    <Grid item xs={6} sm={6} md={4} lg={4} xl={3}>
      <Link to={`/product/${props.id}`} style={{ textDecoration: "none" }}>
        <Card className={`${classes.root} ${productItemCSS.productStyle}`}>
          {/* Product Images */}
          <CardMedia
            className={classes.media}
            image={props.image}
            title={props.title}
          />
          {/* Product Info */}
          <div className="product__info">
            <CardContent>
              <Typography variant="body1">{props.category}</Typography>
              <Typography variant="body1">{props.title}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.price}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {/* <div style={{fontSize: "1rem", marginTop:"10px"}}>
                  </div> */}
                {props.colors}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Link>
    </Grid>
  );
};

export default ProductItem;
