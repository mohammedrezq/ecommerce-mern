import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { productDetailsReducer, productListReducer } from './Store/Reducers/productReducers';
import { cartReducer, addProductToCartReducer, setProductFeatureReducer } from './Store/Reducers/cartReducers';
import { userLoginReducer, userSignupReducer } from "./Store/Reducers/userReducers";

const reducer = combineReducers( {
    cart: cartReducer,
    addProductToCart: addProductToCartReducer,
    setProductFeature: setProductFeatureReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer,
    userLogin: userLoginReducer,
    userSignup: userSignupReducer,
} )

// const cartItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
const cartProductsFromStorage = localStorage.getItem("cartProducts") ? JSON.parse(localStorage.getItem("cartProducts")) : []
const userInfoFromStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null

const initialState = {
  // cart:{ cartItems: cartItemsFromStorage},
  addProductToCart: { cartProducts: cartProductsFromStorage },
  userLogin: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

const Store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
