import React from "react";
import { Route, Redirect, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = (props) => {
  const userLogin = useSelector((state) => state.userLogin);
  const location= useLocation();
  const redirect = location.search? location.search.split("=")[1] : 'checkout'

  const { userInfo } = userLogin;

  const condition = userInfo;

  return condition ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to={redirect ? `/login?redirect=${redirect}`: "/checkout"} />
  );
};
export default PrivateRoute;
