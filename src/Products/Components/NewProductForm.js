import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { catsList } from "../../Store/Actions/categoryActions";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import Sizes from "../../Shared/Assets/Sizes";
// import Types from "../../Shared/Assets/Types";
import Colors from "../../Shared/Assets/Colors";
import PorductGender from "../../Shared/Assets/ProductGender";

import FormikControl from "../../Shared/FormElements/FormikControl";
import Button from "../../Shared/UIElements/Button";
import "./NewProductForm.css"

const NewProductForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(catsList());
    } else {
      history.push("/");
    }
  }, [dispatch, userInfo, history]);

  const categoriesList = useSelector((state) => state.categoriesList);
  const { loading, error, cats } = categoriesList;

  console.log(cats);

  console.log(cats && cats.map((categroy) => categroy.categoryTitle));

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
      .min(3)
      .max(600),
    productCategory: Yup.string().required("Please select a Category."),
    productPrice: Yup.number().required("Please enter a valid Price."),
    productSizes: Yup.array().required("Please select size/s for the product."),
    productColors: Yup.array().required(
      "Please select product/s available color."
    ),
    productGender: Yup.array().required(
      "Please select product/s available gender"
    ),
    productShippingInfo: Yup.string()
      .required("Please enter a valid shipping info.")
      .min(5, "Please add more than five characters description.")
      .max(
        300,
        "Please set the description in no more than 300 characters description."
      ),
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
        <Form style={{padding: "15px", borderRadius:"10px", border: "1px solid #111", marginBottom:"30px"}}>
          <FormikControl
            control="materialInput"
            className="FormNewProduct"
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
            className="FormNewProduct"
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
            className="FormNewProduct"
            type="number"
            fullWidth
            autoComplete="product-price"
            label="Product Price"
            name="productPrice"
            variant="outlined"
            size="medium"
          />
          {cats && (
            <FormikControl
              control="materialSelectCategories"
              className="FormNewProduct"
              type="text"
              fullWidth
              autoComplete="product-category"
              label="Product Category"
              name="productCategory"
              variant="outlined"
              options={cats}
              size="medium"
            />
          )}
          <FormikControl
            control="checkbox"
            className="FormNewProduct"
            ItemClassName="sizesProduct"
            type="text"
            fullWidth
            autoComplete="product-sizes"
            label="Sizes:"
            name="productSizes"
            options={Sizes}
          />
          <FormikControl
            control="checkbox"
            className="FormNewProduct"
            ItemClassName="colorsProduct"
            type="text"
            fullWidth
            autoComplete="product-colors"
            label="Colors:"
            name="productColors"
            options={Colors}
          />
          <FormikControl
            control="checkbox"
            className="FormNewProduct"
            ItemClassName="gendersProduct"
            type="text"
            fullWidth
            autoComplete="product-genders"
            label="Genders:"
            name="productGender"
            options={PorductGender}
          />
          <FormikControl
            control="materialTextarea"
            className="FormNewProduct"
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
            className="FormNewProduct"
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
            className="FormNewProduct"
            type="file"
            autoComplete="product-images"
            label="Product Images"
            name="productImages"
            accept="image/*"
          /> */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "15px 0 10px 0"
            }}
          >
            <Button
              style={{
                backgroundColor: "#111",
                color: "#fff",
                border: "1px solid #111",
                minWidth: "50%",
              }}
              className="FormNewProduct"
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NewProductForm;
