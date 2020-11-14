import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import {
  productDetailsReducer,
  productListReducer,
  productDeleteReducer,
  productCreateReducer,
  productUpdateReducer,
} from "./Store/Reducers/productReducers";
import {
  cartReducer,
  addProductToCartReducer,
  setProductFeatureReducer,
} from "./Store/Reducers/cartReducers";
import {
  userLoginReducer,
  userSignupReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  userUpdateAdminReducer,
  usersListReducer,
  usersDeleteReducer,
} from "./Store/Reducers/userReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  ordersListUserReducer,
} from "./Store/Reducers/orderReducers";
import {
  categoryCreateReducer,
  categoriesListReducer,
  categoryUpdateReducer,
  categoryDetailsReducer,
  categoryDeleteReducer,
  categoryListUsersReducer,
  categoryUsersDetailsReducer
} from "./Store/Reducers/categoryReducers";

const reducer = combineReducers({
  cart: cartReducer,
  addProductToCart: addProductToCartReducer,
  setProductFeature: setProductFeatureReducer,
  productList: productListReducer,
  productDetails: productDetailsReducer,
  userLogin: userLoginReducer,
  userSignup: userSignupReducer,
  userDetails: userDetailsReducer,
  usersList: usersListReducer,
  userDelete: usersDeleteReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userUpdateAdmin: userUpdateAdminReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  ordersListUser: ordersListUserReducer,
  categoryCreate: categoryCreateReducer,
  categoriesList: categoriesListReducer,
  categoryUpdate: categoryUpdateReducer,
  categoryDetails: categoryDetailsReducer,
  categoryDelete: categoryDeleteReducer,
  categoryListUsers: categoryListUsersReducer,
  categoryUsersDetails: categoryUsersDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
});

// const cartItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
const cartProductsFromStorage = localStorage.getItem("cartProducts")
  ? JSON.parse(localStorage.getItem("cartProducts"))
  : [];
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};
const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : "";

const initialState = {
  // cart:{ cartItems: cartItemsFromStorage},
  addProductToCart: {
    cartProducts: cartProductsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: paymentMethodFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const Store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
