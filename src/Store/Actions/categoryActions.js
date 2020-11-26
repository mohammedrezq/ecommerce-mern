import axios from "axios";

import * as actionTypes from "./actionTypes";

/***
 * Category Create
 ***/
export const categoryCreateAction = (
  categoryTitle,
  categoryDescription,
  categoryImage,
) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.CATEGROY_CREATE_REQUEST,
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
      process.env.REACT_APP_BACKEND_URL+"/cats",
      {
        categoryTitle,
        categoryDescription,
        categoryImage
      },
      config
    );

    console.log(data);

    dispatch({
      type: actionTypes.CATEGROY_CREATE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.CATEGROY_CREATE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

/**
 *
 * Get Categories List (For Admin)
 *
 **/

export const catsList = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.CATS_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/cats`, config);

    dispatch({
      type: actionTypes.CATS_LIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.CATS_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

/**
 *
 * Update Category By Admin
 *
 **/

export const updateCategoryByAdmin = (id, cat) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: actionTypes.CAT_UPDATE_REQUEST,
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
      `${process.env.REACT_APP_BACKEND_URL}/cats/${id}`,
      cat,
      config
    );

    console.log(data);

    dispatch({
      type: actionTypes.CAT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.CAT_UPDATE_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

/**
 *
 * Get Category Details For Admin
 *
 **/

export const getCategoryDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.CAT_DETAILS_REQUEST,
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

    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/cats/${id}`,
      config
    );

    dispatch({
      type: actionTypes.CAT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.CAT_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};


/**
 *
 * Delete Category By Admin
 *
 **/

export const deleteCategory = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: actionTypes.CAT_DELETE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/cats/${id}`, config);

    dispatch({
      type: actionTypes.CAT_DELETE_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.CAT_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};



/**
 *
 * Get Categories List (For Users)
 *
 **/

export const catsListUsers = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.CATEGORY_LIST_REQUEST,
    });

    const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/categories`); // For All Users and Guests

    // console.log(data)
    dispatch({
      type: actionTypes.CATEGORY_LIST_SUCCESS,
      payload: data,
    });

  } catch (err) {
    dispatch({
      type: actionTypes.CATEGORY_LIST_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};


/**
 *
 * Get Category Details For Users
 *
 **/

export const getCategoryDetailsUser = (id) => async ( dispatch ) => {
  try {
    dispatch({
      type: actionTypes.CATEGORY_DETAILS_REQUEST,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    //   console.log(userInfo)

    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/categories/${id}`,
      // config
    );

    console.log(data);

    // const { category } = data;

    // console.log(user)
    // Sign up user success
    dispatch({
      type: actionTypes.CATEGORY_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.CATEGORY_DETAILS_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
