import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

import ProductGrid from "../../Components/ProductGrid/ProductGrid";
import SecondaryHeader from "../../../Shared/UIElements/SecondaryHeader";
import classes from "../../Components/ProductGrid/ProductGrid.module.css";
// import productsPageStyle from "./ProductsPage.module.css";
import secondaryHeaderCSS from "../../../Shared/UIElements/SecondaryHeader.module.css";
import FilteringMenu from "../../Components/ProductsFilters/FilteringMenu";
import filteringMenuNavCSS from "../../../Shared/UIElements/FilteringMenu.module.css";

import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import Spinner from "../../../Shared/UIElements/Spinner";
import Message from "../../../Shared/UIElements/Message";

import { listProducts } from "../../../Store/Actions/productsActions";
import { catsListUsers } from "../../../Store/Actions/categoryActions";
import Paginate from "../../../Shared/Navigation/Paginate";
import Sizes from "../../../Shared/Assets/Sizes";
import Genders from "../../../Shared/Assets/Gender";
import Colors from "../../../Shared/Assets/Colors";
import ProductsFilters from "../../Components/ProductsFilters/ProductsFilters";
import ProductsPriceRangeFilters from "../../Components/ProductsFilters/ProductsPriceRangeFilters";

import "./PorductsPage.css"

