import axios from "axios";

import * as actionTypes from "./actionTypes";

// CREATE an Order (Make an Order)
export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.ORDER_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/orders`,
      order,
      config
    );


    // const { user } = data;

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

// GET THE Order Details
export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.ORDER_DETAILS_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/orders/${id}`,
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

// Pay Order Action (PayPal)
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

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/orders/${orderId}/pay`,
      paymentResult,
      config
    );


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

// Reset after pay
export const orderReset = () => async (dispatch) => {
  dispatch({ type: actionTypes.ORDER_PAY_RESET });
};

// Deliver Order Action
export const deliverOrder = (order) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: actionTypes.ORDER_DELIVER_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/orders/${order._id}/deliver`,
      {},
      config
    );


    dispatch({
      type: actionTypes.ORDER_DELIVER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.ORDER_DELIVER_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

// Reset after Deliver
export const orderDeliverReset = () => async (dispatch) => {
  dispatch({ type: actionTypes.ORDER_DELIVER_RESET });
};

// Get Orders For the Logged in User
export const getUserListOrders = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.ORDERS_LIST_USER_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/orders/myorders`,
      config
    );

    dispatch({
      type: actionTypes.ORDERS_LIST_USER_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.ORDERS_LIST_USER_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const getOrdersList = () => async(dispatch, getState) => {
  try {
    dispatch({type: actionTypes.ORDERS_LIST_REQUEST})

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/orders`, config);

    dispatch({
      type: actionTypes.ORDERS_LIST_SUCCESS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: actionTypes.ORDERS_LIST_FAIL,
      payload: err.response && err.response.data.message ? err.response.data.message: err.message
    })
  }
}