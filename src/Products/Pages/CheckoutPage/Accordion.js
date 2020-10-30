import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CheckoutForm from "./CheckoutForm";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "65%",
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

export default function SimpleAccordion() {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles();

  const AddAccordionExpanded = () => {
    setExpanded(true);
  };
  const RemoveAccordionExpanded = () => {
    setExpanded(false);
  };

  return (
    <div className={classes.root}>
      <Accordion id={`shipping`} expanded={true} onClick={AddAccordionExpanded}>
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
          <CheckoutForm />
        </AccordionDetails>
      </Accordion>
      <Accordion id="payment" onClick={AddAccordionExpanded}>
        <AccordionSummary
          className={classes.AccordionHeading}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>2. PAYMENT</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>Hello World</div>

        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>
            Disabled Accordion
          </Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
