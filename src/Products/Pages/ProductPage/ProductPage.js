import React from "react";

// import ProductGallery from "../../Components/ProductGallery/ProductGallery";
import Button from '../../../Shared/UIElements/Button'

/* Product Size we should add product size based on its type whether its shoes or clothes */
const DUMMY_SINGLE_PRODUCT = {
  productId: "Prod1",
  productTitle: "Shoes From Nike",
  productSeries: "Nike City Ready",
  productPrice: 149.99,
  productType: "Shoes",
  productSizes: ["M 6 / W 7.5", "M 6.5 / W 8", "M 7 / W 8.5", "M 7.5 / W 9"],
  productShipping:
    "Free standard shipping and free 60-day returns for Nike Members.",
  productSizeFit: [
    "Model is wearing size S and is 5'9\"/175cm",
    "Loose fit for a roomy feel",
  ],
  productImages: ['https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/0a6391bb-dd85-4b99-a3b1-93d29e6e0c2e/yoga-luxe-womens-infinalon-crop-top-5XGffB.jpg','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5,q_80/b7051cb5-5966-439b-950a-df231c4363ec/yoga-luxe-womens-infinalon-crop-top-5XGffB.jpg','https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5,q_80/13e1826e-2282-4123-9975-32b6bf25a728/yoga-luxe-womens-infinalon-crop-top-5XGffB.jpg']
};

const ProductPage = (props) => {

    // const [isOpen, setIsOpen] = useState(false);

    // const openCollapseonClick = () => {
    //     setIsOpen(!isOpen);
    // }

  return (
    <>
      <div className={`product-basic-information`}>
        <h2>{DUMMY_SINGLE_PRODUCT.productTitle}</h2>
        <h1>{DUMMY_SINGLE_PRODUCT.productSeries}</h1>
        <div>${DUMMY_SINGLE_PRODUCT.productPrice}</div>
      </div>
      {DUMMY_SINGLE_PRODUCT.productImages.map(productImage => <img style={{maxHeight: "500px"}} src={productImage} alt={DUMMY_SINGLE_PRODUCT.productTitle} />)}
      
      <div className={`product-extra-information`}>
          {/* Change radio btns into Buttons https://stackoverflow.com/questions/16242980/making-radio-buttons-look-like-buttons-instead */}
          {DUMMY_SINGLE_PRODUCT.productSizes.map(productSize => 
        <div className={`product-size`}>
            <label htmlFor={DUMMY_SINGLE_PRODUCT.productId} className={`radioSizeCSS`}>
          <input id={DUMMY_SINGLE_PRODUCT.productId} name="SKUandSize" type="radio" className="sizeProduct" />
          {<i>${productSize}</i>}</label>
        </div>
            )}
      </div>
      <Button size="big">Add To Bag</Button>
      <Button size="big">Favorites</Button>
      {/* Add Collapsibles from Material UI */}
            <div>
                <p>
                    {DUMMY_SINGLE_PRODUCT.productShipping}
                </p>
            </div>

    </>
  );
};

export default ProductPage;
