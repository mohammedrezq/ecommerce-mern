import * as actionTypes from "../Actions/actionTypes";

// Category Create Reducer
export const categoryCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CATEGROY_CREATE_REQUEST:
      return { loading: true };
    case actionTypes.CATEGROY_CREATE_SUCCESS:
      return { loading: false, success: true, category: action.payload };
    case actionTypes.CATEGROY_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// Categories List Reducer (For Admin)
export const categoriesListReducer = (state = { cats: [] }, action) => {
  switch (action.type) {
    case actionTypes.CATS_LIST_REQUEST:
      return { loading: true };
    case actionTypes.CATS_LIST_SUCCESS:
      return { loading: false, cats: action.payload };
    case actionTypes.CATS_LIST_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.CATS_LIST_RESET:
      return { cats: [] };
    default:
      return state;
  }
};

export const categoryUpdateReducer = (state = { category: {} }, action) => {
  switch (action.type) {
    case actionTypes.CAT_UPDATE_REQUEST:
      return { loading: true };
    case actionTypes.CAT_UPDATE_SUCCESS:
      return { loading: false, success: true };
    case actionTypes.CAT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.CAT_UPDATE_RESET:
      return { category: {} };
    default:
      return state;
  }
};

// User Details (Info) Reducer
export const categoryDetailsReducer = (state = { category: {} }, action) => {
  switch (action.type) {
    case actionTypes.CAT_DETAILS_REQUEST:
      return { ...state, loading: true };
    case actionTypes.CAT_DETAILS_SUCCESS:
      return { loading: false, category: action.payload };
    case actionTypes.CAT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.CAT_DETAILS_RESET:
      return { category: {} };
    default:
      return state;
  }
};

export const categoryDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CAT_DELETE_REQUEST:
      return {loading: true};
    case actionTypes.CAT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case actionTypes.CAT_DETAILS_FAIL:
      return { loading: false,error: action.payload };
    default:
      return state;
  }
};


// Categories List Reducer (For Users)
export const categoryListUsersReducer = (state = { cats: [] }, action) => {
  switch (action.type) {
    case actionTypes.CATEGORY_LIST_REQUEST:
      return { loading: true };
    case actionTypes.CATEGORY_LIST_SUCCESS:
      return { loading: false, cats: action.payload };
    case actionTypes.CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
