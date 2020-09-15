import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, Grid, Link } from "@material-ui/core";

import ProductInfo from "./ProductInfo/ProductInfo";

const useStyles = makeStyles(() => ({
  root: {
    boxShadow: "0 0 black",
  },
  media: {
    height: 0,
    paddingTop: "100%", // 16:9
    margin: "12px",
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
  },
}));

const ProductItem = () => {
  const classes = useStyles();

  return (
    <Grid item sm={12} md={6} lg={4}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image="https://media.tiffany.com/is/image/Tiffany/EcomBrowseM/tiffany-co-schlumbergerlynn-pendant-62266465_987514_ED-62266465_987668_SV_1.jpg"
            title="Gold Rubies"
          />
          <ProductInfo
            productTitle="Tiffany & Co. Schlumberger® Lynn pendant in 18k gold with rubies."
            descriptionList1={"18k gold with round rubies"}
            descriptionList2={`On a 16" chain`}
            descriptionList3={`Carat total weight .20`}
          />
        </Card>
    </Grid>
  );
};

export default ProductItem;
