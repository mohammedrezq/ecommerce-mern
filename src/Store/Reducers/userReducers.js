import * as actionTypes from "../Actions/actionTypes";


// User Login Reducer
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN_REQUEST:
      return { loading: true };
    case actionTypes.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case actionTypes.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

// User Signup Reducer
export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_SIGNUP_REQUEST:
      return { loading: true };
    case actionTypes.USER_SIGNUP_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case actionTypes.USER_SIGNUP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};


// User Details (Info) Reducer
export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case actionTypes.USER_DETAILS_REQUEST:
      return { ...state ,loading: true };
    case actionTypes.USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case actionTypes.USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.USER_DETAILS_RESET:
      return { user: {} }
    default:
      return state;
  }
};

// Users List Reducer (admin)
export const usersListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case actionTypes.USERS_LIST_REQUEST:
      return { loading: true };
    case actionTypes.USERS_LIST_SUCCESS:
      return { loading: false, users: action.payload };
    case actionTypes.USERS_LIST_FAIL:
      return { loading: false, error: action.payload };
    case actionTypes.USERS_LIST_RESET:
      return { users: [] };
    default:
      return state;
  }
};

// Users Delete Reducer (admin)
export const usersDeleteReducer = (state = { }, action) => {
  switch (action.type) {
    case actionTypes.USER_DELETE_REQUEST:
      return { loading: true };
    case actionTypes.USER_DELETE_SUCCESS:
      return { loading: false, success: true };
    case actionTypes.USER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};



// User Details (Info) Reducer
export const userUpdateProfileReducer = (state = {  }, action) => {
  switch (action.type) {
    case actionTypes.USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case actionTypes.USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true , userInfo: action.payload };
    case actionTypes.USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    // case actionTypes.USER_UPDATE_PROFILE_RESET:
    //   return { loading: false };
    default:
      return state;
  }
};


// User Update Details By Admin (Admin) Reducer

export const userUpdateAdminReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case actionTypes.USER_UPDATE_ADMIN_REQUEST:
      return { loading: true };
    case actionTypes.USER_UPDATE_ADMIN_SUCCESS:
      return { loading: false, success: true };
    case actionTypes.USER_UPDATE_ADMIN_FAIL:
      return { loading: false, error: action.payload };
          case actionTypes.USER_UPDATE_ADMIN_RESET:
      return { user: {} };
    default:
      return state;
  }
};