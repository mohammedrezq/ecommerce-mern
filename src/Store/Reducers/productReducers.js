import * as actionTypes from '../Actions/actionTypes'

/* Reducer for Products List (ProductsPage) */
export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case actionTypes.PRODUCT_LIST_REQUEST:
        return { loading: true, products: [] }
      case actionTypes.PRODUCT_LIST_SUCCESS:
        return {
          loading: false,
          products: action.payload.products,
          pages: action.payload.pages,
          page: action.payload.page
        }
      case actionTypes.PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  

/* Reducer for Products List (ProductsPage By Highest Pirce) */
export const productListHighestPriceReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case actionTypes.PRODUCT_LIST_HIGHEST_REQUEST:
        return { loading: true, products: [] }
      case actionTypes.PRODUCT_LIST_HIGHEST_SUCCESS:
        return {
          loading: false,
          products: action.payload.products,
          pages: action.payload.pages,
          page: action.payload.page
        }
      case actionTypes.PRODUCT_LIST_HIGHEST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }

/* Reducer for Products List (ProductsPage By Lowest Pirce) */
export const productListLowestPriceReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case actionTypes.PRODUCT_LIST_LOWEST_REQUEST:
        return { loading: true, products: [] }
      case actionTypes.PRODUCT_LIST_LOWEST_SUCCESS:
        return {
          loading: false,
          products: action.payload.products,
          pages: action.payload.pages,
          page: action.payload.page
        }
      case actionTypes.PRODUCT_LIST_LOWEST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  

/* Reducer for Top Rated Products */
export const topRatedProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case actionTypes.TOP_RATED_PRODUCT_REQUEST:
        return { loading: true, products: [] }
      case actionTypes.TOP_RATED_PRODUCT_SUCCESS:
        return {
          loading: false,
          products: action.payload.products,
        }
      case actionTypes.TOP_RATED_PRODUCT_FAIL:
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

  /* Reducer for Products Delete (ProductsListPage) */
export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_DELETE_REQUEST:
      return { loading: true }
    case actionTypes.PRODUCT_DELETE_SUCCESS:
      return {
        loading: false,
        success: true
      }
    case actionTypes.PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
  /* Reducer for Create Product (New Product Admin) */
export const productCreateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_CREATE_REQUEST:
      return { loading: true }
    case actionTypes.PRODUCT_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        product: action.payload
      }
    case actionTypes.PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

  /* Reducer for Updating Product (Update Product Admin) */
export const productUpdateReducer = (state = { }, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_UPDATE_REQUEST:
      return { loading: true }
    case actionTypes.PRODUCT_UPDATE_SUCCESS:
      return {
        loading: false,
        success: true,
        product: action.payload
      }
    case actionTypes.PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

  /* Reducer for Creating Review for Product ( Create a Review for Product) */
export const productCreateReviewReducer = (state = { }, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };
    case actionTypes.PRODUCT_CREATE_REVIEW_SUCCESS:
      return {
        loading: false,
        success: true,
      };
    case actionTypes.PRODUCT_CREATE_REVIEW_RESET:
      return {};
    case actionTypes.PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}