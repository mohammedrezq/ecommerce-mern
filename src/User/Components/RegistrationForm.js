import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../Shared/FormElements/FormikControl";

import "./RegistrationForm.css";
import Countries from "../../Shared/Assets/Countries";
import Gender from "../../Shared/Assets/Gender";

const RegistrationForm = () => {
  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    dateOfBirth: null,
    country: "US",
    gender: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Email is required"),
    password: Yup.string().required("Please enter a valid password.").min(6),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords don't must match")
      .required("Please confirm the password"),
    firstName: Yup.string().required("Please enter a valid first name.").min(3),
    lastName: Yup.string().required("Please enter a valid last name.").min(3),
    dateOfBirth: Yup.date().required("Please set your birth date.").nullable(),
    country: Yup.string().required("Please select a country."),
    gender: Yup.string().required("Please select a preference."),
  });

  const onSubmit = (values) => console.log("Form Data", values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            {/* Email */}
            <FormikControl
              fullWidth
              className="FormElement"
              control="materialInput"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email Address"
              variant="outlined"
              size="small"
            />
            {/* Password */}
            <FormikControl
              fullWidth
              className="FormElement"
              control="materialInput"
              type="password"
              name="password"
              autoComplete="password"
              placeholder="Password"
              variant="outlined"
              size="small"
            />
            {/* Confirm Password */}
            <FormikControl
              fullWidth
              className="FormElement"
              control="materialInput"
              type="password"
              name="confirmPassword"
              autoComplete="confirmPassword"
              placeholder="Confirm Password"
              variant="outlined"
              size="small"
            />
            {/* firstName */}
            <FormikControl
              fullWidth
              className="FormElement"
              control="materialInput"
              type="text"
              name="firstName"
              placeholder="First Name"
              variant="outlined"
              size="small"
            />
            {/* lasttName */}
            <FormikControl
              fullWidth
              className="FormElement"
              control="materialInput"
              type="text"
              name="lastName"
              placeholder="Last Name"
              variant="outlined"
              size="small"
            />
            {/* Date of Birth */}
            <FormikControl
              fullWidth
              className="FormElement dateOfBirthOption"
              control="date"
              name="dateOfBirth"
              placeholderText="Date of Birth"
            />
            <FormikControl
              fullWidth
              className="FormElement"
              control="materialSelectCountry"
              label="Country/Region"
              name="country"
              variant="outlined"
              helperText="Select a Country"
              options={Countries}
            />
            <FormikControl
              fullWidth
              className="FormElement"
              control="radio"
              name="gender"
              options={Gender}
            />
            <p className="terms">
              By creating an account, you agree to Nike's Privacy Policy and
              Terms of Use.
            </p>

            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegistrationForm;