const ProductsPage = () => {
  const [open, setOpen] = useState(false);

  const [Filters, setFilters] = useState({
    productSizes: [],
    productGenders: [],
    productColors: [],
    productPrices: 0,
    highestPrices: [],
    lowestPrices: [],
    topRated: [],
    newestProducts: [],
  });

  const anchorRef = useRef(null);

  const dispatch = useDispatch();

  const keyword = useParams().keyword;

  const pageNumber = useParams().pageNumber || 1;

  // console.log(keyword)
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, pages, page } = productList;


  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  useEffect(() => {
    dispatch(catsListUsers());
  }, [dispatch]);

  const categoryListUsers = useSelector((state) => state.categoryListUsers);
  const { cats } = categoryListUsers;

  const [isFilterToggled, setisFilterToggled] = useState(false);

  const openFilters = () => {
    setisFilterToggled(true);
  };
  const closeFilters = () => {
    setisFilterToggled(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  let productsByColorOnly = products.filter((product) => {
    return product.Colors.some((colors) => {
      return Filters.productColors.includes(colors);
    });
  });


  let newProductGenders = products.filter((product) => {
    return product.Genders.some((genders) => {
      return Filters.productGenders.includes(genders);
    });
  });

  let newProductsSizes = newProductGenders.filter((product) => {
    return product.Sizes.some((sizes) => {
      return Filters.productSizes.includes(sizes);
    });
  });

  let productsByColorSizeNGender = newProductsSizes.filter((product) => {
    return product.Colors.some((colors) => {
      return Filters.productColors.includes(colors);
    });
  });


  let SizesFilteringOnly = products.filter((product) => {
    return product.Sizes.some((sizes) => {
      return Filters.productSizes.includes(sizes);
    });
  });

  let filterSizeOnlyByPrice = SizesFilteringOnly.filter((product) => {
    return product.Price <= Filters.productPrices;
  });

  let filterGenderOnlyByPrice = newProductGenders.filter((product) => {
    return product.Price <= Filters.productPrices;
  });

  let filterByPrice = newProductsSizes.filter((product) => {
    return product.Price <= Filters.productPrices;
  });

  let filterGendersNColors = newProductGenders.filter((product) => {
    return product.Colors.some((colors) => {
      return Filters.productColors.includes(colors);
    });
  });

  let filterSizesNColors = SizesFilteringOnly.filter((product) => {
    return product.Colors.some((colors) => {
      return Filters.productColors.includes(colors);
    });
  });

  let filterSizeNColorNPrice = filterSizeOnlyByPrice.filter((product) => {
    return product.Price <= Filters.productPrices;
  });

  let filterByPriceOnly = products.filter((product) => {
    return product.Price <= Filters.productPrices;
  });

  let filterByColorsOnly = products.filter((product) => {
    return product.Colors.some((colors) => {
      return Filters.productColors.includes(colors);
    });
  });

  let filteryByColorsNPrices = filterByColorsOnly.filter((product) => {
    return product.Price <= Filters.productPrices;
  });

  let filteryByColorsNPricesNGenders = filteryByColorsNPrices.filter(
    (product) => {
      return product.Genders.some((genders) => {
        return Filters.productGenders.includes(genders);
      });
    }
  );

  // Filter By Sizes, Gender, Colors and Price
  let filterByAll = productsByColorSizeNGender.filter((product) => {
    return product.Price <= Filters.productPrices;
  });


  const FiltersHandler = (e) => {
    let levalue = e.currentTarget.getAttribute('data-value');

    console.log(levalue)
    if(levalue === "highest") {
      let productSortedHighest = products.sort((a,b)=> {
        return(
          a.Price < b.Price ? 1 : -1
        )
      }
      )
      setFilters({
        ...Filters,
        highestPrices: productSortedHighest,
      });
    } else if(levalue === "lowest") {
      let productSortedLowest = products.sort((a,b)=> {
        return(
          a.Price > b.Price ? 1 : -1
        )
      }
      )
      setFilters({
        ...Filters,
        lowestPrices: productSortedLowest,
      });
    } else if (levalue === "toprated") {
      let productTopRated = products.sort((a,b)=> {
        return(
          a.Rating < b.Rating ? 1 : -1
        )
      }
      )
      setFilters({
        ...Filters,
        topRated: productTopRated,
      });
    } else if (levalue === "newest") {
      let newestProducts = products.sort((a,b) => {
        return (
          a.createdAt < b.createdAt ? 1 : -1
        )
      });
      setFilters({
        ...Filters,
        newestProducts: newestProducts
      });
    }
  };

  const onSizeFilterChange = (e) => {
    let TheSizesArray = [...Filters.productSizes, e.currentTarget.value]; // Filtering Array : https://stackoverflow.com/questions/61986464/react-checkbox-if-checked-add-value-to-array
    if (Filters.productSizes.includes(e.currentTarget.value)) {
      TheSizesArray = TheSizesArray.filter((size) => {
        return size !== e.currentTarget.value;
      });
      setFilters({
        ...Filters,
        productSizes: TheSizesArray,
      });
    }
    setFilters({
      ...Filters,
      productSizes: TheSizesArray,
    });
  };
  const onGenderFilterChange = (e) => {
    let theGenderArray = [...Filters.productGenders, e.currentTarget.value]; // Filtering Array : https://stackoverflow.com/questions/61986464/react-checkbox-if-checked-add-value-to-array
    if (Filters.productGenders.includes(e.currentTarget.value)) {
      theGenderArray = theGenderArray.filter((genders) => {
        return genders !== e.currentTarget.value;
      });
      setFilters({
        ...Filters,
        productGenders: theGenderArray,
      });
    }
    setFilters({
      ...Filters,
      productGenders: theGenderArray,
    });
  };

  const onColorFilterChange = (e) => {
    let theColorArray = [...Filters.productColors, e.currentTarget.value]; // Filtering Array : https://stackoverflow.com/questions/61986464/react-checkbox-if-checked-add-value-to-array
    if (Filters.productColors.includes(e.currentTarget.value)) {
      theColorArray = theColorArray.filter((color) => {
        return color !== e.currentTarget.value;
      });
      setFilters({
        ...Filters,
        productColors: theColorArray,
      });
    }
    setFilters({
      ...Filters,
      productColors: theColorArray,
    });
  };

  const inputPriceHandler = (e) => {
    setFilters({ ...Filters, productPrices: e.target.value });
  };


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
                style={{
                  textTransform: "capitalize",
                  fontSize: "1rem",
                  backgroundColor: "#f2f2f2",
                }}
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              >
                Sort By
              </Button>
              <Popper
                style={{ zIndex: "1000" }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          <div>
                            <MenuItem
                              style={{ fontSize: "0.88rem" }}
                              onClick={FiltersHandler}
                              data-value="newest"
                            >
                              Newest Products
                            </MenuItem>
                          </div>
                          <div>
                            <MenuItem
                              style={{ fontSize: "0.88rem" }}
                              onClick={FiltersHandler}
                              data-value="highest"
                            >
                              Highest Price
                            </MenuItem>
                          </div>
                          <div>
                            <MenuItem
                              style={{ fontSize: "0.88rem" }}
                              onClick={FiltersHandler}
                              data-value="lowest"
                            >
                              Lowest Price
                            </MenuItem>
                          </div>
                          <div>
                            <MenuItem
                              style={{ fontSize: "0.88rem" }}
                              onClick={FiltersHandler}
                              data-value="toprated"
                            >
                              Top Rated
                            </MenuItem>
                          </div>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>

          </nav>
          <div className={secondaryHeaderCSS.headerOffset}></div>
        </SecondaryHeader>
      </div>
      <Grid item container>
        <FilteringMenu
          className={
            isFilterToggled
              ? filteringMenuNavCSS.showLeftNav
              : filteringMenuNavCSS.hideLeftNav
          }
        >
          <h2>Category</h2>
      {cats &&
          cats.map((category, index) => {
            return (
              <Link
                key={index}
                className={`categoryItem isLink`}
                to={`/category/${category.id}`}
              >
                {category.categoryTitle}
              </Link>
            );
          })}
          <h2>Sizes</h2>
          <div className="size__Container">
        {Sizes.map((size, index) => {
          return (
            <ProductsFilters
              type="checkbox"
              key={index}
              Id={size.value}
              Filters={Filters.productSizes[size.key]}
              onChangeFilters={onSizeFilterChange}
              Value={size.value}
              Name={size.value}
              Label={size.value}
            />
          );
        })}
        </div>
          <h2>Colors</h2>
          <div className="color__Container">
        {Colors.map((color, index) => {
          return (
            <ProductsFilters
            conatinerClass="color__Container"
              type="checkbox"
              key={index}
              Id={color.value}
              Filters={Filters.productColors[color.key]}
              onChangeFilters={onColorFilterChange}
              Value={color.value}
              Name={color.value}
              Label={color.key}
            />
          );
        })}
        </div>
          <h2>Genders</h2>
          <div className="gender__Container">
        {Genders.map((gender, index) => {
          return (
            <ProductsFilters
              conatinerClass="gender__Container"
              type="checkbox"
              key={index}
              Id={gender.value}
              Filters={Filters.productGenders[gender.key]}
              onChangeFilters={onGenderFilterChange}
              Value={gender.value}
              Name={gender.value}
              Label={gender.key}
            />
          );
        })}
        </div>
        <h2>Price</h2>
        <div className="price__Container">
        {<ProductsPriceRangeFilters
          Type="range"
          onChange={inputPriceHandler}
          Steps="10"
          Min="0"
          Max="1000"
          Title={<div style={{fontSize: "20px", padding: "5px"}}>${Filters.productPrices}</div>}
        />}
        </div>
        </FilteringMenu>
        <Grid item className={`${classes.grid12} ${classes.productGridResult}`}>
          {/* Products List Grid */}
          {loading ? (
            <Spinner />
          ) : error ? (
            <Message>{error}</Message>
          ) : (
            <>
              {Filters.productSizes.length === 0 &&
                Filters.productGenders.length === 0 &&
                Filters.productPrices === 0 &&
                Filters.productColors.length === 0 && (
                  <ProductGrid items={products} />
                )}
              {Filters.productSizes.length === 0 &&
                Filters.productGenders.length === 0 &&
                Filters.productPrices === 0 &&
                Filters.productColors.length > 0 && (
                  <ProductGrid items={productsByColorOnly} />
                )}
              {Filters.productSizes.length === 0 &&
                Filters.productGenders.length > 0 &&
                Filters.productPrices === 0 &&
                Filters.productColors.length === 0 && (
                  <ProductGrid items={newProductGenders} />
                )}
              {Filters.productSizes.length > 0 &&
                Filters.productGenders.length === 0 &&
                Filters.productPrices === 0 &&
                Filters.productColors.length === 0 && (
                  <ProductGrid items={SizesFilteringOnly} />
                )}
              {Filters.productSizes.length > 0 &&
                Filters.productGenders.length === 0 &&
                Filters.productPrices > 0 &&
                Filters.productColors.length === 0 && (
                  <ProductGrid items={filterSizeOnlyByPrice} />
                )}
              {Filters.productSizes.length === 0 &&
                Filters.productGenders.length > 0 &&
                Filters.productPrices > 0 &&
                Filters.productColors.length === 0 && (
                  <ProductGrid items={filterGenderOnlyByPrice} />
                )}
              {Filters.productSizes.length > 0 &&
                Filters.productGenders.length > 0 &&
                Filters.productPrices > 0 &&
                Filters.productColors.length === 0 && (
                  <ProductGrid items={filterByPrice} />
                )}
              {Filters.productSizes.length > 0 &&
                Filters.productGenders.length === 0 &&
                Filters.productPrices > 0 &&
                Filters.productColors.length > 0 && (
                  <ProductGrid items={filterSizeNColorNPrice} />
                )}
              {Filters.productSizes.length > 0 &&
                Filters.productGenders.length === 0 &&
                Filters.productPrices === 0 &&
                Filters.productColors.length > 0 && (
                  <ProductGrid items={filterSizesNColors} />
                )}
              {Filters.productSizes.length > 0 &&
                Filters.productGenders.length > 0 &&
                Filters.productPrices === 0 &&
                Filters.productColors.length > 0 && (
                  <ProductGrid items={productsByColorSizeNGender} />
                )}
              {Filters.productSizes.length === 0 &&
                Filters.productGenders.length > 0 &&
                Filters.productPrices === 0 &&
                Filters.productColors.length > 0 && (
                  <ProductGrid items={filterGendersNColors} />
                )}
              {Filters.productSizes.length === 0 &&
                Filters.productGenders.length === 0 &&
                Filters.productPrices > 0 &&
                Filters.productColors.length === 0 && (
                  <ProductGrid items={filterByPriceOnly} />
                )}
              {Filters.productSizes.length === 0 &&
                Filters.productGenders.length === 0 &&
                Filters.productPrices === 0 &&
                Filters.productColors.length > 0 && (
                  <ProductGrid items={filterByColorsOnly} />
                )}
              {Filters.productSizes.length === 0 &&
                Filters.productGenders.length === 0 &&
                Filters.productPrices > 0 &&
                Filters.productColors.length > 0 && (
                  <ProductGrid items={filteryByColorsNPrices} />
                )}
              {Filters.productSizes.length === 0 &&
                Filters.productGenders.length > 0 &&
                Filters.productPrices > 0 &&
                Filters.productColors.length > 0 && (
                  <ProductGrid items={filteryByColorsNPricesNGenders} />
                )}
              {Filters.productSizes.length > 0 &&
                Filters.productGenders.length > 0 &&
                Filters.productPrices > 0 &&
                Filters.productColors.length > 0 && (
                  <ProductGrid items={filterByAll} />
                )}
              {Filters.productSizes.length > 0 &&
                Filters.productGenders.length > 0 &&
                Filters.productPrices === 0 &&
                Filters.productColors.length === 0 && (
                  <ProductGrid items={newProductsSizes} />
                )}

              <Paginate
                activeClass={`activePage`}
                pages={pages}
                pageNum={page}
                keyword={keyword ? keyword : ""}
              />
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductsPage;
