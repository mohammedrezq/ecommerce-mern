import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikControl from "../../Shared/FormElements/FormikControl";
import Message from "../../Shared/UIElements/Message";
import {
  getUserDetailsForAdmin,
  updateUserByAdmin,
} from "../../Store/Actions/userActions";

import Countries from "../../Shared/Assets/Countries";
import Gender from "../../Shared/Assets/Gender";
import Spinner from "../../Shared/UIElements/Spinner";
import "./UserUpdateForm.css";
import "./LoginForm.css";

const UserUpdateForm = () => {
  const userId = useParams().uid;
  // console.log(userId);

  const history = useHistory();

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);

  const { loading, error, user } = userDetails;

  // console.log(userDetails);
  console.log(user);
  // console.log(user.firstName);
  // console.log(loading);
  // console.log(user);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // console.log(userInfo)


  const userUpdateAdmin = useSelector((state) => state.userUpdateAdmin);
  const { success, loading: loadingAdmin, error: errorAdmin } = userUpdateAdmin;
  // console.log(userUpdateAdmin)
  // console.log(loadingAdmin)

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else if (!user.email || user._id !== userId)  {
      dispatch(getUserDetailsForAdmin(userId));
    }  else if ( user.email === undefined || user.email === null ) {
      history.push("/")
    }
  }, [dispatch, user, userId, history, userInfo, success]);

  let initialValues;
  if (user && userId) {
    initialValues = {
      bio: user.bio || "",
      isAdmin: user.isAdmin || false, // initial Value is false for users
      email: user.email || "",
      firstName: user.firstName || "",
      lastName: user.lastName ||  "",
      country: user.Country || "US",
      gender: user.Gender ||  "",
    };
  }

  const validationSchema = Yup.object({
    bio: Yup.string(),
    isAdmin: Yup.boolean(),
    email: Yup.string().email("Please enter a valid email address.").required(),
    firstName: Yup.string().required().min(2),
    lastName: Yup.string().required().min(2),
    country: Yup.string().required(),
    gender: Yup.string().required(),
  });

  const onSubmit = (values, isSubmitting) => {
    dispatch(
      updateUserByAdmin(userId, {
        email: values.email,
        isAdmin: values.isAdmin,
        firstName: values.firstName,
        lastName: values.lastName,
        bio: values.bio,
        Country: values.country,
        Gender: values.gender,
      })
    ); // Dispatch Email & Password & firstName, LastName, bio, country, and gender from Update Form
    console.log("Updated Data", values);
    isSubmitting(true);
    // e.prevenDefault();
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
            {error && <Message severity="error">{error}</Message>}
            {errorAdmin && <Message severity="error">{errorAdmin}</Message>}
            {/* Check if loading is true show Spinner else show the Login Form */}
            {loading ? (
              <Spinner />
            ) : (
              <>
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
                {/* Checkbox isAdmin */}
                <div className="checkbox__isAdmin">
                <label>
                  <Field type="checkbox" name="isAdmin" />
                  {`Role Admin`}
                </label>
                </div>
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
                  control="radio"
                  name="gender"
                  options={Gender}
                />
                <button
                  className={`Signup__Form--Btn Submit__Btn`}
                  type="submit"
                >
                  {!loadingAdmin ? (
                    <span>Update User</span>
                  ) : (
                    <span>Processing...</span>
                  )}
                </button>
                {success && (
                  <Message severity="success">
                    User Info Updated By Admin
                  </Message>
                )}
              </>
            )}
          </Form>
        );
      }}
    </Formik>
  );
};

export default UserUpdateForm;
