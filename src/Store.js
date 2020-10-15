import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { productDetailsReducer, productListReducer } from './Store/Reducers/productReducers';
import {cartReducer} from './Store/Reducers/cartReducers';

const reducer = combineReducers( {
    cart: cartReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer
} )

const cartItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []

const initialState = {
  cart:{ cartItems: cartItemsFromStorage}
};

const middleware = [thunk];

const Store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default Store;
