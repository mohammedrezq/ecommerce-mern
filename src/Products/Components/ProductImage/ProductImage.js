import React from "react";

import classes from './ProductImage.module.css';

const ProductImage = (props) => {
  return (
    <picture className={classes.product_image__scale}>
      <source srcSet={props.imgUrlMedia400} media={props.media400} />
      <source srcSet={props.imgUrlMedia800} media={props.media800} />
      <source srcSet={props.imgUrlMedia1200} media={props.media1200} />
      <img src={props.imageUrl} alt={props.alt} />
    </picture>
  );
};

export default ProductImage;
