import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import { PayPalButton } from  "react-paypal-button-v2";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


import Message from "../../../Shared/UIElements/Message";
import Spinner from "../../../Shared/UIElements/Spinner";
import "./OrderPage.css";
import HrElement from "../../../Shared/UIElements/HrElement";
import { getOrderDetails, payOrder, orderReset, orderDeliverReset, deliverOrder } from "../../../Store/Actions/orderActions";
import Button from "../../../Shared/UIElements/Button";

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

const OrderPage = () => {
  const classes = useStyles();

  const [sdkReady, setSdkReady] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const params = useParams();

  const orderId = params.oid; // :oid is the order id set on App.js for order ID

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading:loadingPay, success:successPay } = orderPay;

  const orderDeliver = useSelector((state) => state.orderDeliver);
  const { loading:loadingDeliver, success:successDeliver } = orderDeliver;

  useEffect(() => {

    if(!userInfo) {
      history.push("/login")
    }

    const addPayPalScript = async() => {
      const { data: clientId } = await axios.get(process.env.REACT_APP_BACKEND_URL + "/config/paypal");

      const script = document.createElement('script');
      script.type= "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }

    if(!order || successPay || successDeliver ) {
      dispatch(orderReset()) // Dispatch order Paid Reset
      dispatch(orderDeliverReset()) // Dispatch order Deliver Reset
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if(!window.paypal) {
        addPayPalScript()
      } else {
        setSdkReady(true)
      }
    }

  }, [dispatch, orderId, successPay, successDeliver, order, history, userInfo]);


  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(orderId, paymentResult))
  }


  const deliverHandler = () => {
    dispatch(deliverOrder(order))
  }

  return loading ? (
    <Spinner />
  ) : error ? (
    <Message severity="error">{error}</Message>
  ) : (
    <>
      <Grid container direction="row" justify="center" alignItems="center">
        <h1>
          <div className="orderId_orderPage">
            Order ID:{" "}
            <span style={{ fontFamily: "monospace   " }}>{order.id}</span>
          </div>
        </h1>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={12} sm={10}>
          <Grid container>
            <Grid item xs={12} md={6} lg={8}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
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
                      {/* <Link to="/shipping">Edit</Link> */}
                    </div>
                    <div>
                      <span style={{ fontWeight: "900" }}>Given Name: </span>{" "}
                      {order.user.firstName}
                    </div>
                    <div>
                      <span style={{ fontWeight: "900" }}>Last Name: </span>{" "}
                      {order.user.lastName}
                    </div>
                    <div>
                      <span style={{ fontWeight: "900" }}>Address: </span>
                      {order.shippingAddress.Address}
                    </div>
                    <div>
                      <span style={{ fontWeight: "900" }}>City: </span>
                      {order.shippingAddress.City}
                    </div>
                    <div>
                      <span style={{ fontWeight: "900" }}>Country: </span>
                      {order.shippingAddress.Country}
                    </div>
                    <div>
                      <span style={{ fontWeight: "900" }}>Postal Code: </span>
                      {order.shippingAddress.PostalCode}
                    </div>
                    <div>
                      <span style={{ fontWeight: "900" }}>Email: </span>
                      {order.shippingAddress.Email}
                    </div>
                    <div>
                      <span style={{ fontWeight: "900" }}>Phone Number: </span>
                      {order.shippingAddress.PhoneNumber}
                    </div>
                    <div className="deliveredStatus">
                      {order.isDelivered ? (
                        <Message severity="success">
                          Delivered on {order.deliveredAt}
                        </Message>
                      ) : (
                        <Message severity="error">Not Delivered</Message>
                      )}
                    </div>
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
                      {/* <Link to="/payment">Edit</Link> */}
                    </div>
                    <div style={{ textTransform: "uppercase" }}>
                      {order.paymentMethod}
                      {order.paymentMethod === "paypal" ? (
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
                    <div className="paymentStatus">
                      {order.isPaid ? (
                        <Message severity="success">
                          Paid on {order.paidAt}
                        </Message>
                      ) : (
                        <Message severity="error">Not Paid</Message>
                      )}
                    </div>
                  </div>
                  <div>
                    {error && <Message severity="error">{error}</Message>}
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={12} sm={12} md={12}>
                  <div className="Order_Items_placeorder">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        background: "#e5e5e5",
                        padding: "0 16px",
                        maxHeight: "50px",
                      }}
                    >
                      <h2
                        style={{
                          fontSize: "1.3rem",
                          textTransform: "uppercase",
                          fontFamily: "fantasy, Helvatica Neu, sans-serif",
                          fontWeight: "100",
                        }}
                      >
                        Your Order Details
                      </h2>
                      {/* <Link to="/cart">Edit</Link> */}
                    </div>
                    <div
                      style={{
                        borderRight: "1px solid #ccc",
                        borderLeft: "1px solid #ccc",
                        paddingTop: "20px",
                      }}
                    >
                      <Grid
                        container
                        className={`${classes.aligningSummary} cartSummary__Item`}
                      >
                        <Grid className={classes.cartSummary} item sm={9}>
                          <div>Subtotal: </div>
                        </Grid>
                        <Grid item sm={3} className={`Summary__Cart__Nums`}>
                          <span>${order.itemsPrice}</span>
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
                          <span>${order.shippingPrice}</span>
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
                          <span>${order.taxPrice}</span>
                        </Grid>
                      </Grid>
                      {/* <hr className={classes.cartSummaryHr} style={{ margin: "12px"}}/> */}
                      <HrElement
                        color="rgba(0,0,0,0.15)"
                        height="1px"
                        width="100%"
                        border="0"
                      />
                      <Grid
                        container
                        className={classes.aligningSummary}
                        style={{
                          color: "rgb(17,17,17)",
                          borderBottom: "1px solid #ccc",
                        }}
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
                          <span>{order.totalPrice}</span>
                        </Grid>
                      </Grid>
                          {!order.isPaid && (
                            <Grid container>
                              <Grid item sm={12}>
                                {/* {console.log(loadingPay)} */}
                                {loadingPay && <Spinner />}
                                {!sdkReady ? <Spinner />: (
                                  <PayPalButton amount={order.totalPrice} onSuccess={successPaymentHandler} />
                                )}
                              </Grid>
                            </Grid>
                            )}
                            {loadingDeliver && <Spinner />}
                            {userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                              <Grid container>
                              <Grid item sm={12}>
                               <Button type="button" onClick={deliverHandler} style={{backgroundColor: "#111", color: "#fff", border: "1px solid #111", width: "100%" }} >
                                 Mark As Delivered
                               </Button>
                              </Grid>
                            </Grid>
                            )}
                    </div>
                            {/* {console.log(loadingPay)} */}
                    {/* <HrElemnent color="#ccc" width="100%" height="1px" border="0"/> */}
                    {order.orderItems && order.orderItems.length === 0 ? (
                      <Message>
                        Order is empty go back to{" "}
                        <Link to="/">Products Page</Link>
                      </Message>
                    ) : (
                      order.orderItems.map((item, index) => {
                        return (
                          <div
                            key={item + index}
                            style={{
                              borderRight: "1px solid #ccc",
                              borderLeft: "1px solid #ccc",
                            }}
                          >
                            <Grid
                              container
                              key={item + index}
                              style={{
                                padding: "8px",
                                borderBottom: "0.1px solid #ccc",
                              }}
                            >
                              <Grid item xs={4} sm={3} md={3}>
                                <figure
                                  className="item__image"
                                  style={{ paddingRight: "5px" }}
                                >
                                  <Link to={`/product/${item.product}`}>
                                    <img
                                      className="product_img_placeOrder"
                                      src={item.image}
                                      alt={item.title}
                                    />
                                  </Link>
                                </figure>
                              </Grid>
                              <Grid item xs={8} sm={9} md={9}>
                                <Grid container>
                                  <Grid
                                    style={{ marginLeft: "12px" }}
                                    item
                                    sm={8}
                                  >
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
                                      style={{ marginLeft: "12px" }}
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
                                        {Number(
                                          `${item.qty * item.price}`
                                        ).toFixed(2)}
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

export default OrderPage;
