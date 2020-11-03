import axios from "axios";

import * as actionTypes from "./actionTypes";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.ORDER_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    // console.log(userInfo)
    // console.log(userInfo.token);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    // {console.log(order)}
    // {console.log(config)}
    const { data } = await axios.post(
      `http://localhost:5000/api/orders`,
      order,
      config
    );

    // console.log(data);

    // const { user } = data;

    // console.log(user)
    // Sign up user success
    dispatch({
      type: actionTypes.ORDER_CREATE_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userOrders", JSON.stringify(data)); // User Orders in LocalStorage
  } catch (err) {
    dispatch({
      type: actionTypes.ORDER_CREATE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.ORDER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    console.log(userInfo);

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `http://localhost:5000/api/orders/${id}`,
      config
    );

    dispatch({
      type: actionTypes.ORDER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.ORDER_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const payOrder = (orderId, paymentResult) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: actionTypes.ORDER_PAY_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();
    // console.log(userInfo);

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    // console.log(paymentResult)
    const { data } = await axios.put(
      `http://localhost:5000/api/orders/${orderId}/pay`,
      paymentResult,
      config
    );

    console.log(data);

    dispatch({
      type: actionTypes.ORDER_PAY_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.ORDER_PAY_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
