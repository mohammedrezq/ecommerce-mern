import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/* Redux */
import {
  listProductDetails,
  createProductReview,
} from "../../../Store/Actions/productsActions";
import { PRODUCT_CREATE_REVIEW_RESET } from "../../../Store/Actions/actionTypes";
import {
  addProductToCart,
} from "../../../Store/Actions/cartActions";

/* Material UI Components */
import {
  AccordionSummary,
  AccordionDetails,
  Typography,
  Accordion,
  Grid,
  Modal,
  Backdrop,
} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

import { withStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";
import { FaStar } from 'react-icons/fa';

import Button from "../../../Shared/UIElements/Button";
import "./ProductPage.css";
import Spinner from "../../../Shared/UIElements/Spinner";
import HrElement from "../../../Shared/UIElements/HrElement";
import Message from "../../../Shared/UIElements/Message";
import Fade from "../../../Shared/UIElements/Fade";

import Rating from "../../../Shared/UIElements/Rating";


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
  const [rating, setRating] = useState(0);
  const [TitleReview, setTitleReview] = useState("");
  const [CommentReview, setCommentReview] = useState("");
  const [hover, setHover] = useState(null);
  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const id = useParams().id;

  const dispatch = useDispatch();

  const productCreateReview = useSelector((state) => state.productCreateReview);
  const {
    error: errorProductReview,
    loading: loadingProductReview,
    success: successProductReview,
  } = productCreateReview;


  useEffect(() => {

    if(successProductReview) {
      setRating(0);
      setTitleReview("");
      setCommentReview("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }

    dispatch(listProductDetails(id));
  }, [dispatch, id, successProductReview]);

  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productToCart = useSelector((state) => state.addProductToCart); // from Store combine reduers
  const { cartProducts } = productToCart;

// console.log(product)
  const leproduct = product.product; // get product from the product from the payload!!!


  let history = useHistory();

  const addToCartHandler = (id) => {
    dispatch(addProductToCart(id, size, qty));
    setOpen(true);
  };


  // const productQtyToCart = (qty) => {
  //   setQty(qty);
  // };

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


  const handleClose = () => {
    setOpen(false);
  };

  setTimeout(handleClose, 7000); // Close the Modal after `7` Seconds from submit

  const handleClickBtn = (item) => {
    // Handle View Bag (Cart) and Checkout (Checkout) Buttons
    history.push(item);
  };


  const onTitleReveiwChange = (e) =>{
    setTitleReview(e.target.value);
  } 
  const onCommentReview = (e) =>{
    setCommentReview(e.target.value);
  } 

  const submitReviewHandler = (e) =>{
    e.preventDefault();
    dispatch(createProductReview(id, {
      title: TitleReview,
      comment: CommentReview,
      rating
    }))
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : error ? (
        <Message>{error}</Message>
      ) : (
        <Grid container>
          <Grid item sm={12} md={8}>
            <div className="product-images-container">
          <div className={`product-basic-information-2`}>
              <h2>{leproduct.Title}</h2>
              <h1>{leproduct.Title}</h1>
              <div>${leproduct.Price}</div>
            </div>
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
            </div>
          </Grid>
          <Grid item sm={12} md={4} className={`gird__item__4`}>
            <div className="productInfo_Details">
            <div className={`product-basic-information`}>
              <h2>{leproduct.Title}</h2>
              <h1>{leproduct.Title}</h1>
              <div>${leproduct.Price}</div>

            </div>

          <div className="product__Sizes_Selection">
            <div className="product__Sizes_Label">
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
 
            </div>
            <div className={`product__addition`}>
              {leproduct.CountInStock > 0 ? (
                <>
                  <Button
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
                    id="add-product-to-cart-modal"
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
                      <>
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
                      </>
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
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleAccordionChange("panel4")}
                style={{ margin: "0" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ margin: "0" }} />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                  style={{display: "flex", justifyContent: "space-between"}}
                >
                  <div style={{flex: "1", fontSize: "1.4rem", textAlign:"left"}}>Reviews ({leproduct.NumReviews})</div> <Rating  style={{flex: "1", textAlign:"right"}}
                value={leproduct.Rating} />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography component={"span"}>{leproduct.Reviews.length === 0 && (
                <Message severity="info">No Reviews</Message>
              )}
              {leproduct.Reviews.map((review, index) => {
                return (
                  <div key={index} className={`productReview review_${index+1}`}>
                    <span><strong>{`${review.firstName} ${review.lastName}`}</strong><Rating value={review.rating} /></span>
                <div>{review.createdAt.substring(0,10)}</div>
                    <strong>{review.title}</strong>
                    <div>{review.comment}</div>
                    <HrElement
                      color="rgba(0,0,0,0.15)"
                      height=".1px"
                      width="100%"
                      border="0"
                    />
                  </div>
                );
              })}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="product-reviews">
              <div>
                <h3>Write a Review</h3>
                {errorProductReview && (<Message severity="error">{errorProductReview}</Message>)}
                {userInfo ? (<div></div>): <Message>Please <Link to="/login" >Login</Link> to write a review</Message>}
                <form className="RatingForm" onSubmit={submitReviewHandler}>
                <div>
                  {[...Array(5)].map((star, index) => {
                      const ratingValue = index + 1;

                      return (
                          <label key={index*2}>
                          <input className="inputStarRating" type="radio" name="starRating" value={ratingValue} onClick={() => setRating(ratingValue)} />
                          <FaStar onMouseEnter={ () => {setHover(ratingValue)}} onMouseLeave={ () =>{setHover(null)}} color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} className="star" />
                          </label>
                      )
                  })}
              </div>
                <TextField id="review_title" label="Review Title" variant="outlined" fullWidth size="small" onChange={onTitleReveiwChange} value={TitleReview} />
                <TextField id="review_comment" label="Review Comment" variant="outlined" fullWidth size="small" multiline rows="3" onChange={onCommentReview} value={CommentReview} />

                  <Button style={{border: "#111", backgroundColor: "#111", width:"100%"}} type="submit" onClick={submitReviewHandler}>
                    {!loadingProductReview ? "Submit Review" : "Adding a Review..." }
                  </Button>
                </form>
              </div>
            </div>
            </div>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default ProductPage;
