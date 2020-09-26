import React from "react";

import ProductImage from "../ProductImage/ProductImage";


const ProductGallery = (props) => {

  return (
    <div>
          <ProductImage
            smallImg={props.srcSet} mediaQuery={props.media} imagesLinks={props.src} imageDescription={props.alt}
          />
    </div>
  );
};

export default ProductGallery;
