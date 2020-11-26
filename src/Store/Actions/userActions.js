import axios from "axios";

import * as actionTypes from "./actionTypes";

/**
 *
 * Logging in User
 *
 **/
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
      process.env.REACT_APP_BACKEND_URL+"/users/login",
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
  localStorage.removeItem("paymentMethod");
  localStorage.removeItem("shippingAddress");
  localStorage.removeItem("userOrders");
  dispatch({
    type: actionTypes.USER_LOGOUT,
  });
  dispatch({
    type: actionTypes.USER_DETAILS_RESET,
  });
  dispatch({
    type: actionTypes.ORDERS_LIST_USER_RESET,
  });
  dispatch({
    type: actionTypes.USERS_LIST_RESET,
  });
};

/**
 *
 * Registering New User
 *
 **/

export const signup = (
  email,
  password,
  firstName,
  lastName,
  DateOfBirth,
  Country,
  Gender
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
      process.env.REACT_APP_BACKEND_URL+"/users/signup",
      {
        email,
        password,
        firstName,
        lastName,
        DateOfBirth,
        Country,
        Gender,
      },
      config
    );

    const { users } = data;
    // Sign up user success
    dispatch({
      type: actionTypes.USER_SIGNUP_SUCCESS,
      payload: users,
    });

    // Login user success - Immediately after Signup successs -
    dispatch({
      type: actionTypes.USER_LOGIN_SUCCESS,
      payload: users,
    });

    localStorage.setItem("userInfo", JSON.stringify(users));
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

/**
 *
 * Get User Details
 *
 **/

export const getUserDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.USER_DETAILS_REQUEST,
    });

    const { userLogin: { userInfo } } = getState();

    // console.log(userInfo)

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/users/${id}`,
      config
    );

    console.log(data)

    const { user } = data;

    // console.log(user)
    // Sign up user success
    dispatch({
      type: actionTypes.USER_DETAILS_SUCCESS,
      payload: user,
    });

  } catch (err) {
    dispatch({
      type: actionTypes.USER_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
/**
 *
 * Delete User (Only Admin)
 *
 **/

export const deleteUser = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.USER_DELETE_REQUEST,
    });

    const { userLogin: { userInfo } } = getState();

    // console.log(userInfo)

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/users/${id}`,
      config
    );

    // console.log(data)

    // const { user } = data;

    // console.log(user)
    // Sign up user success
    dispatch({
      type: actionTypes.USER_DELETE_SUCCESS,
      // payload: user,
    });

  } catch (err) {
    dispatch({
      type: actionTypes.USER_DELETE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

/**
 *
 * User UPDATE Details
 *
 **/

// export const updateUserProfile = (user) => async (dispatch, getState) => {
//   // console.log(user)
//   try {
//     dispatch({ type: actionTypes.USER_UPDATE_PROFILE_REQUEST });

//     const {
//       userLogin: { userInfo },
//     } = getState();

//     // console.log(userInfo);

//     // const { user } = userInfo
//     // console.log(user)

//     // console.log(user)
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${userInfo.token}`,
//       },
//     };

//     const { data } = await axios.put(
//       `${process.env.REACT_APP_BACKEND_URL}/users/profile/`, user,
//       config
//     );

//     console.log(data)
//     console.log(userInfo)

//     // const {users} = data 
//     // const { user } = data;
//     console.log(user)
//     // Sign up user success
//     dispatch({
//       type: actionTypes.USER_UPDATE_PROFILE_SUCCESS,
//       payload: data,
//     });

//   } catch (err) {
//     dispatch({
//       type: actionTypes.USER_UPDATE_PROFILE_FAIL,
//       payload:
//         err.response && err.response.data.message
//           ? err.response.data.message
//           : err.message,
//     });
//   }
// };

/**
 *
 * Update User Details
 *
 **/

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.USER_UPDATE_PROFILE_REQUEST,
    });

    const { userLogin: { userInfo } } = getState();

    // console.log(userInfo)
    console.log(userInfo.token)
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put( `${process.env.REACT_APP_BACKEND_URL}/users/profile`, user, config );

    console.log(data)

    // const { user } = data;

    // console.log(user)
    // Sign up user success
    dispatch({
      type: actionTypes.USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data)); // Update User Settings in LocalStorage

  } catch (err) {
    dispatch({
      type: actionTypes.USER_UPDATE_PROFILE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

/**
 *
 * Get Users List
 *
 **/

export const usersList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.USERS_LIST_REQUEST,
    });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get( `${process.env.REACT_APP_BACKEND_URL}/users`,  config );


    dispatch({
      type: actionTypes.USERS_LIST_SUCCESS,
      payload: data,
    });


  } catch (err) {
    dispatch({
      type: actionTypes.USERS_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};


/**
 *
 * Update User Details By Admin
 *
 **/

export const updateUserByAdmin = (id, user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.USER_UPDATE_ADMIN_REQUEST,
    });

    const { userLogin: { userInfo } } = getState();

    // console.log(userInfo)
    // console.log(userInfo.token)
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put( `${process.env.REACT_APP_BACKEND_URL}/users/${id}`, user, config );

    // console.log(data)

    // const { users } = data;


    dispatch({
      type: actionTypes.USER_UPDATE_ADMIN_SUCCESS,
      payload: data,
    });

  } catch (err) {
    dispatch({
      type: actionTypes.USER_UPDATE_ADMIN_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};




/**
 *
 * Get User Details
 *
 **/

export const getUserDetailsForAdmin = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.USER_DETAILS_REQUEST,
    });

    const { userLogin: { userInfo } } = getState();

    // console.log(userInfo)

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/users/${id}`,
      config
    );

    // console.log(data)

    // const { user } = data;

    // console.log(user)
    // Sign up user success
    dispatch({
      type: actionTypes.USER_DETAILS_SUCCESS,
      payload: data,
    });

  } catch (err) {
    dispatch({
      type: actionTypes.USER_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};