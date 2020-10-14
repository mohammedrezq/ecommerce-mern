import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/* Redux */
import { connect } from "react-redux";
import * as actions from "../../../Store/Actions";

/* Material UI Components */
import {
  AccordionSummary,
  AccordionDetails,
  Typography,
  Accordion,
  Grid,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// import ProductGallery from "../../Components/ProductGallery/ProductGallery";
import Button from "../../../Shared/UIElements/Button";
import "./ProductPage.css";
import { listProductDetails } from "../../../Store/Actions/productsActions";
import Spinner from "../../../Shared/UIElements/Spinner";
import Message from "../../../Shared/UIElements/Message";
// import Spinner from "../../../Shared/UIElements/Spinner";
// import Message from "../../../Shared/UIElements/Message";

/* Product Size we should add product size based on its type whether its shoes or clothes */
// const DUMMY_SINGLE_PRODUCT = {
//   Title: "Shoes From Nike",
//   Brand: "Nike City Ready",
//   Price: 149.99,
//   Category: "Shoes",
//   Sizes: ["M 6 / W 7.5", "M 6.5 / W 8", "M 7 / W 8.5", "M 7.5 / W 9"],
//   Shipping:
//     "Free standard shipping and free 60-day returns for Nike Members.",
//   SizeFit:
//     "Model is wearing size S and is 5'9\"/175cm",
//   Images: [
//     "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/0a6391bb-dd85-4b99-a3b1-93d29e6e0c2e/yoga-luxe-womens-infinalon-crop-top-5XGffB.jpg",
//     "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5,q_80/b7051cb5-5966-439b-950a-df231c4363ec/yoga-luxe-womens-infinalon-crop-top-5XGffB.jpg",
//     "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5,q_80/13e1826e-2282-4123-9975-32b6bf25a728/yoga-luxe-womens-infinalon-crop-top-5XGffB.jpg",
//   ],
// };

const ProductPage = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const id = useParams().id;
  console.log(id)
  const dispatch = useDispatch(id);

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;
  console.log(productDetails);

  const leproduct = product.product; // get product from the product from the payload!!!
  // if(leproduct.Images) {
  // return <div>hello</div>;

  //   console.log(leproduct.Images[0], leproduct.Images[2]);
  // }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Grid container>
          <Grid item sm={12} md={8}>
            {leproduct.Images ? (
              leproduct.Images.map((img, index) => (
                <div
                  className={`productImage__css product--image__${index + 1}`}
                  key={index}
                >
                  <img src={img} alt={leproduct.Title} />
                </div>
              ))
            ) : (
              <div>There no available Images for this product</div>
            )}
          </Grid>
          <Grid item sm={12} md={4} className={`gird__item__4`}>
            {/* <h1>Product ADDED TO CART: {addToCart} </h1> */}
            <div className={`product-basic-information`}>
              <h2>{leproduct.Title}</h2>
              <h1>{leproduct.Title}</h1>
              <div>${leproduct.Price}</div>
            </div>
            <div className={`product-extra-information`}>
              {/* Change radio btns into Buttons https://stackoverflow.com/questions/16242980/making-radio-buttons-look-like-buttons-instead */}
              {leproduct.Sizes &&
                leproduct.Sizes.map((size, index) => (
                  <div
                    key={index}
                    className={`product-size selection-radio-btn`}
                  >
                    <input
                      id={index}
                      name="SKUandSize"
                      type="radio"
                      className={`sizeProduct radioInput`}
                    />
                    <label
                      htmlFor={index}
                      className={`radioSizeCSS radioLabel`}
                    >
                      {size}
                    </label>
                  </div>
                ))}
            </div>
            <div className={`product__addition`}>
              <Button
                onClick={() => props.addToCart("ShoesFromNike")}
                className={`product_add_to_cart`}
                basic
                size="default"
              >
                Add To Bag
              </Button>
              <Button
                className={`product_add_to_whishlist`}
                basic
                size="default"
              >
                Favorites
              </Button>
            </div>
            {/* Add Collapsibles from Material UI */}
            <div>
              <p>{leproduct.Shipping}</p>
            </div>

            {/* Material UI Accordion -Controlled- Rendering https://material-ui.com/components/accordion/#controlled-accordion */}
            <div className={`product-page-accordions`}>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleAccordionChange("panel1")}
                style={{ margin: "0" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ margin: "0" }} />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>Size&Fit</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {/* render each ProductSizeFit Tip in one listitem (Dynamically) */}
                      <span>{leproduct.SizeFit}</span>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleAccordionChange("panel2")}
                style={{ margin: "0" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ margin: "0" }} />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>Free Shipping & Returns</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{leproduct.Shipping}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
        </Grid>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productName) => {
      // console.log('product:', productName)
      return dispatch(actions.addToCart(productName));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductPage);
