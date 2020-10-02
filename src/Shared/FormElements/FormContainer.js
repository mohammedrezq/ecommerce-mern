import React from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

const FormContainer = () => {
  const dropDownOptions = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "Option1" },
    { key: "Option 2", value: "Option2" },
    { key: "Option 3", value: "Option3" },
  ];

  const radioButtons = [
    { key: "Shoes", value: "rOption1" },
    { key: "Sneakers", value: "rOption2" },
    { key: "Kid Shoes", value: "rOption3" },
  ];

  const checkboxButtons = [
    { key: "Small", value: "cOption1" },
    { key: "Medium", value: "cOption2" },
    { key: "Large", value: "cOption3" },
  ];

  const initialValues = {
    Username: "",
    Email: "",
    Description: "",
    Select: "",
    SelectMaterial:"",
    RadioButton: "",
    CheckboxButton: [],
    BirthDate: null,
  };

  const ValidationSchema = Yup.object({
    Username: Yup.string().required().min(6).max(100),
    Email: Yup.string().email().required(),
    Description: Yup.string().required().min(60).max(600),
    Description2: Yup.string().required().min(60).max(600),
    Select: Yup.string().required("You have to select an option."),
    SelectMaterial: Yup.string().required("You have to SelectMaterial an option."),
    RadioButton: Yup.string().required("You must select one option"),
    CheckboxButton: Yup.array().required(
      "You must select at least one option."
    ),
    BirthDate: Yup.date().required("Please set your birth date").nullable(),
  });
  const onSubmit = (values) => console.log("Form Data", values);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ValidationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          {/* {console.log(formik)} */}
          <FormikControl
            control="materialInput"
            type="text"
            label="Username"
            name="Username"
            placeholder="Username"
            variant="outlined"
            size="small"
          />
          <FormikControl
            control="materialInput"
            type="email"
            label="Email"
            name="Email"
            placeholder="example@exmaple.com"
            variant="outlined"
            size="small"
          />
          <FormikControl
            control="input"
            type="text"
            label="Username"
            name="Username"
            placeholder="Username"
          />
          <FormikControl
            control="input"
            type="email"
            label="Email"
            name="Email"
            placeholder="example@exmaple.com"
          />
          <FormikControl
            control="textarea"
            label="Description"
            name="Description"
            placeholder="Add Product Description"
            rows="8"
          />
          <FormikControl
            control="materialTextarea"
            label="Description"
            name="Description2"
            placeholder="Add Product Description"
            rows="8"
            variant="outlined"
          />
            <FormikControl
              control="materialSelect"
              label="Select a topic"
              name="SelectMaterial"
              helperText="This is a helper text"
              options={dropDownOptions}
            />
          <FormikControl
            control="select"
            label="Select a topic"
            name="Select"
            options={dropDownOptions}
          />
          <FormikControl
            control="radio"
            label="Select a radio option:"
            name="RadioButton"
            options={radioButtons}
          />
          <FormikControl
            control="checkbox"
            label="Checkbox Topics:"
            name="CheckboxButton"
            options={checkboxButtons}
          />
          <FormikControl control="date" label="Pick a date" name="BirthDate" placeholderText="Pick a Date" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormContainer;
