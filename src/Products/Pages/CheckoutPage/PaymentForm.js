import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { savePaymentMethod } from "../../../Store/Actions/cartActions";

import paymentMethods from "../../../Shared/Assets/PaymentMethods";
import FormikControl from "../../../Shared/FormElements/FormikControl";

import "./paymentMethod.css";

const PaymentForm = () => {
  const productToCart = useSelector((state) => state.addProductToCart); // from Store combine reduers
  console.log(productToCart);
  const { shippingAddress, paymentMethod } = productToCart;

  const history = useHistory();
  console.log(paymentMethod);

  let ThePaymentMethod = JSON.parse(localStorage.getItem("paymentMethod")); // Get the Payment Method from LocalStorage 


  const dispatch = useDispatch();

  let initialValues;
  if (ThePaymentMethod) {
    initialValues = {
      PaymentMethod: ThePaymentMethod.PaymentMethod || "",
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
    history.push("/checkout/#orderreview");
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
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
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default PaymentForm;
