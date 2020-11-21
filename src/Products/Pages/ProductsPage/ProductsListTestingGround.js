import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from 'react-router-dom'
import { Grid } from "@material-ui/core";

import ProductGrid from "../../Components/ProductGrid/ProductGrid";
import SecondaryHeader from "../../../Shared/UIElements/SecondaryHeader";
import classes from "../../Components/ProductGrid/ProductGrid.module.css";
// import productsPageStyle from "./ProductsPage.module.css";
import secondaryHeaderCSS from "../../../Shared/UIElements/SecondaryHeader.module.css";
import FilteringMenuTesting from "../../../Shared/UIElements/FilteringMenuTesting";
import filteringMenuNavCSS from "../../../Shared/UIElements/FilteringMenu.module.css";


import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Spinner from "../../../Shared/UIElements/Spinner";
import Message from "../../../Shared/UIElements/Message";

import { listProducts } from "../../../Store/Actions/productsActions";
import Paginate from "../../../Shared/Navigation/Paginate";
import Sizes from "../../../Shared/Assets/Sizes";
import Genders from "../../../Shared/Assets/Gender";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import PricesRange from "../../../Shared/Assets/PricesRange";
import Colors from "../../../Shared/Assets/Colors";


const ProductsPage = () => {
  const [open, setOpen] = useState(false);
  const [Size, setSize] = useState([]);
  const [Gender, setGender] = useState([]);
  const [Filters, setFilters] = useState({
    productSizes: [],
    productGenders: [],
    productColors: [],
    productPrices: 0,
  })

  // console.log(Filters)
  const anchorRef = useRef(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const keyword = useParams().keyword;

  const pageNumber = useParams().pageNumber || 1;
  
  // console.log(keyword)
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, pages, page } = productList;
  // console.log(products)

  // console.log(allProducts)

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);



  const [isFilterToggled, setisFilterToggled] = useState(false);

  const openFilters = () => {
    setisFilterToggled(true);
  };
  const closeFilters = () => {
    setisFilterToggled(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }
  const handleClose = (event) => {
    if(anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  }

  function handleListKeyDown(event) {
    if (event.key === "Tab" ) {
      event.preventDefault();
      setOpen(false);
    }
  }

  // console.log(Size)
  // console.log(Gender)
  let someProducts;
  someProducts = products.filter(product => {
    // console.log(product.Sizes)
    // if( Size === [] ){
    //   return (products)
    // }
    return (product.Sizes.some(sizes => {
      return (Size.includes(sizes))
    }));
  });
  console.log(someProducts)

  let thegenderedProducts = someProducts.filter(product => {
    return (product.Genders.some(gender => {
      return (["female"].includes(gender));
    }))
  })
  console.log(thegenderedProducts)

  let productsByColorOnly = products.filter(product => {

    return (product.Colors.some(colors => {
      return (Filters.productColors.includes(colors))
    }));
  });

  console.log(productsByColorOnly)

  let newProductGenders = products.filter(product => {

    return (product.Genders.some(genders => {
      return (Filters.productGenders.includes(genders))
    }));
  });

  let newProductsSizes = newProductGenders.filter(product => {

    return (product.Sizes.some(sizes => {
      return (Filters.productSizes.includes(sizes))
    }));
  });

  let productsByColorSizeNGender = newProductsSizes.filter(product => {

    return (product.Colors.some(colors => {
      return (Filters.productColors.includes(colors))
    }));
  });

  console.log(productsByColorSizeNGender)

  let SizesFilteringOnly = products.filter(product => {

    return (product.Sizes.some(sizes => {
      return (Filters.productSizes.includes(sizes))
    }));
  });

  let filterSizeOnlyByPrice = SizesFilteringOnly.filter(product => {
    // console.log(product);
    return (product.Price <= Filters.productPrices)
  })

  let filterGenderOnlyByPrice = newProductGenders.filter(product => {
    // console.log(product);
    return (product.Price <= Filters.productPrices)
  })

  let filterByPrice = newProductsSizes.filter(product => {
    // console.log(product);
    return (product.Price <= Filters.productPrices)
  })

  let filterGendersNColors = newProductGenders.filter(product => {
    // console.log(product);
    return (product.Colors.some(colors => {
      return (Filters.productColors.includes(colors))
    }))
    })

  let filterSizesNColors = SizesFilteringOnly.filter(product => {
    return (product.Colors.some(colors => {
      return (Filters.productColors.includes(colors))
    }))
    })

    
  let filterSizeNColorNPrice = filterSizeOnlyByPrice.filter(product => {
    return (product.Price <= Filters.productPrices)
  })

  let filterByPriceOnly = products.filter(product => {
    return (product.Price <= Filters.productPrices)
  })

  let filterByColorsOnly = products.filter(product => {
    return (product.Colors.some(colors => {
      return (Filters.productColors.includes(colors))
    }))  
  })

  let filteryByColorsNPrices = filterByColorsOnly.filter(product => {
    return (product.Price <= Filters.productPrices)
  })

  let filteryByColorsNPricesNGenders = filteryByColorsNPrices.filter(product => {
    return (product.Genders.some(genders => {
      return (Filters.productGenders.includes(genders))
    }));
  })



  // Filter By Sizes, Gender, Colors and Price
  let filterByAll = productsByColorSizeNGender.filter(product => {
    return (product.Price <= Filters.productPrices)
  })

  // console.log(SizesFilteringOnly)
  // console.log(newProductGenders)
  // console.log(filterGenderOnlyByPrice)
  // console.log(filterByPrice)


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

  const highestPriceHandler = () => {
    history.push("/highprice")
  }
  const lowestPriceHandler = () => {
    history.push("/lowprice")
  }
  const topRatedHandler = () => {
    history.push("/top-rated")
  }

  // console.log(Size)
  const onSizeFilterChange = (e) => {
    let TheSizesArray = [...Filters.productSizes, e.currentTarget.value]; // Filtering Array : https://stackoverflow.com/questions/61986464/react-checkbox-if-checked-add-value-to-array
    if(Filters.productSizes.includes(e.currentTarget.value)) {
      TheSizesArray = TheSizesArray.filter((size) =>  { 
        return (size !== e.currentTarget.value)
      });
      setFilters({
        ...Filters,
        productSizes: TheSizesArray
      });
    }
    // console.log(TheSizesArray)
    setFilters({
      ...Filters,
      productSizes: TheSizesArray
    });
  }
  const onGenderFilterChange = (e) => {
    let theGenderArray = [...Filters.productGenders, e.currentTarget.value]; // Filtering Array : https://stackoverflow.com/questions/61986464/react-checkbox-if-checked-add-value-to-array
    if(Filters.productGenders.includes(e.currentTarget.value)) {
      theGenderArray = theGenderArray.filter((genders) =>  { 
        return (genders !== e.currentTarget.value)
      });
      setFilters({
        ...Filters,
        productGenders: theGenderArray
      });
    }
    // console.log(theGenderArray)
    setFilters({
      ...Filters,
      productGenders: theGenderArray
    });
  }

  const onColorFilterChange = (e) => {
    let theColorArray = [...Filters.productColors, e.currentTarget.value]; // Filtering Array : https://stackoverflow.com/questions/61986464/react-checkbox-if-checked-add-value-to-array
    if(Filters.productColors.includes(e.currentTarget.value)) {
      theColorArray = theColorArray.filter((color) =>  { 
        return (color !== e.currentTarget.value)
      });
      setFilters({
        ...Filters,
        productColors: theColorArray
      });
    }
    // console.log(theGenderArray)
    setFilters({
      ...Filters,
      productColors: theColorArray
    });
  }

  // const onPriceFilterChange = (e) => {
  //   let thePriceArray = [...Filters., e.currentTarget.value]; // Filtering Array : https://stackoverflow.com/questions/61986464/react-checkbox-if-checked-add-value-to-array
  //   if(Filters.productPrices.includes(e.currentTarget.value)) {
  //     thePriceArray = thePriceArray.filter((prices) =>  { 
  //       return (prices !== e.currentTarget.value)
  //     });
  //     setFilters({
  //       ...Filters,
  //       productPrices: thePriceArray
  //     });
  //   }
  //   setFilters({
  //     ...Filters,
  //     productPrices: thePriceArray
  //   });
  // }


  const onGenderChange = (e) => {
    let TheGenderArray = [...Gender, e.currentTarget.value]; // Filtering Array : https://stackoverflow.com/questions/61986464/react-checkbox-if-checked-add-value-to-array
    let GendersChecked = e.currentTarget.checked;
    if(Gender.includes(e.currentTarget.value)) {
      TheGenderArray = TheGenderArray.filter((gender) =>  { 
        // console.log(gender)
        return (gender !== e.currentTarget.value)
      });
      setGender(TheGenderArray);
    }
    setGender(TheGenderArray);

  }

  const inputPriceHandler = (e) => {
    setFilters({...Filters, productPrices: e.target.value})
    // Filters.productPrices = inputPrice
    // console.log(Filters.productPrices)
    console.log(Filters)
  }

  console.log(Filters.productPrices)

  // useEffect(() => {
  //   Filters.productPrices = e.target.value;
  // }, [])

  return (
    <Grid container direction="column">
      <div className={secondaryHeaderCSS.stickySecondaryHeader}>
        <SecondaryHeader className={secondaryHeaderCSS.ProductsPaddingTop}>
          <h1 className={secondaryHeaderCSS.secondaryHeader}>All Products</h1>
          <nav className={secondaryHeaderCSS.secondaryHeaderNav}>
            <div
              className={`${secondaryHeaderCSS.filterToggle} ${secondaryHeaderCSS.filterToggleBtn}`}
            >
              {isFilterToggled ? (
                <Button onClick={closeFilters}>Hide Filters</Button>
              ) : (
                <Button onClick={openFilters}>Show Filters</Button>
              )}
            </div>
            <div className={secondaryHeaderCSS.sortBy}>
            <Button
          style={{textTransform: "capitalize", fontSize:"1rem", backgroundColor:"#f2f2f2" }}
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Sort By
        </Button>
        {/* {console.log(open)} */}
        <Popper style={{zIndex:"1000"}} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <div><MenuItem style={{fontSize:"0.88rem"}} onClick={highestPriceHandler}>Highest Price</MenuItem></div>
                    <div><MenuItem style={{fontSize:"0.88rem"}} onClick={lowestPriceHandler}>Lowest Price</MenuItem></div>
                    <div><MenuItem style={{fontSize:"0.88rem"}} onClick={topRatedHandler}>Top Rated</MenuItem></div>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
              
            </div>
            <div style={{maxWidth:"300px"}}>
            {Sizes.map((size, index) => {
    return (
        <FormControlLabel
        key={index}
        control={
          <Checkbox
            id={size.value}
            // checked={Sizes.inclues(size.value) ? true : false} "Same As indexOf(size.value) === -1 ?false: true"
            checked={Filters.productSizes[size.key]}
            onChange={onSizeFilterChange}
            value={size.value}
            name={size.value}
          />
        }
        label={size.key}
      />
    )
  })};
  </div>
            <div style={{maxWidth:"300px"}}>
            {Genders.map((gender, index) => {
    return (
        <FormControlLabel
        key={index}
        control={
          <Checkbox
            id={gender.value}
            // checked={Sizes.inclues(size.value) ? true : false} "Same As indexOf(size.value) === -1 ?false: true"
            checked={Filters.productGenders[gender.key]}
            onChange={onGenderFilterChange}
            value={gender.value}
            name={gender.value}
          />
        }
        label={gender.key}
      />
    )
  })}
  </div>
            <div style={{maxWidth:"300px"}}>
            {Colors.map((color, index) => {
    return (
        <FormControlLabel
        key={index}
        control={
          <Checkbox
            id={color.value}
            // checked={Sizes.inclues(size.value) ? true : false} "Same As indexOf(size.value) === -1 ?false: true"
            checked={Filters.productColors[color.key]}
            onChange={onColorFilterChange}
            value={color.value}
            name={color.value}
          />
        }
        label={color.key}
      />
    )
  })}
  </div>
            {/* <div style={{maxWidth:"300px"}}>
            {PricesRange.map((price, index) => {
    return (
        <FormControlLabel
        key={index}
        control={
          <Checkbox
            id={price.value}
            // checked={Sizes.inclues(size.value) ? true : false} "Same As indexOf(size.value) === -1 ?false: true"
            checked={Filters.productPrices[price.key]}
            onChange={onPriceFilterChange}
            value={price.value}
            name={price.value}
          />
        }
        label={price.key}
      />
    )
  })}
  </div> */}
  <div>
  <input type="range" onClick={inputPriceHandler} step={10} min={0} max={500} />
  </div>

          </nav>
          <div className={secondaryHeaderCSS.headerOffset}></div>
        </SecondaryHeader>
      </div>
      <Grid item container>
        <FilteringMenuTesting
          className={
            isFilterToggled
              ? filteringMenuNavCSS.showLeftNav
              : filteringMenuNavCSS.hideLeftNav
          }
        />
        <Grid item className={`${classes.grid12} ${classes.productGridResult}`}>
          {/* Products List Grid */}
          {loading ? (
            <Spinner />
          ) : error ? (
            <Message>{error}</Message>
          ) : (
            <>
            {(Filters.productSizes.length === 0 && Filters.productGenders.length === 0 && Filters.productPrices == 0 && Filters.productColors.length === 0) && <ProductGrid items={products} />}
            {(Filters.productSizes.length === 0 && Filters.productGenders.length === 0 && Filters.productPrices == 0 && Filters.productColors.length > 0) && <ProductGrid items={productsByColorOnly} />}
            {(Filters.productSizes.length === 0 && Filters.productGenders.length > 0 && Filters.productPrices == 0 && Filters.productColors.length === 0) && <ProductGrid items={newProductGenders} />}
            {(Filters.productSizes.length > 0 && Filters.productGenders.length === 0 && Filters.productPrices == 0 && Filters.productColors.length === 0) && <ProductGrid items={SizesFilteringOnly} />  }
            {(Filters.productSizes.length > 0 && Filters.productGenders.length === 0 && Filters.productPrices > 0 && Filters.productColors.length === 0) && <ProductGrid items={filterSizeOnlyByPrice} />  }
            {(Filters.productSizes.length === 0 && Filters.productGenders.length > 0 && Filters.productPrices > 0 && Filters.productColors.length === 0) && <ProductGrid items={filterGenderOnlyByPrice} />  }
            {(Filters.productSizes.length > 0 && Filters.productGenders.length > 0 && Filters.productPrices > 0 && Filters.productColors.length === 0) && <ProductGrid items={filterByPrice} />  }
            {(Filters.productSizes.length > 0 && Filters.productGenders.length === 0 && Filters.productPrices > 0 && Filters.productColors.length > 0) && <ProductGrid items={filterSizeNColorNPrice} />  }
            {(Filters.productSizes.length > 0 && Filters.productGenders.length === 0 && Filters.productPrices == 0 && Filters.productColors.length > 0) && <ProductGrid items={filterSizesNColors} />  }
            {(Filters.productSizes.length > 0 && Filters.productGenders.length > 0 && Filters.productPrices == 0 && Filters.productColors.length > 0) && <ProductGrid items={productsByColorSizeNGender} />  }
            {(Filters.productSizes.length === 0 && Filters.productGenders.length > 0 && Filters.productPrices == 0 && Filters.productColors.length > 0) && <ProductGrid items={filterGendersNColors} />  }
            {(Filters.productSizes.length === 0 && Filters.productGenders.length === 0 && Filters.productPrices > 0 && Filters.productColors.length === 0) && <ProductGrid items={filterByPriceOnly} />  }
            {(Filters.productSizes.length === 0 && Filters.productGenders.length === 0 && Filters.productPrices == 0 && Filters.productColors.length > 0) && <ProductGrid items={filterByColorsOnly} />  }
            {(Filters.productSizes.length === 0 && Filters.productGenders.length === 0 && Filters.productPrices > 0 && Filters.productColors.length > 0) && <ProductGrid items={filteryByColorsNPrices} />  }
            {(Filters.productSizes.length === 0 && Filters.productGenders.length > 0 && Filters.productPrices > 0 && Filters.productColors.length > 0) && <ProductGrid items={filteryByColorsNPricesNGenders} />  }
            {(Filters.productSizes.length > 0 && Filters.productGenders.length > 0 && Filters.productPrices > 0 && Filters.productColors.length > 0) && <ProductGrid items={filterByAll} />  }
            {(Filters.productSizes.length > 0 && Filters.productGenders.length > 0 && Filters.productPrices == 0 && Filters.productColors.length === 0) && <ProductGrid items={newProductsSizes} />  }
            
            <Paginate activeClass={`activePage`} pages={pages} pageNum={page} keyword={keyword ? keyword : ""} />
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductsPage;
