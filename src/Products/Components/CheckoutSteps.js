import React from "react";
import { Link } from "react-router-dom";

import { Grid } from "@material-ui/core";

import './CheckoutSteps.css';

const CheckoutSteps = ({ step1, step2, step3 }) => {
  return (
    <Grid container style={{padding:"20px"}} direction="row" justify="space-evenly" alignItems="center">
      <Grid item>
        {step1 ? <Link className="checkoutStepsActive" to="/shipping">Shipping</Link> : <Link className="checkoutStepsDisabled" onClick={(e)=>e.preventDefault()} to="/shipping">shipping</Link>}
      </Grid>
      <Grid item>
        {step2 ? <Link className="checkoutStepsActive" to="/payment">Payment</Link> : <Link className="checkoutStepsDisabled" onClick={(e)=>e.preventDefault()} to="/payment">Payment</Link>}
      </Grid>
      <Grid item>
        {step3 ? <Link className="checkoutStepsActive" to="/placeorder">Place Order</Link> : <Link className="checkoutStepsDisabled" onClick={(e)=>e.preventDefault()} to="/placeorder">Place Order</Link>}
      </Grid>
    </Grid>
  );
};

export default CheckoutSteps;
