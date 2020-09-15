import React from "react";

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
}));

const ProductItem = () => {
  const classes = useStyles();

  return (

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
  );
};

export default ProductItem;
