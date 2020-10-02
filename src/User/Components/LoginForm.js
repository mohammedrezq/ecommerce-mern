import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../../Shared/FormElements/FormikControl";

const LoginForm = () => {
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

  const onSubmit = (values) => console.log("Login Form", values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        return (
          <Form>
            {/* Email Login */}
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
            {/* Password Login */}
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

            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
