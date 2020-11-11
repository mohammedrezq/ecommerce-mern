import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

import { catsList } from "../../Store/Actions/categoryActions";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import Sizes from "../../Shared/Assets/Sizes";
// import Types from "../../Shared/Assets/Types";
import Colors from "../../Shared/Assets/Colors";
import PorductGender from "../../Shared/Assets/ProductGender";

import FormikControl from "../../Shared/FormElements/FormikControl";
import Button from "../../Shared/UIElements/Button";
import "./NewProductForm.css";
import { createProduct } from "../../Store/Actions/productsActions";

const NewProductForm = () => {
  const [img, setImg] = useState([]) 
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

  // console.log(cats && cats.map((categroy) => categroy.categoryTitle));

  const initialValues = {
    productTitle: "",
    productDescription: "",
    productCategory: "Sneakers",
    productSizes: [],
    productPrice: 0,
    countInStock: 0,
    productColors: [],
    productGender: [],
    productShippingInfo: "",
    productSizeFit: "",
    Images: null,
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
    countInStock: Yup.number().required("Please enter count in stock."),
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
    Images: Yup.string().required("Please enter a valid image/s."),
  });


  const onSubmit = (values, isSubmitting) => {
    // console.log("NEW PRODUCT VALUES:",values)
    console.log("IMAGES :", values.Images);
    // console.log("TYPE OF IMAGE", typeof(values.Images))
    console.log(values);
    const imageUploadHandler = async (name, event) => {
      // setFieldValue("name", event.target.files[0]);
      const formData = new FormData();
      formData.append("Images", values.Images[0]);
      // console.log(name)
      // console.log(event.currentTarget.files)
      console.log("IMAGES :", values.Images);
  
    try {
        const config  = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
  
        const { data } = await axios.post('http://localhost:5000/api/uploads/', formData, config)
        console.log("Images Data", `http://localhost:5000${data}`);
        console.log(data);
          dispatch(
            createProduct({
              Title: values.productTitle,
              Description: values.productDescription,
              Price: values.productPrice,
              CountInStock: values.countInStock,
              Category: values.productCategory,
              Sizes: values.productSizes,
              Colors: values.productColors,
              Genders: values.productGender,
              Shipping: values.productShippingInfo,
              SizeFit: values.productSizeFit,
              Images: [`http://localhost:5000${data}`],
              })
          );
    } catch (error) {
      console.log(error)
    }
  };


  imageUploadHandler("Images", values.Images)

    // let data = new FormData();
    // data.append("Images", values.Images)

    let imagesArray = [...values.Images]; // convert filesArray into JavaScript Array using spread operator!
    // return (console.log("New Product Added Form:  ", values, values.productImages, images.map(img => img.name)))
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form
          style={{
            padding: "15px",
            borderRadius: "10px",
            border: "1px solid #111",
            marginBottom: "30px",
          }}
        >
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
          <FormikControl
            control="materialInput"
            className="FormNewProduct"
            type="number"
            fullWidth
            autoComplete="product-count-in-stock"
            label="Counn In Stock"
            name="countInStock"
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
            control="inputImages"
            className="FormNewProduct"
            type="file"
            autoComplete="product-images"
            label="Product Images"
            name="Images"
            accept="image/*"
          /> */}
          <div>
            <input
              // multiple
              accept="image/*"
              id="file"
              name="Images"
              type="file"
              onChange={(event) => formik.setFieldValue("Images", event.target.files)}
              className="form-control"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "15px 0 10px 0",
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
