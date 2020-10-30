import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { saveShippingAddress } from "../../../Store/Actions/cartActions";

import Countries from "../../../Shared/Assets/Countries";
import FormikControl from "../../../Shared/FormElements/FormikControl";

const CheckoutForm = () => {
  const productToCart = useSelector((state) => state.addProductToCart); // from Store combine reduers
  console.log(productToCart);
  const { shippingAddress } = productToCart;

  console.log(shippingAddress);

  const dispatch = useDispatch();

  const history = useHistory();

  const initialValues = {
    firstName: shippingAddress.firstName || "",
    lastName: shippingAddress.lastName || "",
    Address: shippingAddress.Address || "",
    City: shippingAddress.City || "",
    Country: shippingAddress.Country || "US",
    PostalCode: shippingAddress.PostalCode || "",
    Email: shippingAddress.Email || "",
    PhoneNumber: shippingAddress.PhoneNumber || "",
  };

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
    isSubmitting(true);
    isSubmitting(false);
    history.push("/checkout/#payment");
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
            control="materialInput"
            type="text"
            autoComplete="given-name"
            label="First Name"
            name="firstName"
            variant="outlined"
            size="medium"
          />
          <FormikControl
            control="materialInput"
            type="text"
            autoComplete="given-name"
            label="Last Name"
            name="lastName"
            variant="outlined"
            size="medium"
          />
          <FormikControl
            control="materialInput"
            type="text"
            autoComplete="address"
            label="Address"
            name="Address"
            variant="outlined"
            size="medium"
          />
          <FormikControl
            control="materialInput"
            type="text"
            autoComplete="city-name"
            label="City"
            name="City"
            variant="outlined"
            size="medium"
          />
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
          <FormikControl
            control="materialInput"
            type="text"
            autoComplete="postal-code"
            label="Postal Code"
            name="PostalCode"
            variant="outlined"
            size="medium"
          />
          <FormikControl
            control="materialInput"
            type="email"
            label="Email"
            name="Email"
            variant="outlined"
            size="medium"
          />
          <FormikControl
            control="materialInput"
            type="text"
            label="Phone Number"
            name="PhoneNumber"
            variant="outlined"
            size="medium"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;
