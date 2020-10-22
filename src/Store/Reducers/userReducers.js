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
