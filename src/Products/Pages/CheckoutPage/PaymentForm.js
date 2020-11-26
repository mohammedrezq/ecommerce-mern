import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Grid } from "@material-ui/core";

import { savePaymentMethod } from "../../../Store/Actions/cartActions";

import paymentMethods from "../../../Shared/Assets/PaymentMethods";
import FormikControl from "../../../Shared/FormElements/FormikControl";

import "./paymentMethod.css";
import "./PaymentForm.css";

const PaymentForm = () => {
  const productToCart = useSelector((state) => state.addProductToCart); // from Store combine reduers
  console.log(productToCart);
  const { paymentMethod } = productToCart;

  const history = useHistory();

  const placeOrderPage = () => {
    history.push('/placeorder')
  }
  console.log(paymentMethod);

  let ThePaymentMethod = JSON.parse(localStorage.getItem("paymentMethod")); // Get the Payment Method from LocalStorage

  const dispatch = useDispatch();

  let initialValues;
  if (paymentMethod !== null || undefined || "") {
    initialValues = {
      PaymentMethod: "",
    };
  }

  if (ThePaymentMethod) {
    initialValues = {
      PaymentMethod: ThePaymentMethod.PaymentMethod,
    };
  } else if (paymentMethod !== null || undefined || "") {
    initialValues = {
      PaymentMethod: "",
    };
  }

  const validationSchema = Yup.object({
    PaymentMethod: Yup.string().required("Please select a payment method."),
  });

  const onSubmit = (values, isSubmitting) => {
    dispatch(
      savePaymentMethod({
        PaymentMethod: values.PaymentMethod,
      })
    );
    placeOrderPage()
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Grid container>
          <Grid item xs={12} sm={12}>
            <Form>
              <FormikControl
                fullWidth
                className="paymentMethods"
                classes="individualpayment"
                secondClass="paymentMethodItem"
                control="radio"
                label="Select Payment Method:"
                name="PaymentMethod"
                options={paymentMethods}
              />
              <button className="payment_form_sbt_btn space_top" type="submit">
                save & continue
              </button>
            </Form>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
};

export default PaymentForm;
