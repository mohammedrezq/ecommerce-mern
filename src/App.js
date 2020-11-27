import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

/* Redux Store */
import Store from "./Store";

import ProductsPage from "./Products/Pages/ProductsPage/ProductsPage";
import MainNavigation from "./Shared/Navigation/MainNavigation";
import TopNavbar from "./Shared/Navigation/TopNavbar";
import Footer from "./Shared/Navigation/Footer";
import Spinner from "./Shared/UIElements/Spinner";

import ProductPage from "./Products/Pages/ProductPage/ProductPage";
import ProductListPage from "./Products/Pages/ProductListPage/ProductListPage";
import CartPage from "./Products/Pages/CartPage/CartPage";
import NewProduct from "./Products/Pages/NewProduct/NewProduct";
import RegistrationPage from "./User/Pages/RegistrationPage";
import LoginPage from "./User/Pages/LoginPage";
import ShippingPage from "./Products/Pages/CheckoutPage/ShippingPage";
import PaymentPage from "./Products/Pages/CheckoutPage/PaymentPage";
import PlaceOrderPage from "./Products/Pages/CheckoutPage/PlaceOrderPage";
import OrderPage from "./Products/Pages/CheckoutPage/OrderPage";
import OrdersListPage from "./Products/Pages/CheckoutPage/OrdersListPage";
import UsersListPage from "./User/Pages/UsersListPage";
import ProfilePage from "./User/Pages/ProfilePage";
import UpdateUserPage from "./User/Pages/UpdateUserPage";
import CategoryCreateForm from "./Cats/Components/CategoryCreateForm";
import CategoriesListPage from "./Cats/Pages/CategoriesListPage";
import CategoryListUsersPage from "./Cats/Pages/CategoryListUsersPage";
import CategoryDetailsUsersPage from "./Cats/Pages/CategoryDetailsUsersPage";
import CategoryDetailsForm from "./Cats/Components/CategoryDetailsForm";
import UpdateProductPage from "./Products/Pages/UpdateProductPage/UpdateProductPage";
import ErrorPage from "./Products/Pages/ErrorPage/ErrorPage";

// const ProductListPage = React.lazy(() => import("./Products/Pages/ProductListPage/ProductListPage"));
// const CartPage = React.lazy(() => import("./Products/Pages/CartPage/CartPage"));
// const NewProduct = React.lazy(() => import("./Products/Pages/NewProduct/NewProduct"));
// const RegistrationPage = React.lazy(() => import("./User/Pages/RegistrationPage"));
// const LoginPage = React.lazy(() => import("./User/Pages/LoginPage"));
// const ShippingPage = React.lazy(() => import("./Products/Pages/CheckoutPage/ShippingPage"));
// const PaymentPage = React.lazy(() => import("./Products/Pages/CheckoutPage/PaymentPage"));
// const PlaceOrderPage = React.lazy(() => import("./Products/Pages/CheckoutPage/PlaceOrderPage"));
// const OrderPage = React.lazy(() => import("./Products/Pages/CheckoutPage/OrderPage"));
// const OrdersListPage = React.lazy(() => import("./Products/Pages/CheckoutPage/OrdersListPage"));
// const UsersListPage = React.lazy(() => import("./User/Pages/UsersListPage"));
// const ProfilePage = React.lazy(() => import("./User/Pages/ProfilePage"));
// const UpdateUserPage = React.lazy(() => import("./User/Pages/UpdateUserPage"));
// const CategoryCreateForm = React.lazy(() => import("./Cats/Components/CategoryCreateForm"));
// const CategoriesListPage = React.lazy(() => import("./Cats/Pages/CategoriesListPage"));
// const CategoryListUsersPage = React.lazy(() => import("./Cats/Pages/CategoryListUsersPage"));
// const CategoryDetailsUsersPage = React.lazy(() => import("./Cats/Pages/CategoryDetailsUsersPage"));
// const CategoryDetailsForm = React.lazy(() => import("./Cats/Components/CategoryDetailsForm"));
// const UpdateProductPage = React.lazy(() => import("./Products/Pages/UpdateProductPage/UpdateProductPage"));
// const ErrorPage = React.lazy(() => import("./Products/Pages/ErrorPage/ErrorPage"));


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
          <Suspense fallback={<Spinner />}>
            <Route path="/page/:pageNumber" exact>
              <ProductsPage />
            </Route>
            <Route path="/search/:keyword/page/:pageNumber" exact>
              <ProductsPage />
            </Route>
            <Route path="/search/:keyword">
              <ProductsPage />
            </Route>
            <Route path="/product/:id" exact>
              <ProductPage />
            </Route>
            <Route path="/404" exact>
              <ErrorPage />
            </Route>
            <Route path="/shipping" exact>
              <ShippingPage />
            </Route>
            <Route path="/payment" exact>
              <PaymentPage />
            </Route>
            <Route path="/admin/userslist" exact>
              <UsersListPage />
            </Route>
            <Route path="/admin/productslist" exact>
              <ProductListPage />
            </Route>
            <Route path="/admin/productslist/:pageNumber" exact>
              <ProductListPage />
            </Route>
            <Route path="/admin/category" exact>
              <CategoryCreateForm />
            </Route>
            <Route path="/admin/categorieslist" exact>
              <CategoriesListPage />
            </Route>
            <Route path="/categories" exact>
              <CategoryListUsersPage />
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
            <Route path="/admin/orderslist" exact>
              <OrdersListPage />
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
            <Route path="/admin/product/:pid/edit" exact>
              <UpdateProductPage />
            </Route>
            <Route path="/cart/:id?">
              <CartPage />
            </Route>
            <Route path="/admin/new-product" exact>
              <NewProduct />
            </Route>
            <Route path="/register" exact>
              <RegistrationPage />
            </Route>
            <Route path="/login" exact>
              <LoginPage />
            </Route>
          </Suspense>
        </Switch>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
