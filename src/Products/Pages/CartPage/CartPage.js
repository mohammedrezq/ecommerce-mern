import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";

import Message from "../../../Shared/UIElements/Message";
import Spinner from "../../../Shared/UIElements/Spinner";
import { addToCart, removeProductFromCart } from "../../../Store/Actions/cartActions";
import { Grid } from "@material-ui/core";

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
    padding: "24px 8px",
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

  // const productId = useParams().id;
  // console.log(productId);

    const dispatch = useDispatch()

  // const qty = Number(useLocation().search.split("?")[2].split("=")[1]);
  // const size = useLocation().search.split("?")[1].split("=")[1];
  // console.log(qty);
  // console.log(size);
  // console.log('CART PAGE PROPS', props);

  // const cart = useSelector(state => state.cart);
  // const { cartItems } = cart;

  const productToCart = useSelector((state) => state.addProductToCart); // from Store combine reduers
  // console.log(productToCart)
  const { err, loadingStatus, cartProducts } = productToCart;

  // console.log(cartProducts);

  let arr = [];
  arr = JSON.parse(localStorage.getItem("cartProducts"));
  if (arr === null || undefined) arr = [];
  localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  localStorage.setItem("cartProducts", JSON.stringify(arr)); // save to the LocalStorage

  console.log(arr);

  // const productArr = arr.map((p) => p);
  // const cartProductItems = arr.map((x) => console.log(x));

  // console.log(cartProductItems)
  // console.log(cartProduct.title)
  // console.log(cartProduct.image)
  // console.log(cartProduct.price)
  // console.log(cartProduct.size)
  // console.log(cartProduct.qty)
  // const productItem = nr.map((item) => item); // all items in LocalStorage

  // console.log(productItem);

  // productItem.reverse();
  // console.log(productItem);

  const removeProductFromCartHandler = (id, size, qty, price) => {
    // console.log(id)
    // console.log(size)
    // console.log(qty)
    let arr = JSON.parse(localStorage.getItem("cartProducts")) || [];
    // console.log(arr)

    let i = arr.findIndex(item => item.product === id && item.size === size && item.qty === qty && item.price === price); // removing product based on its id & size & qty & price
    // console.log(i)

    // arr.filter(item => item.product !== id)
    // let filteredProducts = arr.filter(arr.product !== id)
    arr.splice(i, 1)
    localStorage.setItem("cartProducts", JSON.stringify(arr))
    dispatch(removeProductFromCart(id, size, qty, price))
    
    console.log("Product Removed!")
  } 

  //   let filtered;
  //   filtered = productItem.filter(
  //     (v, i, a) =>
  //       a.findIndex((t) => t.title === v.title && t.product === v.product) === i // title or product(id) or size etc
  //   );
  //   console.log(filtered);

  //   console.log(productItem.map((item) => item.title));
  //     const listOfTags = productItem,
  //     keys = ['title', 'product'],
  //     filtered = listOfTags.filter(
  //         (s => o =>
  //             (k => !s.has(k) && s.add(k))
  //             (keys.map(k => o[k]).join('|'))
  //         )
  //         (new Set)
  //     );

  // console.log(filtered);

  // const unique = [];

  // productItem.map(x => {
  //     console.log(x.title)
  //     return (
  //         unique.filter(a => {
  //             console.log(a.title)
  //             return (
  //             a.title !== x.title && a.product !== x.product
  //             )
  //         }
  //             ).length > 0 ? null : unique.push(x)
  //     )
  // }
  //     );

  // console.log(unique)


  // useEffect(() => {
  // if(productId);
  //     dispatch(addToCart(productId))
  // },[dispatch])

  return (
    <>
      {loadingStatus ? (
        <Spinner />
      ) : err ? (
        <Message>{err}</Message>
      ) : (
        <Grid container className={classes.containerPadding}>
          <Grid container className={classes.cartItemsPaddingTop}>
                {arr && arr.map((item, index) => (
            <Grid key={index} container className={classes.itemsWidth}>
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
                <Grid container>
                  <Grid item className={classes.cartItem}>
                    <Grid container>
                      <Grid item sm={3}>
                        <figure className="item__image">
                          <a>
                            <img src={item.image} />
                          </a>
                        </figure>
                      </Grid>
                      <Grid item sm={9}>
                        <Grid container>
                          <Grid item sm={8}>
                            <div>
                              {item.title}
                            </div>
                            <div>
                              {item.title}

                            </div>
                            <div><span style={{marginRight: "5px"}}>Size {item.size}</span><span style={{marginRight: "5px"}}>Quantity {item.qty}</span></div>
                          </Grid>
                          <Grid item sm={4}>
                            <div className={classes.cartItemPrice}>
                              Price ${item.price}
                            </div>
                          </Grid>
                          <Grid item sm={12}>
                            <ul
                              className={classes.productItemUnorderedList}
                              style={{ listStyle: "none" }}
                            >
                              <li
                                style={{
                                  display: "inline-block",
                                  marginRight: "16px",
                                }}
                              >
                                <button
                                  className={classes.productItemActions}
                                  style={{
                                    fontSize: "1rem",
                                    fontWeight: "100",
                                  }}
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
                                  onClick={() => removeProductFromCartHandler(item.product,item.size,item.qty, item.price)}
                                  className={classes.productItemActions}
                                  style={{
                                    fontSize: "1rem",
                                    fontWeight: "100",
                                  }}
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
              </Grid>
              <Grid item md={4} sm={12}>
                <Grid container>
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
                  <Grid className={classes.aligningSummary} item sm={12}>
                    <div>Do you have a Promo Code?</div>
                  </Grid>
                  <Grid container className={classes.aligningSummary}>
                    <Grid className={classes.cartSummary} item sm={9}>
                      <div>Subtotal: </div>
                    </Grid>
                    <Grid item sm={3}>
                      <span>$589.88</span>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.aligningSummary}>
                    <Grid className={classes.cartSummary} item sm={9}>
                      <div>Estimated Shipping & Handling: </div>
                    </Grid>
                    <Grid item sm={3}>
                      <span> $0.00</span>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.aligningSummary}>
                    <Grid className={classes.cartSummary} item sm={9}>
                      <div>Tax: </div>
                    </Grid>
                    <Grid item sm={3}>
                      <span>—</span>
                    </Grid>
                  </Grid>
                  {/* <hr className={classes.cartSummaryHr} style={{ margin: "12px"}}/> */}
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
                      item
                      sm={3}
                      style={{
                        fontFamily:
                          " FANTASY, Helvetica Neue, Helvetica, Arial, sans-serif",
                          fontSize: "0.9rem",
                      }}
                    >
                      $<span>589.88</span>
                    </Grid>
                  </Grid>
                  <HrElemnent
                    color="rgba(0,0,0,0.8)"
                    height=".7px"
                    width="100%"
                    border="0"
                  />
                </Grid>
              </Grid>
            </Grid>
                ))}
          </Grid>
          {/* CartPage: {productItem.length}
      <div>Price: </div>
      {productItem && productItem.map((item, i) => {
        return (
            <div key={i}>
        <div>{(item) && item.price}</div>
        <div>{(item) && item.size}</div>
        <div>{(item) && item.qty}</div>
        <div>{(item) && item.title}</div>
        <img src={(item) && item.image} />
        </div>
        )
      })} */}
        </Grid>
      )}
    </>
  );
};

export default CartPage;
