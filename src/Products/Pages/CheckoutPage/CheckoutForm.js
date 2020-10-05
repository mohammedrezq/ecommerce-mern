import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import Countries from "../../../Shared/Assets/Countries";

import FormikControl from "../../../Shared/FormElements/FormikControl";

const CheckoutForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    Address: "",
    City: "",
    Province: "US",
    PostalCode: "",
    Email: "",
    PhoneNumber: "",
  };

  // Check Phone Number
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Please eneter a valid firstname').min(2).max(100),
    lastName: Yup.string().required('Please enter a valid lastname').min(2).max(100),
    Address: Yup.string().required('Please eneter a valid address').min(2).max(140),
    City: Yup.string().required('Please enter a valid city').min(2),
    Province: Yup.string().required(),
    PostalCode: Yup.string().required('Please enter a valid ZIP code.'),
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Email is required"),
    PhoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  });

  const onSubmit = (values) => console.log("Checkout Page Form", values);

  return (
    <Formik
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
            name="Province"
            variant="outlined"
            helperText="Select a Province"
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
        </Form>
      )}
    </Formik>
  );
};

export default CheckoutForm;
