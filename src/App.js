import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from "react-router-dom";
import ProductsPage from "./Products/Pages/ProductsPage/ProductsPage";
import ProductPage from "./Products/Pages/ProductPage/ProductPage";
import CheckoutPage from "./Products/Pages/CheckoutPage/CheckoutPage";
import CartPage from "./Products/Pages/CartPage/CartPage";
import MainNavigation from "./Shared/Navigation/MainNavigation";
import NewProduct from "./Products/Pages/NewProduct/NewProduct";

function App() {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <ProductsPage />
        </Route>
        <Route path="/product/:productTitle" exact>
          <ProductPage />
        </Route>
        <Route path="/checkout" exact>
          <CheckoutPage />
        </Route>
        <Route path="/cart" exact>
          <CartPage />
        </Route>
        <Route path="/new-product" exact>
          <NewProduct />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
