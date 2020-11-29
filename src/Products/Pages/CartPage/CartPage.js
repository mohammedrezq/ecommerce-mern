import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import Message from "../../../Shared/UIElements/Message";
import Spinner from "../../../Shared/UIElements/Spinner";
import {
  removeProductFromCart,
  updateQuantityFromCart,
} from "../../../Store/Actions/cartActions";
import { FormControl, Grid, Select } from "@material-ui/core";

import HrElemnent from "../../../Shared/UIElements/HrElement";
import "./CartPage.css";

const useStyles = makeStyles((theme) => ({
  containerPadding: {
    width: "100%",
    paddingLeft: "8px",
    paddingRight: "8px",
  },
  cartItemsPaddingTop: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    verticalAlign: "top",
    margin: "0px auto 40px",
    paddingTop: "40px",
  },
  itemsWidth: {
    width: "100%",
    maxWidth: "1100px",
  },
  cartItem: {
    boxShadow:
      "rgb(229, 229, 229) 0px 0px 0px 0px inset, rgb(229, 229, 229) 0px 0px 0px 0px inset, rgb(229, 229, 229) 0px -1px 0px 0px inset, rgb(229, 229, 229) 0px 0px 0px 0px inset",
    position: "relative",
    padding: "24px 0",
    display: "flex",
    width: "100%",
  },
  cartItemPrice: {
    verticalAlign: "top",
    textAlign: "right",
  },
  productItemActions: {
    display: "inline-block",
    verticalAlign: "top",
    whiteSpace: "nowrap",
    textAlign: "center",
    textDecoration: "none",
    background: "0px 0px",
    cursor: "pointer",
    transition: "all 0.2s ease 0s",
    boxShadow: "0px -1px 0px 0px inset",
    lineHeight: 1,
    padding: "4px 0px",
    color: "rgb(117, 117, 117)",
    border: "0",
  },
  productItemUnorderedList: {
    paddingLeft: "0",
  },
  cartSummary: {
    color: "rgb(17, 17, 17)",
    paddingRight: "8px",
  },
  aligningSummary: {
    paddingLeft: "12px",
    paddingRight: "12px",
    paddingBottom: "8px",
  },
  cartSummaryHr: {
    height: "1px",
    boxShadow: "inset 0 1px 0 0 #e5e5e5",
    borderWidth: " 0px 0px 1px",
    borderTopStyle: "initial",
    borderRightStyle: "initial",
    borderLeftStyle: "initial",
    borderTopColor: "initial",
    borderRightColor: "initial",
    borderLeftColor: "initial",
    borderImage: "initial",
    borderBottomStyle: "solid",
    borderBottomColor: "rgb(229, 229, 229)",
    marginBlockStart: "0px",
    marginBlockEnd: "0px",
    margin: "12px",
  },
}));

