import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/* Redux */
import { listProductDetails } from "../../../Store/Actions/productsActions";

/* Material UI Components */
import {
  AccordionSummary,
  AccordionDetails,
  Typography,
  Accordion,
  Grid,
  InputLabel,
  FormControl,
  Select,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Button from "../../../Shared/UIElements/Button";
import "./ProductPage.css";
import Spinner from "../../../Shared/UIElements/Spinner";
import Message from "../../../Shared/UIElements/Message";

const ProductPage = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const id = useParams().id;
  console.log(id);
  const dispatch = useDispatch(id);

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;

  console.log(productDetails);

  const leproduct = product.product; // get product from the product from the payload!!!

  // console.log(leproduct.Reviews);

  let productQty = [0,1,2,3,4,5,6,7,8,9];
  let productsCountInStock = [...Array(leproduct.CountInStock).keys()];

  let availableQuantity = leproduct.CountInStock >= 10 ? productQty : productsCountInStock
  // console.log(productsCountInStock);
  // console.log(leproduct.Colors)

  let history = useHistory();

  const addToCartHandler = () => {
    history.push(`/cart/${id}?size=${size}?color=${color}?qty=${qty}`)
  }



  // console.log(qty);

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
                    key={size}
                    className={`product-size selection-radio-btn`}
                  >
                    <input
                      id={size}
                      onChange={() => setSize(size)}
                      name="SKUandSize"
                      type="radio"
                      className={`sizeProduct radioInput`}
                    />
                    <label
                      htmlFor={size}
                      className={`radioSizeCSS radioLabel`}
                    >
                      {size}
                    </label>
                  </div>
                ))}
                </div>
            <div className={`product-extra-information`}>

              {leproduct.Colors &&
                leproduct.Colors.map((color, index) => (
                  <div
                    key={color}
                    className={`product-color selection-radio-btn`}
                  >
                    <input
                      id={color}
                      onChange={() => setColor(color)}
                      name="SKUandColor"
                      type="radio"
                      className={`colorProduct radioInput`}
                    />
                    <label
                      htmlFor={color}
                      className={`radioColorCSS radioLabel`}
                    >
                      {color}
                    </label>
                  </div>
                ))}
            </div>
            <div className={`product__selections`} style={{ padding: "20px" }}>
              {leproduct.CountInStock > 0 && (
                <div>
                  <FormControl className={`quantity_product_cart`}>
                    <InputLabel htmlFor="quantity_to_cart">Quantity</InputLabel>
                    <Select
                      fullWidth={true}
                      native
                      value={qty}
                      onChange={e => setQty(e.target.value)}
                      inputProps={{
                        name: "quantity",
                        id: "quantity_to_cart",
                      }}
                    >
                      {leproduct.CountInStock  && availableQuantity.map(q => 
                          <option key={q+1} value={q+1}>{q + 1}</option>
                        )}
                      {/* <option value={10}>Ten</option>
                      <option value={20}>Twenty</option>
                      <option value={30}>Thirty</option> */}
                    </Select>
                  </FormControl>
                </div>
              )}
            </div>
            <div className={`product__addition`}>
              {leproduct.CountInStock > 0 ? (
                <Button
                  onClick={addToCartHandler}
                  className={`product_add_to_cart`}
                  basic
                  size="default"
                >
                  Add To Bag
                </Button>
              ) : (
                <Button
                  onClick={() => props.addToCart("ShoesFromNike")}
                  className={`product_add_to_cart`}
                  basic
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.67)",
                    border: "none",
                  }}
                  size="default"
                >
                  Out Of Stock
                </Button>
              )}

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

export default ProductPage;
