import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import AddProductForm from "../../Components/AddProductForm";
import "./NewProduct.css";

const NewProduct = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <div className="add__new--product">
      <h1>Add New Product</h1>
      {userInfo && userInfo.isAdmin ? (
        <AddProductForm />
      ) : (
        <h2>
          Only Admins allowed, go back to <Link to="/">Home Page</Link> Or to{" "}
          <Link to="/login">Login</Link> if you are admin.
        </h2>
      )}
    </div>
  );
};

export default NewProduct;
