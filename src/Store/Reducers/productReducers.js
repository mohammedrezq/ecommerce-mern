import * as actionTypes from '../Actions/actionTypes'

/* Reducer for Products List (ProductsPage) */
export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case actionTypes.PRODUCT_LIST_REQUEST:
        return { loading: true, products: [] }
      case actionTypes.PRODUCT_LIST_SUCCESS:
        return {
          loading: false,
          products: action.payload
        }
      case actionTypes.PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  /* Reducer for Product Details (ProductPage) */
  export const productDetailsReducer = (
    state = { product: { product:{ Reviews: [] } } },
    action
  ) => {
    switch (action.type) {
      case actionTypes.PRODUCT_DETAILS_REQUEST:
        return { loading: true, ...state }
      case actionTypes.PRODUCT_DETAILS_SUCCESS:
        return { loading: false, product: action.payload }
      case actionTypes.PRODUCT_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }