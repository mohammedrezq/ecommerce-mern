import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Grid,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import ShippingForm from "./ShippingForm";
import PaymentForm from "./PaymentForm";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    textTransform: "uppercase",
    fontWeight: theme.typography.fontWeightBold,
  },
  AccordionHeading: {
    backgroundColor: "#111",
    color: "white",
  },
}));

export default function ShippingPage() {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  const AddAccordionExpanded = () => {
    setExpanded((prevState) => !prevState );
  };
  const RemoveAccordionExpanded = () => {
    setExpanded(false);
  };

  return (
    <>
    <Grid container direction="row" justify="center" alignItems="center">
      <h1 style={{ fontFamily: `roboto, "Helvetica Neue", sans-serif`, fontWeight:"100", fontSize:"34px", textTransform:"uppercase" , lineHeight:"1.4", letterSpacing: "0.5"}}>Checkout</h1>
    </Grid>
    <Grid container direction="row"
    justify="space-evenly"
    alignItems="center">
      <Grid item xs={8}>
        <Grid container>
          <Grid item sm={12} md={12}>
            <div className={classes.root}>
              <Accordion
                id={`shipping`}
                expanded={true}
                // onClick={AddAccordionExpanded}
              >
                <AccordionSummary
                  className={classes.AccordionHeading}
                  //   expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    1. Delivery Options
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <ShippingForm />
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
          {/* <Grid item sm={12} md={4}>
            <div>Order</div>
          </Grid> */}
        </Grid>
      </Grid>
    </Grid>
    </>
  );
}
