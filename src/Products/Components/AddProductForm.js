import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';

import { catsList } from "../../Store/Actions/categoryActions";

import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Radio from '@material-ui/core/Radio';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';




import Sizes from "../../Shared/Assets/Sizes"; //Sizes
import Colors from "../../Shared/Assets/Colors"; // Colors
import PorductGender from "../../Shared/Assets/ProductGender"; //Genders

import FileUpload from "../../Shared/Utils/FileUpload"; //Genders
import Button from "../../Shared/UIElements/Button";
// import "./NewProductForm.css";
import { createProduct } from "../../Store/Actions/productsActions";
import Message from "../../Shared/UIElements/Message";

const AddProductForm = () => {
  const [Title, setTitle] = useState("")
  const [Description, setDescription] = useState("")
  const [Price, setPrice] = useState(0)
  const [CountInStock, setCountInStock] = useState(0)
  const [Category, setCategory] = useState("5f83b4d65528ac7b20cc1641") // Set default category in case of forgetting [it is essential data for submitting new product]
  const [Size, setSize] = useState([])
  const [checkedSizes, setCheckedSizes] = useState(false)
  const [Color, setColor] = useState([])
  const [checkedColors, setCheckedColors] = useState(false)
  const [Gender, setGender] = useState([])
  const [checkedGenders, setCheckedGenders] = useState(false)
  const [Shipping, setShipping] = useState("")
  const [sizeFit, setSizeFit] = useState("")
  const [Images, setImages] = useState([]) 



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

// console.log(cats)


  const onTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  }
  const onDescriptionChange = (e) => {
    setDescription(e.currentTarget.value);
  }
  const onPriceChange = (e) => {
    setPrice(e.currentTarget.value);
  }
  const onCountInStockChange = (e) => {
    setCountInStock(e.currentTarget.value);
  }
  const onCategoryChange = (e) => {
    setCategory(e.currentTarget.value);
  }
  const onSizeChange = (e) => {
    let TheSizesArray = [...Size, e.currentTarget.value]; // Filtering Array : https://stackoverflow.com/questions/61986464/react-checkbox-if-checked-add-value-to-array
    // console.log("THE SIZES",Size)
    let SizesChecked = e.currentTarget.checked;
    if(Size.includes(e.currentTarget.value)) {
      TheSizesArray = TheSizesArray.filter((size) =>  { 
        // console.log("TheSize",size) 
        return (size !== e.currentTarget.value)
      });
      setSize(TheSizesArray);
      // setCheckedSizes(SizesChecked);
    }
    // console.log(TheSizesArray)
    setSize(TheSizesArray);
    // setCheckedSizes(SizesChecked);

  }
  console.log(Size)
  // console.log(checked)

  const onColorChange = (e) => {
    let TheColorsArray = [...Color, e.currentTarget.value]; // https://stackoverflow.com/questions/61986464/react-checkbox-if-checked-add-value-to-array
    // console.log("THE COLORS",Color)
    if(Color.includes(e.currentTarget.value)) {
      TheColorsArray = TheColorsArray.filter(color => color !== e.currentTarget.value);
    }
    setColor(TheColorsArray)
  }

  // console.log(Color)

  const onGenderChange = (e) => {
    let TheGendersArray = [...Gender, e.currentTarget.value]; // https://stackoverflow.com/questions/61986464/react-checkbox-if-checked-add-value-to-array
    // console.log("THE GENDERS",Gender)
    if(Gender.includes(e.currentTarget.value)){
      TheGendersArray = TheGendersArray.filter(gender => gender !== e.currentTarget.value);
    }
    setGender(TheGendersArray);
  }
  // console.log(Gender)
  const onShippingChange = (e) => {
    setShipping(e.currentTarget.value);
  }
  const onsizeFitChange = (e) => {
    setSizeFit(e.currentTarget.value);
  }

  const updateImages = (newImages) => {
    console.log(newImages)
    setImages(newImages)
  }


  const submitNewProductHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProduct({
        Title: Title,
        Description: Description,
        Price: Price,
        CountInStock: CountInStock,
        Category: Category,
        Sizes: Size,
        Colors: Color,
        Genders: Gender,
        Shipping: Shipping,
        SizeFit: sizeFit,
        Images: Images,
        })
    );
    console.log("New Product Submitted");
  }


  const productCreate = useSelector(state => state.productCreate);

  const { success: successCreate, loading: loadingCreate, error: errorCreate } = productCreate;


  // console.log(Color)
  // console.log(Size)
  return (
    <>
  <form onSubmit={submitNewProductHandler}>
  <TextField id="title_new_product" label="Title" variant="outlined" fullWidth size="small" onChange={onTitleChange} value={Title} />
  <TextField id="description_new_product" label="Description" variant="outlined" fullWidth size="small" multiline rows="5" onChange={onDescriptionChange} value={Description} />
  <TextField id="price_new_product" label="Price" variant="outlined" fullWidth size="small" type="number" onChange={onPriceChange} value={Price} />
  <TextField id="countinstock_new_product" label="Count In Stock" variant="outlined" fullWidth size="small" type="number" onChange={onCountInStockChange} value={CountInStock} />

  <FormControl>
        {/* <InputLabel htmlFor="productCategory">Category</InputLabel> */}
        <NativeSelect
          value={Category}
          onChange={onCategoryChange}
          inputProps={{
            name: 'category',
            id: 'productCategory',
          }}
        >

          {cats && cats.map((category, index) => {
            // console.log(category)
            return(<option key={index} value={category.id}>{category.categoryTitle}</option>)}
          )}
        </NativeSelect>
        <FormHelperText>Select a Category for your Product</FormHelperText>
      </FormControl>

      <div className="product_sizes">
        <FormLabel component="legend">Sizes</FormLabel>
        <FormGroup  style={{flexDirection: "row"}}>
          {Sizes.map((size, index) => {
            return(
              <FormControlLabel key={index}
                control={<Checkbox id={size.value} checked={checkedSizes[size.key]} onChange={onSizeChange} value={size.value} name={size.value} />}
                label={size.key}
              />
            )
          })}

        </FormGroup>
      </div>

      <div className="product_colors">
        <FormLabel component="legend">Colors</FormLabel>
        <FormGroup  style={{flexDirection: "row"}}>
          {Colors.map((color, index) => {
            return(
              <FormControlLabel key={index}
                control={<Checkbox id={color.value} checked={checkedColors[color.value]} onChange={onColorChange} value={color.value} name={color.value} />}
                label={color.key}
              />
            )
          })}

        </FormGroup>
      </div>

      <div className="product_genders">
        <FormLabel component="legend">Gender</FormLabel>
        <FormGroup  style={{flexDirection: "row"}}>
          {PorductGender.map((gender, index) => {
            return(
              <FormControlLabel key={index}
                control={<Checkbox id={gender.value} checked={checkedGenders[gender.value]} onChange={onGenderChange} value={gender.value} name={gender.value} />}
                label={gender.key}
              />
            )
          })}

        </FormGroup>
      </div>
  

      <TextField id="shipping_new_product" label="Product Shipping" variant="outlined" fullWidth size="small" multiline rows="5" onChange={onShippingChange} value={Shipping} />
      <TextField id="sizeFit_new_product" label="Product Size Fit" variant="outlined" fullWidth size="small" multiline rows="5" onChange={onsizeFitChange} value={sizeFit} />

          <FileUpload refreshFunction={updateImages} />

          <Button onClick={submitNewProductHandler} type="submit">
            {loadingCreate ? "processing" : "Submit" }
          </Button>
          {errorCreate && <Message>Something went wrong: {errorCreate}</Message>}
          {successCreate && <Message severity="success">Product created Successfully! Go Back to <Link to="/admin/productlist">Products List</Link></Message>}

    </form>    
    </>
  )

}

export default AddProductForm;
