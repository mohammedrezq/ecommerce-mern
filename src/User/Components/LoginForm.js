import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import FormikControl from "../../Shared/FormElements/FormikControl";
import Message from '../../Shared/UIElements/Message'
// import Spinner from '../../Shared/UIElements/Spinner'
import { login } from "../../Store/Actions/userActions";
import './LoginForm.css'

const LoginForm = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);

  // console.log(userLogin);
  const { loading, error, userInfo } = userLogin;

  const history = useHistory();

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address.")
      .required("Email is required"),
    password: Yup.string().required("Please enter a password.").min(6),
  });

  const onSubmit = (values, isSubmitting) => {
    dispatch(login(values.email, values.password)); // Dispatch Email & Password from Login Form
    isSubmitting(true);
    // e.prevenDefault();
    // console.log(e);
    console.log("Login Form", values);
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
            <React.Fragment>
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
            <button className={`Login__Form--Btn Submit__Btn`} type="submit"> {!loading ? <span>LOGIN</span>: <span>Processing...</span>}</button>
            </React.Fragment>
            {/* )} */ }{/* Spinner for the whole login Form ! */}
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
