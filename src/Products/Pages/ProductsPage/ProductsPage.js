import React, { useState } from "react";
// import { useParams } from "react-router-dom";

import { Grid } from "@material-ui/core";

import ProductGrid from "../../Components/ProductGrid/ProductGrid";
import SecondaryHeader from "../../../Shared/UIElements/SecondaryHeader";
import classes from "../../Components/ProductGrid/ProductGrid.module.css";
// import productsPageStyle from "./ProductsPage.module.css";
import secondaryHeaderCSS from "../../../Shared/UIElements/SecondaryHeader.module.css";
import FilteringMenu from "../../../Shared/UIElements/FilteringMenu";
import filteringMenuNavCSS from "../../../Shared/UIElements/FilteringMenu.module.css";

/* DUMMY PRODUCTS WHICH TO BE REPLACED BY REAL PRODUCTS LATER!! */
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    category: "Polo Ralph Lauren",
    title: "Eyelet Cotton Short",
    description: " summer-ready shorts are crafted from lightweight cotton",
    imagesUrls: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4edb084f-2a20-4862-a34c-9e6c37bc887c/nigeria-2020-stadium-home-womens-soccer-jersey-xTkql2.jpg",
    ],
    price: "$199.99",
    creator: "u1",
  },
  {
    id: "p2",
    category: "Polo Ralph Lauren",
    title: "Eyelet Cotton Short",
    description: " summer-ready shorts are crafted from lightweight cotton",
    imagesUrls: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/i1-546e1a04-6704-4c5d-aa3a-127e4366d80d/yoga-luxe-womens-infinalon-crop-top-5XGffB.jpg",
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-61724aa6-618d-4ca6-a701-fbf1899d59af/dri-fit-mens-jdi-training-t-shirt-9t1Qfh.jpg",
    ],
    price: "$199.99",
    creator: "u2",
  },
  {
    id: "p3",
    category: "Polo Ralph Lauren",
    title: "Eyelet Cotton Short",
    description: " summer-ready shorts are crafted from lightweight cotton",
    imagesUrls: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-7bc28b20-174a-4b73-a72e-986401b01f98/rise-365-trail-mens-trail-running-top-K9rGqn.jpg",
    ],
    price: "$199.99",
    creator: "u2",
  },
  {
    id: "p9",
    category: "Polo Ralph Lauren",
    title: "Sophia Denim Short",
    description: " summer-ready shorts are crafted from lightweight cotton",
    imagesUrls: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e19a8c92-6d5d-484d-ae7f-d23f3130d263/jordan-23-enginereed-mens-short-sleeve-crew-07ZscC.jpg",
    ],
    price: "$199.99",
    creator: "u2",
  },
  {
    id: "p4",
    category: "Polo Ralph Lauren",
    title: "Eyelet Cotton Short",
    description: " summer-ready shorts are crafted from lightweight cotton",
    imagesUrls: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4edb084f-2a20-4862-a34c-9e6c37bc887c/nigeria-2020-stadium-home-womens-soccer-jersey-xTkql2.jpg",
    ],
    price: "$199.99",
    creator: "u2",
  },
  {
    id: "p5",
    category: "Polo Ralph Lauren",
    title: "Cotton Crewneck Sweater",
    description: " summer-ready shorts are crafted from lightweight cotton",
    imagesUrls: [
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a923ade6-a9e0-422c-95d1-07a36f46ecba/nikecourt-mens-long-sleeve-tennis-t-shirt-SJ2Kr4.jpg",
    ],
    price: "$199.99",
    creator: "u2",
  },
  {
    id: "p6",
    category: "Polo Ralph Lauren",
    title: "Eyelet Cotton Short",
    description: " summer-ready shorts are crafted from lightweight cotton",
    imagesUrls: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4edb084f-2a20-4862-a34c-9e6c37bc887c/nigeria-2020-stadium-home-womens-soccer-jersey-xTkql2.jpg",
    ],
    price: "$199.99",
    creator: "u2",
  },
];

const ProductsPage = () => {
  // const productTitle = useParams().productTitle;
  // const loadedProduct = DUMMY_PRODUCTS.filter(product => product.title === productTitle);

  const [isFilterToggled, setisFilterToggled] = useState(false);

  const openFilters = () => {
    setisFilterToggled(true);
  };
  const closeFilters = () => {
    setisFilterToggled(false);
  };

  console.log(isFilterToggled);
  return (
    <Grid container direction="column">
      <div className={secondaryHeaderCSS.stickySecondaryHeader}>
        <SecondaryHeader className={secondaryHeaderCSS.ProductsPaddingTop}>
          <h1 className={secondaryHeaderCSS.secondaryHeader}>All Products</h1>
          <nav className={secondaryHeaderCSS.secondaryHeaderNav}>
            <button
              className={`${secondaryHeaderCSS.filterToggle} ${secondaryHeaderCSS.filterToggleBtn}`}
            >
              {isFilterToggled ? (
                <span onClick={closeFilters}>Hide Filters</span>
              ) : (
                <span onClick={openFilters}>Show Filters</span>
              )}
            </button>
            <div className={secondaryHeaderCSS.sortBy}>
              <span>Sort By</span>
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
        />
        <Grid item className={`${classes.grid12} ${classes.productGridResult}`}>
          {/* Products List Grid */}
          <ProductGrid items={DUMMY_PRODUCTS} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductsPage;
