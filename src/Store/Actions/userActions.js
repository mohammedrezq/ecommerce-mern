import axios from "axios";

import * as actionTypes from "./actionTypes";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/api/users/login",
      { email, password },
      config
    );

    dispatch({
      type: actionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: actionTypes.USER_LOGIN_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: actionTypes.USER_LOGOUT,
  });
};

export const signup = (
  email,
  password,
  fisrtName,
  lastName,
  DateOfBirth,
  Country,
  Gender,
) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.USER_SIGNUP_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/api/users/signup",
      {
        email,
        password,
        fisrtName,
        lastName,
        DateOfBirth,
        Country,
        Gender,
      },
      config
    );

    // Sign up user success
    dispatch({
      type: actionTypes.USER_SIGNUP_SUCCESS,
      payload: data,
    });

    // Login user success - Immediately after Signup successs -
    dispatch({
      type: actionTypes.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));

  } catch (err) {
    dispatch({
      type: actionTypes.USER_SIGNUP_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
