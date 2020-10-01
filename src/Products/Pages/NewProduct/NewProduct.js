import React, {useState} from "react";

import { Formik, Form, useField } from "formik";
import {
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import * as yup from "yup";

// Custom Text Field using Formik and Material UI
const MyTextField = ({ label, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      label={label}
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};
// Custom Textarea using Formik and Material UI
const MyTextarea = ({ fullWidth, label, rows, placeholder, ...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      placeholder={placeholder}
      rows={rows}
      multiline
      label={label}
      {...field}
      helperText={errorText}
      error={!!errorText}
      fullWidth={fullWidth} // Allow us to display Text area in Full Width instead of small area!.
    />
  );
};

// Custom CheckBox Using Formik and Material UI

const MyCheckbox = ({ checked, change, value, label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={<Checkbox onChange={change} />} label={label} />;
};

// Validation Schema Using YUP for Formik
const validateSchema = yup.object({
  productTitle: yup
    .string()
    .required("Product Title is Required")
    .min(10)
    .max(120),
  productDescription: yup
    .string()
    .required("Add at least 60 characters of product description")
    .min(60),
});

const NewProduct = (props) => {
  const [isChecked , setIsChecked] = useState({
    Shoes: false,
    Skirts: false,
    Clothes: false
  })

  const handleChange = (event) => {
    setIsChecked({ ...isChecked, [event.target.name]: event.target.checked})
  }

  return (
    <div>
      <h1> ADD NEW PRODUCT </h1>
      <Formik
        initialValues={{
          productTitle: "",
          productDescription: "",
          productsCategories: [],
        }}
        validationSchema={validateSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);

          console.log("Submitted Data: ", data);
          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <div className="addNewProductForm">
              <div className="productTitleCSS">
                <div style={{ fontSize: "21px", marginRight: "1rem" }}>
                  Product Title
                </div>
                <MyTextField placeholder="Product Title" name="productTitle" />
              </div>
              <div className="productDescriptionCSS">
                <div
                  style={{
                    fontSize: "21px",
                    marginRight: "1rem",
                    minWidth: "15%",
                  }}
                >
                  Product Description
                </div>
                <MyTextarea
                  fullWidth
                  rows={4}
                  error
                  name="productDescription"
                  placeholder="Product Description"
                />
              </div>
              <div className="productCategoriesCSS">
                <div
                  style={{
                    fontSize: "21px",
                    marginRight: "1rem",
                    minWidth: "15%",
                  }}
                >
                  Categories
                </div>
                <FormGroup row>
                  <MyCheckbox
                  onChange={handleChange}
                    name="productsCategories"
                    type="checkbox"
                    label="Shoes"
                    value="Shoes"
                    checked={false}
                  />
                  <MyCheckbox
                    name="productsCategories"
                    type="checkbox"
                    label="Clothes"
                    value="Clothes"
                  />
                  <MyCheckbox
                    name="productsCategories"
                    type="checkbox"
                    label="Skirts"
                    value="Skirts"
                  />
                </FormGroup>
              </div>
              <div>
                <Button disabled={isSubmitting} type="submit">
                  Submit
                </Button>
              </div>

              <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify(errors, null, 2)}</pre>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewProduct;
