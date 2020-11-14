import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

import { catsList } from "../../Store/Actions/categoryActions";

import TextField from "@material-ui/core/TextField";
import NativeSelect from "@material-ui/core/NativeSelect";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

import Sizes from "../../Shared/Assets/Sizes"; //Sizes
import Colors from "../../Shared/Assets/Colors"; // Colors
import PorductGender from "../../Shared/Assets/ProductGender"; //Genders

import FileUpload from "../../Shared/Utils/FileUpload"; //Genders
import Button from "../../Shared/UIElements/Button";

import * as classes from "../../Shared/Utils/FileUpload.module.css";
// import "./NewProductForm.css";
import {
  createProduct,
  listProductDetails,
} from "../../Store/Actions/productsActions";

const UpdateProductForm = () => {
  const productId = useParams().pid;

  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState(0);
  const [CountInStock, setCountInStock] = useState(0);
  const [Category, setCategory] = useState("5f83b4d65528ac7b20cc1641"); // Set default category in case of forgetting [it is essential data for submitting new product]
  const [Size, setSize] = useState([]);
  const [Color, setColor] = useState([]);
  const [Gender, setGender] = useState([]);
  const [checked, setChecked] = useState(false);
  const [Shipping, setShipping] = useState("");
  const [sizeFit, setSizeFit] = useState("");
  const [Images, setImages] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productDetails = useSelector((state) => state.productDetails);

  const { error, loading, product } = productDetails;

  let theProduct = product.product;
  // console.log("THE PRODUCT ", theProduct);

  //   console.log(userDetails)
  // console.log(productId);

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
      // if (!theProduct.email || theProduct._id !== productId)  {
      //   dispatch(getUserDetailsForAdmin(userId));
    } else {
      if (!theProduct._id) {
        dispatch(listProductDetails(productId));
      } else {
        setTitle(theProduct.Title);
        setDescription(theProduct.Description);
        setPrice(theProduct.Price);
        setCategory(theProduct.Category);
        setCountInStock(theProduct.CountInStock);
        setSize(theProduct.Sizes);
        setColor(theProduct.Colors);
        setGender(theProduct.Genders);
        setShipping(theProduct.Shipping);
        setSizeFit(theProduct.SizeFit);
        setImages(theProduct.Images);
      }
    }
  }, [dispatch, history, userInfo, theProduct]);


  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(catsList());
    } else {
      history.push("/");
    }
  }, [dispatch, userInfo, history]);

  const categoriesList = useSelector((state) => state.categoriesList);
  const {
    loading: loadingCategory,
    error: errorCategory,
    cats,
  } = categoriesList;

  // console.log(cats)

  const submitNewProductHandler = (e) => {
    e.preventDefault();
    /* Dispatch Update Product */

    // dispatch(
    //   createProduct({
    //     Title: Title,
    //     Description: Description,
    //     Price: Price,
    //     CountInStock: CountInStock,
    //     Category: Category,
    //     Sizes: Size,
    //     Colors: Color,
    //     Genders: Gender,
    //     Shipping: Shipping,
    //     SizeFit: sizeFit,
    //     Images: Images,
    //     })
    // );

    console.log("Updated Product Submitted");
  };

  // console.log(Color)
  // console.log(Size)

  const onTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  };
  const onDescriptionChange = (e) => {
    setDescription(e.currentTarget.value);
  };
  const onPriceChange = (e) => {
    setPrice(e.currentTarget.value);
  };
  const onCountInStockChange = (e) => {
    setCountInStock(e.currentTarget.value);
  };
  const onCategoryChange = (e) => {
    setCategory(e.currentTarget.value);
  };
  const onSizeChange = (e) => {
    let TheSizesArray = [...Size, e.currentTarget.value]; // Filtering Array : https://stackoverflow.com/questions/61986464/react-checkbox-if-checked-add-value-to-array
    // console.log("THE SIZES", Size);
    if (Size.includes(e.currentTarget.value)) {
      TheSizesArray = TheSizesArray.filter((size) => {
        // console.log("TheSize",size)
        return size !== e.currentTarget.value;
      });
      setSize(TheSizesArray);
    }
    // console.log(TheSizesArray)
    setSize(TheSizesArray);
  };
  // console.log(Size);

  const onColorChange = (e) => {
    let TheColorsArray = [...Color, e.currentTarget.value]; // https://stackoverflow.com/questions/61986464/react-checkbox-if-checked-add-value-to-array
    // console.log("THE COLORS",Color)
    if (Color.includes(e.currentTarget.value)) {
      TheColorsArray = TheColorsArray.filter(
        (color) => color !== e.currentTarget.value
      );
    }
    setColor(TheColorsArray);
  };

  // console.log(Color)

  const onGenderChange = (e) => {
    let TheGendersArray = [...Gender, e.currentTarget.value]; // https://stackoverflow.com/questions/61986464/react-checkbox-if-checked-add-value-to-array
    // console.log("THE GENDERS",Gender)
    if (Gender.includes(e.currentTarget.value)) {
      TheGendersArray = TheGendersArray.filter(
        (gender) => gender !== e.currentTarget.value
      );
    }
    setGender(TheGendersArray);
  };
  // console.log(Gender)
  const onShippingChange = (e) => {
    setShipping(e.currentTarget.value);
  };
  const onsizeFitChange = (e) => {
    setSizeFit(e.currentTarget.value);
  };

  const updateImages = (newImages) => {
    let newImagesArray = Images.concat(newImages)
    let uniq = [...new Set(newImagesArray)]; // Unique array: https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
    setImages(uniq);
  };
  // console.log(Images);

  const onDelete = (image) => {
    const currentIndex = Images.indexOf(image);
    // console.log(currentIndex);

    let newImages = [...Images];
    newImages.splice(currentIndex, 1);

    setImages(newImages);

    // props.refreshFunction(newImages)
  };

  return (
    <>
      <form onSubmit={submitNewProductHandler}>
        <TextField
          id="title_new_product"
          label="Title"
          variant="outlined"
          fullWidth
          size="small"
          onChange={onTitleChange}
          value={Title}
        />
        <TextField
          id="description_new_product"
          label="Description"
          variant="outlined"
          fullWidth
          size="small"
          multiline
          rows="5"
          onChange={onDescriptionChange}
          value={Description}
        />
        <TextField
          id="price_new_product"
          label="Price"
          variant="outlined"
          fullWidth
          size="small"
          type="number"
          onChange={onPriceChange}
          value={Price}
        />
        <TextField
          id="countinstock_new_product"
          label="Count In Stock"
          variant="outlined"
          fullWidth
          size="small"
          type="number"
          onChange={onCountInStockChange}
          value={CountInStock}
        />

        <FormControl>
          {/* <InputLabel htmlFor="productCategory">Category</InputLabel> */}
          <NativeSelect
            value={Category}
            onChange={onCategoryChange}
            inputProps={{
              name: "category",
              id: "productCategory",
            }}
          >
            {cats &&
              cats.map((category, index) => {
                console.log(category)
                return (
                  <option key={index} value={category.id} defaultValue={category.id}>
                    {category.categoryTitle}
                  </option>
                );
              })}
          </NativeSelect>
          <FormHelperText>Select a Category for your Product</FormHelperText>
        </FormControl>

        <div className="product_sizes">
          <FormLabel component="legend">Sizes</FormLabel>
          <FormGroup style={{ flexDirection: "row" }}>
            {Sizes.map((size, index) => {
              // console.log(size)
              // console.log(Size)
              return (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      id={size.value}
                      checked={Size.indexOf(size.value) === -1 ? false :true}
                      onChange={onSizeChange}
                      value={size.value}
                      name={size.value}
                    />
                  }
                  label={size.key}
                />
              );
            })}
          </FormGroup>
        </div>

        <div className="product_colors">
          <FormLabel component="legend">Colors</FormLabel>
          <FormGroup style={{ flexDirection: "row" }}>
            {Colors.map((color, index) => {
              return (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      id={color.value}
                      checked={Color.indexOf(color.value) === -1 ? false :true}
                      onChange={onColorChange}
                      value={color.value}
                      name={color.value}
                    />
                  }
                  label={color.key}
                />
              );
            })}
          </FormGroup>
        </div>

        <div className="product_genders">
          <FormLabel component="legend">Gender</FormLabel>
          <FormGroup style={{ flexDirection: "row" }}>
            {PorductGender.map((gender, index) => {
              return (
                <FormControlLabel
                  key={index}
                  control={
                    <Checkbox
                      id={gender.value}
                      checked={Gender.indexOf(gender.value) === -1 ? false :true}
                      onChange={onGenderChange}
                      value={gender.value}
                      name={gender.value}
                    />
                  }
                  label={gender.key}
                />
              );
            })}
          </FormGroup>
        </div>

        <TextField
          id="shipping_new_product"
          label="Product Shipping"
          variant="outlined"
          fullWidth
          size="small"
          multiline
          rows="5"
          onChange={onShippingChange}
          value={Shipping}
        />
        <TextField
          id="sizeFit_new_product"
          label="Product Size Fit"
          variant="outlined"
          fullWidth
          size="small"
          multiline
          rows="5"
          onChange={onsizeFitChange}
          value={sizeFit}
        />

        <FileUpload refreshFunction={updateImages} />
        <div className={classes.images_display_area}>
          {Images.map((image, index) => {
            return (
              <div
                className={classes.image_container}
                key={index}
                onDoubleClick={() => onDelete(image)}
              >
                {" "}
                {/* Remove Image by double click on the image */}
                <img
                  className={classes.displayed_Images}
                  src={image}
                  alt={`productImage-${index}`}
                />
              </div>
            );
          })}
        </div>

        <Button onClick={submitNewProductHandler} type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default UpdateProductForm;
