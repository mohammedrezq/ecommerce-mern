import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch,
} from "react-router-dom";
import ProductsPage from "./Containers/ProductsPage/ProductsPage";
import ProductPage from "./Containers/ProductPage/ProductPage";
import CheckoutPage from "./Containers/CheckoutPage/CheckoutPage";
import CartPage from "./Containers/CartPage/CartPage";
import MainNavigation from "./Components/Navigation/MainNavigation";

function App() {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <ProductsPage />
        </Route>
        <Route path="/product/:productId" exact>
          <ProductPage />
        </Route>
        <Route path="/checkout" exact>
          <CheckoutPage />
        </Route>
        <Route path="/cart" exact>
          <CartPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
