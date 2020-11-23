import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { catsListUsers } from "../../../Store/Actions/categoryActions";

import classes from "./FilteringMenu.module.css";
import ProductsFilters from "./ProductsFilters";

//https://www.w3schools.com/howto/howto_js_sidenav.asp
const FilteringMenuTesting = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(catsListUsers());
  }, [dispatch]);
  const categoryListUsers = useSelector((state) => state.categoryListUsers);
  const { cats } = categoryListUsers;

  // console.log(cats);
  return (
    <div className={props.className}>
      <nav>
        <div style={{ width: "192px" }}>
          {props.children}
        </div>
      </nav>
    </div>
  );
};

export default FilteringMenuTesting;
