import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import { Grid } from "@material-ui/core";

import { getCategoryDetailsUser } from "../../Store/Actions/categoryActions";
import { listProducts } from "../../Store/Actions/productsActions";
import ProductGrid from "../../Products/Components/ProductGrid/ProductGrid";
import Spinner from "../../Shared/UIElements/Spinner";
import Message from "../../Shared/UIElements/Message";


const CategoryDetailsUsersPage = () => {
  const catId = useParams().cid;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const categoryUsersDetails = useSelector(
    (state) => state.categoryUsersDetails
  );
  const {
    loading: loadingCategoryDetails,
    error: errorCategoryDetails,
    category,
  } = categoryUsersDetails;

  console.log(category);

  const allProducts = products.products;
  console.log(allProducts);

  useEffect(() => {
    dispatch(listProducts());
    dispatch(getCategoryDetailsUser(catId));
  }, [dispatch]);

  let productsInCategory;
  if (allProducts) {
    productsInCategory = allProducts.filter(
      (productCat) => productCat.Category === catId
    ); // Check if product has the same the category
  }
  console.log(productsInCategory);
  return (
    <div>
      Category Products Details
      <div>Products in {category.categoryTitle}</div>
      <Grid item className={`categoryProducts`}>
        {/* Products List Grid */}
        {loading ? (
          <Spinner />
        ) : error ? (
          <Message>{error}</Message>
        ) : (
          <ProductGrid items={productsInCategory} />
        )}
      </Grid>
    </div>
  );
};

export default CategoryDetailsUsersPage;
