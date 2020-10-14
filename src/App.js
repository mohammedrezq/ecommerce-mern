import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from "react-router-dom";
import { Provider } from "react-redux";

/* Redux Store */
import Store from './Store';

import ProductsPage from "./Products/Pages/ProductsPage/ProductsPage";
import ProductPage from "./Products/Pages/ProductPage/ProductPage";
import CheckoutPage from "./Products/Pages/CheckoutPage/CheckoutPage";
import CartPage from "./Products/Pages/CartPage/CartPage";
import MainNavigation from "./Shared/Navigation/MainNavigation";
import NewProduct from "./Products/Pages/NewProduct/NewProduct";
import RegistrationPage from "./User/Pages/RegistrationPage";
import LoginPage from "./User/Pages/LoginPage";
import TopNavbar from "./Shared/Navigation/TopNavbar";

/* Testing Component */
import FormContainer from "./Shared/FormElements/FormContainer";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <TopNavbar />
        <MainNavigation />
        <Switch>
          <Route path="/" exact>
            <ProductsPage />
          </Route>
          <Route path="/product/:id" exact>
            <ProductPage />
          </Route>
          <Route path="/checkout" exact>
            <CheckoutPage />
          </Route>
          <Route path="/formcontainer" exact>
            <FormContainer />
          </Route>
          <Route path="/cart" exact>
            <CartPage />
          </Route>
          <Route path="/new-product" exact>
            <NewProduct />
          </Route>
          <Route path="/register" exact>
            <RegistrationPage />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
