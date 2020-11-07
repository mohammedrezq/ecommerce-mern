import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/* Redux */
import { listProductDetails } from "../../../Store/Actions/productsActions";
import {
  addProductToCart,
  // setProductSizeAction,
  // setProductQtyAction,
} from "../../../Store/Actions/cartActions";

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
  Modal,
  Backdrop,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";

import Button from "../../../Shared/UIElements/Button";
import "./ProductPage.css";
import Spinner from "../../../Shared/UIElements/Spinner";
import Message from "../../../Shared/UIElements/Message";
import Fade from "../../../Shared/UIElements/Fade";
import { array } from "yup";
import { useField } from "formik";
// import Backdrop from "../../../Shared/UIElements/Backdrop";

const styledBackdrop = withStyles({
  // Change (Material UI) Backdrop styling
  root: {
    background: "rgba(0,0,0,.7)",
  },
})(Backdrop);

const ProductPage = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [cartBtnClicked, setCartBtnClicked] = useState(false);
  const [qty, setQty] = useState("1");
  const [size, setSize] = useState("");
  const [open, setOpen] = useState(false);
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const id = useParams().id;
  // console.log(id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;

  const productToCart = useSelector((state) => state.addProductToCart); // from Store combine reduers
  const { err, loadingStatus, cartProducts } = productToCart;
  // const productArr =cartProducts.map(p => p);
  // const nr = productArr.map(x => x[0])

  // console.log(nr.map(item => console.log(item.title))); // all items in LocalStorage
  // cartProducts.map(p => p)
  // console.log(productDetails);

  const leproduct = product.product; // get product from the product from the payload!!!

  // console.log(leproduct.Reviews);

  let productQty = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let productsCountInStock = [...Array(leproduct.CountInStock).keys()];

  let availableQuantity =
    leproduct.CountInStock >= 10 ? productQty : productsCountInStock;

  let history = useHistory();

  // const productFeature = useSelector((state) => state.setProductFeature);

  // console.log(productFeature)

  const addToCartHandler = (id) => {
    dispatch(addProductToCart(id, size, qty));
    setOpen(true);
    // history.push(`/cart/${id}?size=${size||"M"}?qty=${qty}`)
  };

  // const productSizeToCart = (size) => {
  //   dispatch(setProductSizeAction(size));
  // };

  const productQtyToCart = (qty) => {
    setQty(qty);
  };

  // Check if Product Size is Selected (Checked)
  const checkSizesChecked = () => {
    setIsChecked(true);
  };

  // Prevent Adding Product To cart if Size or Quantity weren't set

  const preventAddToCart = (e) => {
    !isChecked && setCartBtnClicked(true);
    e.preventDefault();
  };
  // Set Size for the product

  const selectProductSize = (size) => {
    setSize(size);
  };
  // Set Quantity for the product

  // const selectProductQty = (qty) => {
  //   setQty(qty)
  // }

  // console.log(size)
  // console.log(qty)

  // console.log(isChecked)

  // let disabled = isChecked

  // console.log(cartBtnClicked)

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  setTimeout(handleClose, 7000) // Close the Modal after `7` Seconds from submit
  // let ItemsInCart;
  // const arr = JSON.parse(localStorage.getItem("cartProducts"));
  // ItemsInCart= arr.length + " items"

  // console.log(cartProducts.length)

  const handleClickBtn = (item) => {
    // Handle View Bag (Cart) and Checkout (Checkout) Buttons
    history.push(item);
  };

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
            {/* Change radio btns into Buttons https://stackoverflow.com/questions/16242980/making-radio-buttons-look-like-buttons-instead */}
            {/* <div className={`product-extra-information__Sizes`}>
              {leproduct.Sizes && (
                <div>
                  <FormControl
                    className={`quantity_product_cart`}
                    style={{ minWidth: "100%" }}
                  >
                    <InputLabel htmlFor="size_to_cart">Size</InputLabel>
                    <Select
                      fullWidth={true}
                      native
                      value={productFeature.size}
                      onChange={(e) => productSizeToCart(e.target.value)}
                      inputProps={{
                        name: "size",
                        id: "size_to_cart",
                      }}
                    >
                      {leproduct.Sizes.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}

                    </Select>
                  </FormControl>
                  {console.log(productFeature)}
                </div>
              )}
            </div> */}

            <div style={{ margin: "8px", paddingTop: "12px" }}>
              <span style={{ fontSize: "1.2rem" }}>Select Size</span>
            </div>
            <div
              className={`product-extra-information ${
                cartBtnClicked && !isChecked ? "showWarning" : ""
              }`}
            >
              {/* Change radio btns into Buttons https://stackoverflow.com/questions/16242980/making-radio-buttons-look-like-buttons-instead */}
              {leproduct.Sizes &&
                leproduct.Sizes.map((size, index) => (
                  <div
                    key={size}
                    className={`product-size selection-radio-btn ${
                      cartBtnClicked && !isChecked ? "radioBtnWarning" : ""
                    }`}
                  >
                    <input
                      id={size}
                      onChange={(e) => {
                        // console.log(size);
                        return selectProductSize(size);
                      }}
                      onClick={() => checkSizesChecked()}
                      name="SKUandSize"
                      type="radio"
                      className={`sizeProduct radioInput`}
                    />
                    <label htmlFor={size} className={`radioSizeCSS radioLabel`}>
                      {size}
                    </label>
                  </div>
                ))}
            </div>
            <div>
              {cartBtnClicked && !isChecked ? (
                <div style={{ margin: "12px" }}>
                  <span style={{ color: "#d43f21", fontSize: "1.2rem" }}>
                    Please select a size.
                  </span>
                </div>
              ) : null}
            </div>
            {/* {console.log(productFeature)} */}
            <div className={`product__selections`}>
              {/* {leproduct.CountInStock > 0 && (
                <div>
                  <FormControl
                    className={`quantity_product_cart`}
                    style={{ minWidth: "100%" }}
                  >
                    <InputLabel htmlFor="quantity_to_cart">Quantity</InputLabel>
                    <Select
                      fullWidth={true}
                      native
                      value={qty}
                      onChange={(e) => productQtyToCart(e.target.value)}
                      inputProps={{
                        name: "quantity",
                        id: "quantity_to_cart",
                      }}
                    >
                      {leproduct.CountInStock &&
                        availableQuantity.map((q) => (
                          <option key={q + 1} value={q + 1}>
                            {q + 1}
                          </option>
                        ))}
                    </Select>
                  </FormControl>
                </div>
              )} */}
            </div>
            <div className={`product__addition`}>
              {leproduct.CountInStock > 0 ? (
                <>
                  <Button
                    // disabled = {!disabled}
                    onClick={(e) => {
                      !isChecked ? preventAddToCart(e) : addToCartHandler(id);
                    }}
                    className={`product_add_to_cart`}
                    basic
                    size="default"
                  >
                    Add To Bag
                  </Button>
                  <Modal
                    aria-labelledby={props.ariaLabelledBy}
                    aria-describedby={props.ariaDescribedBy}
                    className={`product-to-cart-modal`}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={styledBackdrop}
                    BackdropProps={{
                      timeout: 500,
                    }}
                  >
                    <Fade in={open}>
                      <div
                        className={`product-addition-verified-in-modal`}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <span>
                          <CheckCircleIcon
                            style={{
                              color: " rgba(9,121,9,1)",
                              paddingRight: "4px",
                              fontSize: "18px",
                            }}
                          />{" "}
                          Added To Bag
                        </span>
                        <CloseIcon
                          style={{
                            backgroundColor: "rgba(0,0,0,.1)",
                            borderRadius: "50%",
                            cursor: "pointer",
                          }}
                          onClick={handleClose}
                        />
                      </div>
                      <div className={`product-info-in-modal`}>
                        <div>
                          <img
                            className="cart-product-image"
                            id="add-to-cart-image-modal"
                            style={{
                              maxWidth: "100px",
                              maxHeight: "100%",
                              paddingRight: "10px",
                            }}
                            src={cartProducts.image}
                            alt={cartProducts.title}
                          />
                        </div>
                        <Grid item>
                          <Grid container>
                            <div
                              className="product_cart_info cart-product-title"
                              id="add-to-cart-modal"
                            >
                              {cartProducts.title}
                            </div>

                            <div
                              className="product_cart_info cart-product-description"
                              id="add-to-cart-description-modal"
                            >
                              {cartProducts.title}
                            </div>

                            <div
                              className="product_cart_info cart-product-price"
                              id="add-to-cart-price-modal"
                            >
                              <span>Price:{cartProducts.price}</span>
                            </div>

                            <div
                              className="product_cart_info cart-product-size"
                              id="add-to-cart-size-modal"
                            >
                              <span>Size: {cartProducts.size}</span>
                            </div>

                            {/* <div
                              className="product_cart_info cart-product-qty"
                              id="add-to-cart-qty-modal"
                            >
                              <span>Quantity: {cartProducts.qty}</span>
                            </div> */}
                          </Grid>
                        </Grid>
                      </div>
                      <Grid container className={`product-btns-in-modal`}>
                        <Grid item>
                          <button
                            onClick={() => handleClickBtn("/cart")}
                            style={{ cursor: "pointer" }}
                            className={`modal_btn view_bag_modal`}
                          >
                            View Bag
                          </button>
                        </Grid>
                        <Grid item>
                          <button
                            onClick={() => handleClickBtn("/shipping")}
                            style={{ cursor: "pointer" }}
                            className={`modal_btn checkout_modal`}
                          >
                            Checkout
                          </button>
                        </Grid>
                      </Grid>
                    </Fade>
                  </Modal>
                </>
              ) : (
                <Button
                  // onClick={() => props.addToCart("ShoesFromNike")}
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
