import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Grid } from "@material-ui/core";

import { saveShippingAddress } from "../../../Store/Actions/cartActions";

import Countries from "../../../Shared/Assets/Countries";
import FormikControl from "../../../Shared/FormElements/FormikControl";
import "./ShippingForm.css";

const ShippingForm = () => {
  const productToCart = useSelector((state) => state.addProductToCart); // from Store combine reduers
  const { shippingAddress } = productToCart;


  let TheShippingAddress = JSON.parse(localStorage.getItem("shippingAddress")); // Get the Shipping Address from LocalStorage
  const dispatch = useDispatch();

  const history = useHistory();

  const continueToPayment = () => {
    history.push("/payment")
  }

  let initialValues;

  if (TheShippingAddress) {
    initialValues = {
      firstName: TheShippingAddress.firstName,
      lastName: TheShippingAddress.lastName,
      Address: TheShippingAddress.Address,
      City: TheShippingAddress.City,
      Country: TheShippingAddress.Country,
      PostalCode: TheShippingAddress.PostalCode,
      Email: TheShippingAddress.Email,
      PhoneNumber: TheShippingAddress.PhoneNumber,
    };
  } else if (shippingAddress !== null || undefined || "") {
    initialValues = {
      firstName: "",
      lastName: "",
      Address: "",
      City: "",
      Country: "US",
      PostalCode: "",
      Email: "",
      PhoneNumber: "",
    };
  }

  // Check Phone Number
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Please eneter a valid firstname")
      .min(2)
      .max(100),
    lastName: Yup.string()
      .required("Please enter a valid lastname")
      .min(2)
      .max(100),
    Address: Yup.string()
      .required("Please eneter a valid address")
      .min(2)
      .max(140),
    City: Yup.string().required("Please enter a valid city").min(2),
    Country: Yup.string().required(),
    PostalCode: Yup.string().required("Please enter a valid ZIP code."),
    Email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Email is required"),
    PhoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  });

  const onSubmit = (values, isSubmitting) => {
    dispatch(
      saveShippingAddress({
        firstName: values.firstName,
        lastName: values.lastName,
        Address: values.Address,
        City: values.City,
        Country: values.Country,
        PostalCode: values.PostalCode,
        Email: values.Email,
        PhoneNumber: values.PhoneNumber,
      })
    );
    continueToPayment();
    isSubmitting(true);
    isSubmitting(false);
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
              <Grid className="space_top" container direction="row">
                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="materialInput"
                    type="text"
                    fullWidth
                    autoComplete="given-name"
                    label="First Name"
                    name="firstName"
                    variant="outlined"
                    // size="medium"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="materialInput"
                    type="text"
                    fullWidth
                    autoComplete="given-name"
                    label="Last Name"
                    name="lastName"
                    variant="outlined"
                    // size="medium"
                  />
                </Grid>
              </Grid>
              <Grid className="space_top" container direction="row">
                <Grid item xs={12} md={12}>
                  <FormikControl
                    control="materialInput"
                    type="text"
                    fullWidth
                    autoComplete="address"
                    label="Address"
                    name="Address"
                    variant="outlined"
                    // size="medium"
                  />
                </Grid>
              </Grid>
              <Grid className="space_top" container direction="row">
                <Grid item xs={12} md={4}>
                  <FormikControl
                    control="materialInput"
                    type="text"
                    fullWidth
                    autoComplete="city-name"
                    label="City"
                    name="City"
                    variant="outlined"
                    size="medium"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormikControl
                    fullWidth
                    className="FormElement"
                    control="materialSelectCountry"
                    label="Country/Region"
                    name="Country"
                    variant="outlined"
                    helperText="Select a Country"
                    options={Countries}
                    size="medium"
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormikControl
                    control="materialInput"
                    type="text"
                    fullWidth
                    autoComplete="postal-code"
                    label="Postal Code"
                    name="PostalCode"
                    variant="outlined"
                    size="medium"
                  />
                </Grid>
              </Grid>
              <Grid className="space_top" container direction="row">
                <Grid item xs={12} md={6}>
                  <FormikControl
                    fullWidth
                    control="materialInput"
                    type="email"
                    label="Email"
                    name="Email"
                    variant="outlined"
                    size="medium"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <FormikControl
                    control="materialInput"
                    type="text"
                    fullWidth
                    label="Phone Number"
                    name="PhoneNumber"
                    variant="outlined"
                    size="medium"
                  />
                </Grid>
              </Grid>
              <Grid className="space_top" container direction="row">
                <Grid item xs={12}>
                  <button className="shipping_form_sbt_btn" type="submit">save & continue</button>
                </Grid>
              </Grid>
            </Form>
          </Grid>
        </Grid>
      )}
    </Formik>
  );
};

export default ShippingForm;
