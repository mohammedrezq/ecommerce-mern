import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import {
  getUserDetails,
  updateUserProfile,
} from "../../Store/Actions/userActions";
import FormikControl from "../../Shared/FormElements/FormikControl";
import Message from "../../Shared/UIElements/Message";

import Countries from "../../Shared/Assets/Countries";
import Gender from "../../Shared/Assets/Gender";

import "./ProfileForm.css";

const ProfileForm = () => {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);

  const { loading, error, user } = userDetails;

  // console.log(userDetails);
  // console.log(user);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // console.log(userLogin);
  // console.log(userInfo)

  const history = useHistory();
  //   let initialValues;
  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.email) {
        dispatch(getUserDetails("profile"));
      }
    }
  }, [dispatch, history, userInfo, user]);

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);

  const { success } = userUpdateProfile;
  // console.log(success);
  //   console.log(userInfo);

  //   console.log(user);

  //   console.log(user);
  //   let initialValues = {
  //     email: user.email || '',
  //     firstName: user.firstName|| '',
  //     lastName: user.lastName|| '',
  //     DateOfBirth: user.DateOfBirth|| '',
  //     country: user.Country|| '',
  //     gender: user.Gender|| '',
  //   };
  let initialValues;
  if (user) {
    initialValues = {
      bio: user.bio || "",
      email: user.email || "",
      // password: user.password ||"",
      // confirmPassword:user.password || "",
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      // DateOfBirth: user.DateOfBirth || "",
      country: user.Country || "US",
      gender: user.Gender || "",
    };
  }
  // console.log(user.email)
  // console.log(user.Country)
  // console.log(user.Gender)
  // console.log(user.firstName)
  // console.log(user.lastName)
  // console.log(user.bio)

  //   console.log(initialValues);

  //   console.log(user.email);

  // console.log(userDetails)

  const validationSchema = Yup.object({
    bio: Yup.string(),
    email: Yup.string().email("Please enter a valid email address."),
    password: Yup.string().min(6),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), ""],
      "Passwords don't must match"
    ),
    firstName: Yup.string().min(2),
    lastName: Yup.string().min(2),
    DateOfBirth: Yup.date().nullable(),
    country: Yup.string(),
    gender: Yup.string(),
  });

  const onSubmit = (values, isSubmitting) => {
    dispatch(
      updateUserProfile(
        // values.email,
        // values.firstName,
        // values.lastName,
        // values.DateOfBirth,
        // values.password,
        // values.confirmPassword,
        // values.country,
        // values.gender,
        // values.bio,
        {
          id: user._id, //  from the backend
          bio: values.bio,
          email: values.email,
          password: values.password,
          confirmPassword: values.confirmPassword,
          firstName: values.firstName,
          lastName: values.lastName,
          DateOfBirth: user.DateOfBirth, //  from the backend
          Country: values.country,
          Gender: values.gender,
        }
      )
    );

    console.log("VALUES FROM UPDATE", values);
    console.log(user._id);
    isSubmitting(true);
    isSubmitting(false);
  };

  return (
    <Formik
      enableReinitialize={true} // To enable reinitialize values from backend API Soruce: https://github.com/formium/formik/issues/1033
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            {error && <Message>{error}</Message>}

            <FormikControl
              fullWidth
              className="FormElement"
              control="materialTextarea"
              type="text"
              name="bio"
              rows={5}
              placeholder="About Me"
              variant="outlined"
              label="About Me"
              maxLength="150"
              //   size="small"
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
              label="First Name"
              //   size="small"
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
              label="Last Name"
              //   size="small"
            />
            <FormikControl
              fullWidth
              className="FormElement"
              control="materialInput"
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email Address"
              variant="outlined"
              label="Email"
              //   size="small"
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
              label="Password"
              //   size="small"
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
              label="Confirm Password"
              //   size="small"
            />

            {/* Date of Birth */}
            {/* <FormikControl
              fullWidth
              disabled  // Disabled
              className="FormElement DateOfBirthOption"
              control="date"
              name="DateOfBirth"
              placeholderText="Date of Birth"
            /> */}
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
              className="genderItems"
              classes="gender_radio_item"
              secondClass="genderElement"
              control="radio"
              name="gender"
              options={Gender}
            />
            {/* <p className="terms">
              By creating an account, you agree to Nike's Privacy Policy and
              Terms of Use.
            </p> */}
            <button className={`Signup__Form--Btn Submit__Btn`}>
              {!loading ? <span>Update User</span> : <span>Processing...</span>}
            </button>
            {success && (
              <Message severity="success">
                User Info Updated Successfully!
              </Message>
            )}
            {/* )} */}
            {/* Spinner for the whole login Form ! */}
          </Form>
        );
      }}
    </Formik>
  );
};

export default ProfileForm;
