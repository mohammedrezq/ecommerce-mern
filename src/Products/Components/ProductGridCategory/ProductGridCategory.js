import React from "react";
// import { Link } from "react-router-dom";

import { Grid } from "@material-ui/core";

import ProductItem from "../ProductItem/ProductItem";

const ProductCard = (props) => {
  // if (props.items.length === 0) {

  // }

  return (
    <div className={props.className}>
      <Grid container spacing={2}>
        {props.items && props.items.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            image={product.Images[0]}
            title={product.Title}
            description={product.Description}
            price={`$${product.Price}`}
            // colors={product.Colors.map(color => <span style={{height: "25px",
            //   width: "25px",
            //   backgroundColor: color,
            //   borderRadius: "50%",
            //   display: "inline-block", margin:"5px 5px 5px 0", border:"1px solid #ccc"}}></span>)}
            // CountInStock={product.CountInStock}
            // creator={product.creator}
            // category={product.Category}
          />
        ))}
      </Grid>
    </div>
  );
};

export default ProductCard;
