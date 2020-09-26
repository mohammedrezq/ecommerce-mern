import React from "react";

import classes from './ProductImage.module.css';

const ProductImage = (props) => {
  return (
    <picture className={classes.product_image__scale}>
      {/* srcSet The Link of Responsive Image || media is the media query for the responsive image link */}
      <source srcSet={props.imgUrlMedia768} media={props.media768} />
      <img src={props.imageUrl} alt={props.alt} />
    </picture>
  );
};

export default ProductImage;