const CartPage = (props) => {
  const classes = useStyles();

  const history = useHistory();

  const dispatch = useDispatch();


  const productToCart = useSelector((state) => state.addProductToCart); // from Store combine reduers
  const { err, cartProducts } = productToCart;


  let arr = [];
  arr = JSON.parse(localStorage.getItem("cartProducts"));
  if (arr === null || undefined) arr = [];
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  localStorage.setItem("cartProducts", JSON.stringify(arr)); // save to the LocalStorage

  let productQty = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const removeProductFromCartHandler = (id, size, qty, price) => {
    let arr = JSON.parse(localStorage.getItem("cartProducts")) || [];

    let i = arr.findIndex(
      (item) =>
        item.product === id &&
        item.size === size &&
        item.qty === qty &&
        item.price === price
    ); // removing product based on its id & size & qty & price

    arr.splice(i, 1);
    localStorage.setItem("cartProducts", JSON.stringify(arr));
    dispatch(removeProductFromCart(id, size, qty, price));

  };
  const updateProductQuantityFromCartHandler = (id, size, qty, price) => {
  
    let arr = JSON.parse(localStorage.getItem("cartProducts"));

    let i = arr.findIndex(
      (item) => item.product === id && item.size === size
    ); // removing product based on its id & size & qty & price

    arr[i].qty = qty;
    localStorage.setItem("cartProducts", JSON.stringify(arr));
    dispatch(updateQuantityFromCart(id, size, qty));

  };

  const SubTotal = arr.reduce((acc, item) => acc + item.qty * item.price, 0);
  const FixedSubTotal = SubTotal.toFixed(2);

  const Shipping = SubTotal >= 300 || SubTotal === 0 ? 0 : 25;
  const FixedShipping = Shipping.toFixed(2);

  const Taxes = (SubTotal * 14) / 100;
  const FixedTaxes = Taxes.toFixed(2);


  const TheTotal = (SubTotal + Shipping + Taxes).toFixed(2);


  const handleCheckoutBtn = () => {
    return history.push("/shipping");
  };

  return (
    <>
      {!cartProducts ? (
        <Spinner />
      ) : err ? (
        <Message>{err}</Message>
      ) : (
        <Grid container className={classes.containerPadding}>
          <Grid container className={classes.cartItemsPaddingTop}>
            <Grid container className={classes.itemsWidth}>
              <Grid item md={8} sm={12}>
                <h2
                  style={{
                    fontFamily: "Tahoma",
                    display: "block",
                    fontWeight: "100",
                  }}
                >
                  Bag
                </h2>
                {arr.length === 0 ? (
                  <>
                    <span>
                      There are no items in your bag.
                      <Link
                        style={{
                          marginLeft: "4px",
                          textDecoration: "inherit",
                          color: "inherit",
                          fontWeight: "bold",
                        }}
                        to="/"
                      >
                        Go Back To Shop
                      </Link>
                    </span>
                  </>
                ) : (
                  arr &&
                  arr.map((item, index) => (
                    <Grid id={item.title+item.size+index} key={index} container> {/* replace(/\s/g, '') removes spaces in string : https://stackoverflow.com/questions/5963182/how-to-remove-spaces-from-a-string-using-javascript */}
                      <Grid item className={classes.cartItem}>
                        <Grid container>
                          <Grid item xs={4} sm={3} md={3}>
                            <figure className="item__image">
                              <Link to={`/product/${item.product}`}>
                                <img src={item.image} alt={item.title} />
                              </Link>
                            </figure>
                          </Grid>
                          <Grid item xs={8} sm={9} md={9}>
                            <Grid container>
                              <Grid item sm={8}>
                                <div className={`cartItems--Cart`}>
                                  {item.title}
                                </div>
                                <div className={`cartItems--Cart`}>
                                  {item.title}
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
                                  className={`cartItems--Cart`}
                                >
                                  <span style={{ marginRight: "4px" }}>
                                    Size {item.size}
                                  </span>
                                  <span style={{ margin: "0 5px" }}>|</span>
                                  <span>
                                    <span
                                      style={{
                                        display: "flex",
                                        flexDirection: "row",
                                      }}
                                    >
                                      <span style={{ margin: " 0 4px" }}>
                                        Quantity
                                      </span>
                                      <div
                                        style={{
                                          display: "flex",
                                          margin: "-5px 4px",
                                        }}
                                      >
                                        <FormControl
                                          className={`quantity_product_cart`}
                                          style={{ minWidth: "100%" }}
                                        >
                                          <Select
                                            fullWidth={true}
                                            native
                                            value={item.qty}
                                            onChange={(e) =>
                                              updateProductQuantityFromCartHandler(
                                                item.product,
                                                item.size,
                                                e.target.value
                                              )
                                            }
                                            inputProps={{
                                              name: "quantity",
                                              id: "quantity_to_cart",
                                            }}
                                          >
                                            {productQty.map((q) => (
                                              <option key={q + 1} value={q + 1}>
                                                {q + 1}
                                              </option>
                                            ))}
                                          </Select>
                                        </FormControl>
                                      </div>
                                    </span>
                                  </span>
                                </div>
                              </Grid>
                              <Grid item sm={4}>
                                <div
                                  className={`${classes.cartItemPrice} cartItems--Cart cartItem__Price`}
                                >
                                  <span>
                                    $
                                    {Number(`${item.qty * item.price}`).toFixed(
                                      2
                                    )}
                                  </span>
                                </div>
                              </Grid>
                              <Grid item sm={12}>
                                <ul
                                  className={`${classes.productItemUnorderedList} CartItems--Actions`}
                                  style={{ listStyle: "none" }}
                                >
                                  <li
                                    style={{
                                      display: "inline-block",
                                      marginRight: "16px",
                                    }}
                                  >
                                    <button
                                      className={`${classes.productItemActions} btn__cart__item`}
                                    >
                                      Move to Favorites
                                    </button>
                                  </li>
                                  <li
                                    style={{
                                      display: "inline-block",
                                      marginRight: "16px",
                                    }}
                                  >
                                    <button
                                      onClick={() =>
                                        removeProductFromCartHandler(
                                          item.product,
                                          item.size,
                                          item.qty,
                                          item.price
                                        )
                                      }
                                      className={`${classes.productItemActions} btn__cart__item`}                                      
                                    >
                                      Remove
                                    </button>
                                  </li>
                                </ul>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))
                )}
              </Grid>
              <Grid item md={4} sm={12}>
                <Grid container className={`summary__box--container`}>
                  <Grid
                    className={classes.aligningSummary}
                    item
                    sm={12}
                    style={{
                      marginBottom: "12px",
                      fontSize: "1.5rem",
                      color: "rgb(17,17,17)",
                    }}
                  >
                    <div>Summary</div>
                  </Grid>
                  <Grid
                    container
                    className={`${classes.aligningSummary} cartSummary__Item`}
                  >
                    <Grid className={classes.cartSummary} item sm={9}>
                      <div>Subtotal: </div>
                    </Grid>
                    <Grid item sm={3} className={`Summary__Cart__Nums`}>
                      <span>${FixedSubTotal}</span>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    className={`${classes.aligningSummary} cartSummary__Item`}
                  >
                    <Grid className={classes.cartSummary} item sm={9}>
                      <div>Estimated Shipping & Handling: </div>
                    </Grid>
                    <Grid item sm={3} className={`Summary__Cart__Nums`}>
                      <span>${FixedShipping}</span>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    className={`${classes.aligningSummary} cartSummary__Item`}
                  >
                    <Grid className={classes.cartSummary} item sm={9}>
                      <div>Tax: </div>
                    </Grid>
                    <Grid item sm={3} className={`Summary__Cart__Nums`}>
                      <span>${FixedTaxes}</span>
                    </Grid>
                  </Grid>
                  <HrElemnent
                    color="rgba(0,0,0,0.15)"
                    height="1px"
                    width="100%"
                    border="0"
                  />
                  <Grid
                    container
                    className={classes.aligningSummary}
                    style={{ color: "rgb(17,17,17)" }}
                  >
                    <Grid item sm={9}>
                      <div>Total: </div>
                    </Grid>
                    <Grid
                      className={`Summary__Cart__Nums`}
                      item
                      sm={3}
                      style={{
                        fontFamily:
                          " FANTASY, Helvetica Neue, Helvetica, Arial, sans-serif",
                        fontSize: "0.9rem",
                      }}
                    >
                      <span>$</span>
                      <span>{TheTotal}</span>
                    </Grid>
                  </Grid>
                  <HrElemnent
                    color="rgba(0,0,0,0.8)"
                    height=".7px"
                    width="100%"
                    border="0"
                  />
                  <Grid item xs={12} sm={12}>
                    <button
                      onClick={handleCheckoutBtn}
                      className={`checkout__btn`}
                    >
                      Checkout
                    </button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default CartPage;
