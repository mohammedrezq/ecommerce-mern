import axios from "axios";

import * as actionTypes from "./actionTypes";

// export const addToCart = (productName) => {
//   return {
//     type: actionTypes.ADD_PRODUCT_TO_CART,
//     payload: productName,
//   };
// };

// export const getProductsNumber = () => {
//   return {
//     type: actionTypes.GET_PRODUCT_NUMBER_CART,
//   };
// };

// NEW /* GET All Products */

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("http://localhost:5000/api/products");

    dispatch({
      type: actionTypes.PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.PRODUCT_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const listProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(
      `http://localhost:5000/api/products/${id}`
    );
    dispatch({ type: actionTypes.PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: actionTypes.PRODUCT_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
    });
  }
};

/* GET Product Details By ID */
// export const listProductDetails = (productId) => async (dispatch) => {
//   try {
//     dispatch({ type: actionTypes.PRODUCT_DETAILS_REQUEST, payload: productId });

//     const { data } = await axios.get(`http://localhost:5000/api/products/5f83bb785334a975a4ac287a`);

//     dispatch({
//       type: actionTypes.PRODUCT_DETAILS_SUCCESS,
//       payload: data,
//     });
//   } catch (err) {
//     dispatch({
//       type: actionTypes.PRODUCT_DETAILS_FAIL,
//       payload:
//         err.response && err.response.data.message
//           ? err.response.data.message
//           : err.message,
//     });
//   }
// };