import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";

import { getCategoryDetailsUser } from "../../Store/Actions/categoryActions";
import { listProducts } from "../../Store/Actions/productsActions";
import ProductGridCategory from "../../Products/Components/ProductGridCategory/ProductGridCategory";
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
    category,
  } = categoryUsersDetails;


  const allProducts = products;

  useEffect(() => {
    dispatch(listProducts());
    dispatch(getCategoryDetailsUser(catId));
  }, [dispatch, catId]);

  let productsInCategory;
  if (allProducts) {
    productsInCategory = allProducts.filter(
      (productCat) => productCat.Category.includes(catId)
    ); // Check if product has the same the category
  }
  console.log(productsInCategory);
  return ( loadingCategoryDetails ? <Spinner />: (
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
          <ProductGridCategory items={productsInCategory} />
        )}
      </Grid>
    </div>
  )
  );
};

export default CategoryDetailsUsersPage;
