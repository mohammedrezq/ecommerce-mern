import React from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import Sizes from "../../Shared/Assets/Sizes";
import Types from "../../Shared/Assets/Types";
import Colors from "../../Shared/Assets/Colors";
import PorductGender from "../../Shared/Assets/ProductGender";

import FormikControl from "../../Shared/FormElements/FormikControl";

const NewProductForm = () => {
  const initialValues = {
    productTitle: "",
    productDescription: "",
    productCategory: "Sneakers",
    productSizes: [],
    productPrice: 0,
    productColors: [],
    productGender: [],
    productShippingInfo: "",
    productSizeFit: "",
    // productImages: [],
  };

  const validationSchema = Yup.object({
    productTitle: Yup.string()
      .required("Please enter a valid Title.")
      .min(3)
      .max(200),
    productDescription: Yup.string()
      .required("Please enter a valid Description.")
      .min(30)
      .max(600),
    productCategory: Yup.string().required("Please select a Category."),
    productPrice: Yup.number().required("Please enter a valid Price."),
    productSizes: Yup.array().required("Please select size/s for the product."),
    productColors: Yup.array().required("Please select product/s available color."),
    productGender: Yup.array().required("Please select product/s available gender"),
    productShippingInfo: Yup.string()
      .required("Please enter a valid shipping info.")
      .min(5, "Please add more than five characters description.")
      .max(300, "Please set the description in no more than 300 characters description."),
    productSizeFit: Yup.string().required(
      "Please enter info about size fit for the product."
    ),
    // productImages: Yup.array().required("Please enter a valid image/s."),
  });

  const onSubmit = (values) => console.log("New Product Added Form:  ", values);

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
            fullWidth
            autoComplete="product-title"
            label="Product Title"
            name="productTitle"
            variant="outlined"
            size="medium"
          />
          <FormikControl
            control="materialTextarea"
            type="text"
            fullWidth
            autoComplete="product-description"
            label="Product Description"
            name="productDescription"
            rows="3"
            multiline
            variant="outlined"
            size="medium"
          />
          <FormikControl
            control="materialInput"
            type="number"
            fullWidth
            autoComplete="product-price"
            label="Product Price"
            name="productPrice"
            variant="outlined"
            size="medium"
          />
          <FormikControl
            control="materialSelect"
            type="text"
            fullWidth
            autoComplete="product-category"
            label="Product Category"
            name="productCategory"
            variant="outlined"
            options={Types}
            size="medium"
          />
          <FormikControl
            control="checkbox"
            type="text"
            fullWidth
            autoComplete="product-sizes"
            label="Product Sizes"
            name="productSizes"
            options={Sizes}
          />
          <FormikControl
            control="checkbox"
            type="text"
            fullWidth
            autoComplete="product-colors"
            label="Product Colors"
            name="productColors"
            options={Colors}
          />
          <FormikControl
            control="checkbox"
            type="text"
            fullWidth
            autoComplete="product-genders"
            label="Gender"
            name="productGender"
            options={PorductGender}
          />
          <FormikControl
            control="materialTextarea"
            type="text"
            fullWidth
            multiline
            rows="3"
            autoComplete="product-shipping-info"
            label="Product Shipping"
            name="productShippingInfo"
            variant="outlined"
            size="medium"
          />
          <FormikControl
            control="materialTextarea"
            type="text"
            fullWidth
            multiline
            rows="3"
            autoComplete="product-size-fit"
            label="Product Size Fit"
            name="productSizeFit"
            variant="outlined"
            size="medium"
          />
          {/* <FormikControl
            control="input"
            type="file"
            autoComplete="product-images"
            label="Product Images"
            name="productImages"
            accept="image/*"
          /> */}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default NewProductForm;
