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
import ProductListPage from "./Products/Pages/ProductListPage/ProductListPage";
import NewProductForm from "./Products/Components/NewProductForm";
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
import OrderPage from "./Products/Pages/CheckoutPage/OrderPage";
import OrdersListPage from "./Products/Pages/CheckoutPage/OrdersListPage";
import UsersListPage from "./User/Pages/UsersListPage";
// import ProfileForm from "./User/Components/ProfileForm";
// import TestingNavbar from "./Shared/Navigation/TestingNavbar";

/* Testing Component */
import FormContainer from "./Shared/FormElements/FormContainer";
import ProfilePage from "./User/Pages/ProfilePage";
import UpdateUserPage from "./User/Pages/UpdateUserPage";
import CategoryCreateForm from "./Cats/Components/CategoryCreateForm";
import CategoriesListPage from "./Cats/Pages/CategoriesListPage";
import CateogryListUsersPage from "./Cats/Pages/CateogryListUsersPage";
import CategoryDetailsUsersPage from "./Cats/Pages/CategoryDetailsUsersPage";
import CategoryDetailsForm from "./Cats/Components/CategoryDetailsForm";
import CreateProductPage from "./Products/Pages/CreateProductPage/CreateProductPage";
import UpdateProductPage from "./Products/Pages/UpdateProductPage/UpdateProductPage";
import AddProductForm from "./Products/Components/AddProductForm";
import UpdateProductForm from "./Products/Components/UpdateProductForm";
// import { usersList } from "./Store/Actions/userActions";


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
          <Route path="/admin/userlist" exact>
            <UsersListPage />
          </Route>
          <Route path="/admin/productlist" exact>
            <ProductListPage />
          </Route>
          <Route path="/admin/category" exact>
            <CategoryCreateForm />
          </Route>
          <Route path="/admin/categorieslist" exact>
            <CategoriesListPage />
          </Route>
          <Route path="/categories" exact>
            <CateogryListUsersPage />
          </Route>
          <Route path="/category/:cid" exact>
            <CategoryDetailsUsersPage />
          </Route>
          <Route path="/admin/category/:cid/edit" exact>
            <CategoryDetailsForm />
          </Route>
          <Route path="/admin/user/:uid/edit" exact>
            <UpdateUserPage />
          </Route>
          <Route path="/placeorder" exact>
            <PlaceOrderPage />
          </Route>
          <Route path="/order/:oid" exact>
            <OrderPage />
          </Route>
          <Route path="/admin/ordersList" exact>
            <OrdersListPage />
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
          <Route path="/admin/new-product" exact>
            <CreateProductPage />
          </Route>
          <Route path="/admin/product/:pid/edit" exact>
            <UpdateProductPage />
          </Route>
          <Route path="/add-product" exact>
            <AddProductForm />
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
