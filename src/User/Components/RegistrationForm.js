import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../Shared/FormElements/FormikControl";
import Message from "../../Shared/UIElements/Message";
import { signup } from "../../Store/Actions/userActions";

import Countries from "../../Shared/Assets/Countries";
import Gender from "../../Shared/Assets/Gender";
import "./RegistrationForm.css";
import "./LoginForm.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const userSignup = useSelector((state) => state.userSignup);

  // console.log(userSignup);
  const { loading, error, userInfo } = userSignup;

  console.log("userInfo",userInfo)
  const history = useHistory();

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    DateOfBirth: null,
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
    firstName: Yup.string().required("Please enter a valid first name.").min(2),
    lastName: Yup.string().required("Please enter a valid last name.").min(2),
    DateOfBirth: Yup.date().required("Please set your birth date.").nullable(),
    country: Yup.string().required("Please select a country."),
    gender: Yup.string().required("Please select a preference."),
  });

  const onSubmit = (values, isSubmitting) => {
    dispatch(
      signup(
        values.email,
        values.password,
        values.firstName,
        values.lastName,
        values.DateOfBirth,
        values.country,
        values.gender,
      )
    ); // Dispatch Email & Password & firstName, LastName, DOB, country, and gender from Signup Form
    console.log("Signup Data", values);
    isSubmitting(true);
    // e.prevenDefault();
    isSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
             {error && <Message>{error}</Message>}
            {/* Check if loading is true show Spinner else show the Login Form */}
            {/* {loading ? <Spinner /> :( */} {/* Spinner for the whole login Form ! */}
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
              className="FormElement DateOfBirthOption"
              control="date"
              name="DateOfBirth"
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

            <button className={`Signup__Form--Btn Submit__Btn`} type="submit">{!loading ? <span>Sign Up</span>: <span>Processing...</span>}</button>
            {/* )} */ }{/* Spinner for the whole login Form ! */}
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegistrationForm;
