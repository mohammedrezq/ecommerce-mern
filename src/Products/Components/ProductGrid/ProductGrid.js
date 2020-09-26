import React from "react";
// import { Link } from "react-router-dom";

import { Grid } from "@material-ui/core";

import Button from "../../../Shared/UIElements/Button";
import ProductItem from "../ProductItem/ProductItem";

const ProductCard = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="Product-grid center">
        <h1>No products found, May be add one!.</h1>
        <Button to="/new-product">Add Product</Button>
      </div>
    );
  }

  return (
    <div className={props.className}>
      <Grid container spacing={2}>
        {props.items.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            image={product.imagesUrls[0]}
            title={product.title}
            description={product.description}
            price={product.price}
            productCount={product.productCount}
            creator={product.creator}
            category={product.category}
          />
        ))}
      </Grid>
    </div>
  );
};

export default ProductCard;
