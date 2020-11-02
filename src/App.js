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
// import CheckoutPage from "./Products/Pages/CheckoutPage/CheckoutPage";
import CartPage from "./Products/Pages/CartPage/CartPage";
import MainNavigation from "./Shared/Navigation/MainNavigation";
import NewProduct from "./Products/Pages/NewProduct/NewProduct";
import RegistrationPage from "./User/Pages/RegistrationPage";
import LoginPage from "./User/Pages/LoginPage";
import TopNavbar from "./Shared/Navigation/TopNavbar";
import TheModal from "./Shared/UIElements/TheModal";
import CartModal from "./Shared/UIElements/CartModal";
// import Accordion from "./Products/PagesF/CheckoutPage/Accordion";
import ShippingPage from "./Products/Pages/CheckoutPage/ShippingPage";
import PaymentPage from "./Products/Pages/CheckoutPage/PaymentPage";
import PlaceOrderPage from "./Products/Pages/CheckoutPage/PlaceOrderPage";
// import ProfileForm from "./User/Components/ProfileForm";
// import TestingNavbar from "./Shared/Navigation/TestingNavbar";

/* Testing Component */
import FormContainer from "./Shared/FormElements/FormContainer";
import ProfilePage from "./User/Pages/ProfilePage";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        {/* <TestingNavbar /> */}
        <TopNavbar />
        <MainNavigation />
        <Switch>
          <Route path="/" exact>
            <ProductsPage />
          </Route>
          <Route path="/product/:id" exact>
            <ProductPage />
          </Route>
          <Route path="/shipping" exact>
            <ShippingPage />
          </Route>
          <Route path="/payment" exact>
            <PaymentPage />
          </Route>
          <Route path="/placeorder" exact>
            <PlaceOrderPage />
          </Route>
          {/* <Route path="/accordion" exact>
            <Accordion />
          </Route> */}
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/formcontainer" exact>
            <FormContainer />
          </Route>
          <Route path="/modaltesting" exact>
            <TheModal />
          </Route>
          <Route path="/cartmodal" exact>
            <CartModal />
          </Route>
          <Route path="/cart/:id?">
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
