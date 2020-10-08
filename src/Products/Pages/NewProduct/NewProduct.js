import React from "react";

import NewProductForm from "../../Components/NewProductForm";
import './NewProduct.css';

const NewProduct = () => {
  return (
    <div className="add__new--product">
      <h1>Add New Product</h1>
      <NewProductForm />
    </div>
  )
}

export default NewProduct;