import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// import { savePaymentMethod } from "../../../Store/Actions/cartActions";
import CheckoutSteps from "../../Components/CheckoutSteps";
import Message from "../../../Shared/UIElements/Message";
// import "./paymentMethod.css";
import "./PlaceOrderPage.css";
import HrElemnent from "../../../Shared/UIElements/HrElement";
import { createOrder } from "../../../Store/Actions/orderActions";

const useStyles = makeStyles((theme) => ({
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

const PlaceOrderPage = () => {
  const classes = useStyles();
  
  const dispatch = useDispatch();
  
  const history = useHistory();

  /* From LocalStorage */
  const theShippingAddress = JSON.parse(localStorage.getItem("shippingAddress"));
  console.log(theShippingAddress);
  const thePaymentMethod = JSON.parse(localStorage.getItem("paymentMethod"));
  const theCartProducts = JSON.parse(localStorage.getItem("cartProducts"));


  const SubTotal = theCartProducts.reduce((acc, item) => acc + item.qty * item.price, 0);
  const FixedSubTotal = SubTotal.toFixed(2);

  // const Shipping = SubTotal >= 300 ? 0 : ((SubTotal * 10 )/ 100);
  const Shipping = SubTotal >= 300 || SubTotal === 0 ? 0 : 25;
  const FixedShipping = Shipping.toFixed(2);

  const Taxes = (SubTotal * 14) / 100;
  const FixedTaxes = Taxes.toFixed(2);

  // console.log(Shipping);

  const TheTotal = (SubTotal + Shipping + Taxes).toFixed(2);

  // console.log(TheTotal);

  // const handleCheckoutBtn = () => {
  //   return history.push("/shipping");
  // };

  const orderCreate = useSelector( state => state.orderCreate )
  const { order, success, error } = orderCreate; 

  useEffect(() => {
    if(success) {
      history.push(`/order/${order._id}`)
    }
    // eslint-disable-next-line
  }, [history, success])

  const placeOrderHandler=() => {
    dispatch(createOrder({
      orderItems: theCartProducts,
      shippingAddress: theShippingAddress,
      paymentMethod: thePaymentMethod.PaymentMethod,
      itemsPrice: FixedSubTotal,
      taxPrice: FixedTaxes,
      shippingPrice: FixedShipping,
      totalPrice: TheTotal
    }))
    // console.log("order")
  }


  /* From Redux */
  // const cart = useSelector((state) => state.addProductToCart);
  // console.log(cart);
  // console.log(cart.shippingAddress.firstName);
  // console.log(cart.cartProducts);

  // let theProducts = cart.cartProducts;



  return (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <h1
          style={{
            fontFamily: `roboto, "Helvetica Neue", sans-serif`,
            fontWeight: "100",
            fontSize: "34px",
            textTransform: "uppercase",
            lineHeight: "1.4",
            letterSpacing: "0.5",
          }}
        >
          Checkout
        </h1>
      </Grid>
      <CheckoutSteps step1 step2 step3 />
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={12} sm={10}>
          <Grid container>
            <Grid item xs={12} md={6} lg={8}>
              <Grid container  direction="row" justify="center" alignItems="center">
                <Grid item xs={12} sm={12} md={12}>
                  <div className="Address_Info_placeorder">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h2>Address Info</h2>
                      <Link to="/shipping">Edit</Link>
                    </div>
                    <div>{theShippingAddress.firstName}</div>
                    <div>{theShippingAddress.lastName}</div>
                    <div>{theShippingAddress.Address}</div>
                    <div>{theShippingAddress.City}</div>
                    <div>{theShippingAddress.Country}</div>
                    <div>{theShippingAddress.PostalCode}</div>
                    <div>{theShippingAddress.Email}</div>
                    <div>{theShippingAddress.PhoneNumber}</div>
                  </div>
                  <div className="Address_Info_placeorder">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <h2>Payment Method</h2>
                      <Link to="/payment">Edit</Link>
                    </div>
                    <div style={{ textTransform: "uppercase" }}>
                      {thePaymentMethod.PaymentMethod}{ thePaymentMethod.PaymentMethod === "paypal" ? <img
                          style={{
                            width: "70px",
                            height: "100%",
                            marginBottom: "-15px",
                            paddingLeft: "15px",
                          }}
                          src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_74x46.jpg"
                          alt="paypal"
                        />
                      : null}
                    </div>
                    {/* <div style={{ textTransform: "uppercase" }}>
                      {cart.paymentMethod.PaymentMethod}{" "}
                      {cart.paymentMethod.PaymentMethod === "paypal" ? (
                        <img
                          style={{
                            width: "70px",
                            height: "100%",
                            marginBottom: "-15px",
                            paddingLeft: "15px",
                          }}
                          src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_74x46.jpg"
                          alt="paypal"
                        />
                      ) : null}
                    </div> */}
                  </div>
                  <div>
                  {error && <Message severity="error">{error}</Message>}
                  </div>
                  <div className="order__container">
                  <button className={`order__btn ${theCartProducts.length === 0 && "btn__disabled"}`} onClick={placeOrderHandler} disabled={theCartProducts.length === 0}>order now</button>
                  </div>

                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Grid container  direction="row" justify="center" alignItems="center">
                <Grid  item xs={12} sm={12} md={12}>
                <div className="Order_Items_placeorder">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        background:"#e5e5e5",
                        padding: "0 16px",
                        maxHeight: "50px",
                      }}
                    >
                      <h2 style={{ fontSize: "1.3rem", textTransform: "uppercase", fontFamily: "fantasy, Helvatica Neu, sans-serif", fontWeight:"100"}}>In Your Bag</h2>
                      <Link to="/cart">Edit</Link>
                    </div>
                    <div  style={{ borderRight: "1px solid #ccc", borderLeft: "1px solid #ccc", paddingTop: "20px"}}>
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
                    style={{ color: "rgb(17,17,17)", borderBottom: "1px solid #ccc" }}
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
                  </div>
                      {/* <HrElemnent color="#ccc" width="100%" height="1px" border="0"/> */}
                    {theCartProducts && theCartProducts.length === 0 ? (
                      <Message>
                        Your Cart is empty go back to{" "}
                        <Link to="/">Products Page</Link>
                      </Message>
                    ) : (
                      theCartProducts.map((item, index) => {
                        return (
                          <div key={item+index} style={{ borderRight: "1px solid #ccc", borderLeft: "1px solid #ccc"}}>
                          <Grid container key={item+index} style={{ padding: "8px", borderBottom:"0.1px solid #ccc"}}>
                          <Grid item xs={4} sm={3} md={3}>
                            <figure className="item__image"  style={{paddingRight:"5px"}}>
                              <Link to={`/product/${item.product}`}>
                                <img className="product_img_placeOrder" src={item.image} alt={item.title} />
                              </Link>
                            </figure>
                          </Grid>
                          <Grid item xs={8} sm={9} md={9}>
                            <Grid container>
                              <Grid style={{marginLeft: "12px"}} item sm={8}>
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
                                    Size: {item.size}
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
                                        Quantity: {item.qty}
                                      </span>
                                  
                                    </span>
                                  </span>
                                </div>
                              </Grid>
                              <Grid item xs={12}>
                                <div
                                  className={`cartItems--Cart cartItem__Price`}
                                  style={{marginLeft: "12px"}}
                                >
                                  <span
                                    style={{
                                      fontSize: "12px",
                                      marginRight: ".5rem",
                                      // background: "greenyellow",
                                    }}
                                  >
                                    Qty:{item.qty} @ ${item.price}{" "}
                                  </span>
                                  <span>
                                    $
                                    {Number(`${item.qty * item.price}`).toFixed(
                                      2
                                    )}
                                  </span>
                                </div>
                              </Grid>
                    
                            </Grid>
                          </Grid>
                        </Grid>
                        </div>
                        );
                      })
                    )}
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default PlaceOrderPage;
