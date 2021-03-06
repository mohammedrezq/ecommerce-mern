// Product Page to Cart Page
export const CART_ADD_ITEM = "CART_ADD_ITEM";
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";

// Product Page add Product To Cart Page on Button Click [ CART ACTIONS ]
export const PRODUCT_ADD_REQUEST = "PRODUCT_ADD_REQUEST";
export const PRODUCT_ADDED_ON_CLICK_SUCCESS = "PRODUCT_ADDED_ON_CLICK_SUCCESS";
export const PRODUCT_ADDED_ON_CLICK_FAIL = "PRODUCT_ADDED_ON_CLICK_FAIL";
export const PRODUCT_REMOVED_ON_CLICK = "PRODUCT_REMOVED_ON_CLICK";
export const PRODUCT_UPDATE_QUANTITY = "PRODUCT_UPDATE_QUANTITY";

// Product Page Manage Size and Qunatity State

export const PRODUCT_SIZE_SET = "PRODUCT_SIZE_SET";
export const PRODUCT_QTY_SET = "PRODUCT_QTY_SET";


// MainNavigation
export const GET_PRODUCT_NUMBER_CART = "GET_PRODUCT_NUMBER_CART";

// Product List
export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST";
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS";
export const PRODUCT_LIST_FAIL  = "PRODUCT_LIST_FAIL";

// Product List (Highest Price)
export const PRODUCT_LIST_HIGHEST_REQUEST = "PRODUCT_LIST_HIGHEST_REQUEST";
export const PRODUCT_LIST_HIGHEST_SUCCESS = "PRODUCT_LIST_HIGHEST_SUCCESS";
export const PRODUCT_LIST_HIGHEST_FAIL  = "PRODUCT_LIST_HIGHEST_FAIL";

// Product List (Lowest Price)
export const PRODUCT_LIST_LOWEST_REQUEST = "PRODUCT_LIST_LOWEST_REQUEST";
export const PRODUCT_LIST_LOWEST_SUCCESS = "PRODUCT_LIST_LOWEST_SUCCESS";
export const PRODUCT_LIST_LOWEST_FAIL  = "PRODUCT_LIST_LOWEST_FAIL";

// Top Rated Products
export const TOP_RATED_PRODUCT_REQUEST = "TOP_RATED_PRODUCT_REQUEST";
export const TOP_RATED_PRODUCT_SUCCESS = "TOP_RATED_PRODUCT_SUCCESS";
export const TOP_RATED_PRODUCT_FAIL  = "TOP_RATED_PRODUCT_FAIL";

// Product Delete
export const PRODUCT_DELETE_REQUEST = "PRODUCT_DELETE_REQUEST";
export const PRODUCT_DELETE_SUCCESS = "PRODUCT_DELETE_SUCCESS";
export const PRODUCT_DELETE_FAIL  = "PRODUCT_DELETE_FAIL";

// Product Create
export const PRODUCT_CREATE_REQUEST = "PRODUCT_CREATE_REQUEST";
export const PRODUCT_CREATE_SUCCESS = "PRODUCT_CREATE_SUCCESS";
export const PRODUCT_CREATE_FAIL  = "PRODUCT_CREATE_FAIL";

// Product Details
export const PRODUCT_DETAILS_REQUEST = "PRODUCT_DETAILS_REQUEST";
export const PRODUCT_DETAILS_SUCCESS = "PRODUCT_DETAILS_SUCCESS";
export const PRODUCT_DETAILS_FAIL  = "PRODUCT_DETAILS_FAIL";

// Product Update
export const PRODUCT_UPDATE_REQUEST = "PRODUCT_UPDATE_REQUEST";
export const PRODUCT_UPDATE_SUCCESS = "PRODUCT_UPDATE_SUCCESS";
export const PRODUCT_UPDATE_FAIL  = "PRODUCT_UPDATE_FAIL";
export const PRODUCT_UPDATE_RESET  = "PRODUCT_UPDATE_RESET";

// Product Update
export const PRODUCT_CREATE_REVIEW_REQUEST = "PRODUCT_CREATE_REVIEW_REQUEST";
export const PRODUCT_CREATE_REVIEW_SUCCESS = "PRODUCT_CREATE_REVIEW_SUCCESS";
export const PRODUCT_CREATE_REVIEW_FAIL  = "PRODUCT_CREATE_REVIEW_FAIL";
export const PRODUCT_CREATE_REVIEW_RESET = "PRODUCT_CREATE_REVIEW_RESET";

/* User Actions */
// User Login
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const USER_LOGOUT = "USER_LOGOUT";

// User Signup
export const USER_SIGNUP_REQUEST = "USER_SIGNUP_REQUEST";
export const USER_SIGNUP_SUCCESS = "USER_SIGNUP_SUCCESS";
export const USER_SIGNUP_FAIL = "USER_SIGNUP_FAIL";


// GET User Details (Info)
export const USER_DETAILS_REQUEST = "USER_DETAILS_REQUEST";
export const USER_DETAILS_SUCCESS = "USER_DETAILS_SUCCESS";
export const USER_DETAILS_FAIL = "USER_DETAILS_FAIL";
export const USER_DETAILS_RESET = "USER_DETAILS_RESET";

// GET Users List (Admin)
export const USERS_LIST_REQUEST = "USERS_LIST_REQUEST";
export const USERS_LIST_SUCCESS = "USERS_LIST_SUCCESS";
export const USERS_LIST_FAIL = "USERS_LIST_FAIL";
export const USERS_LIST_RESET = "USERS_LIST_RESET";

// Delete User (Only for Admin)
export const USER_DELETE_REQUEST = "USER_DELETE_REQUEST";
export const USER_DELETE_SUCCESS = "USER_DELETE_SUCCESS";
export const USER_DELETE_FAIL = "USER_DELETE_FAIL";

// UPDATE User Details (Info)
export const USER_UPDATE_PROFILE_REQUEST = "USER_UPDATE_PROFILE_REQUEST";
export const USER_UPDATE_PROFILE_SUCCESS = "USER_UPDATE_PROFILE_SUCCESS";
export const USER_UPDATE_PROFILE_FAIL = "USER_UPDATE_PROFILE_FAIL";
export const USER_UPDATE_PROFILE_RESET = "USER_UPDATE_PROFILE_RESET";


// UPDATE User Details By Admin (Admin)
export const USER_UPDATE_ADMIN_REQUEST = "USER_UPDATE_ADMIN_REQUEST";
export const USER_UPDATE_ADMIN_SUCCESS = "USER_UPDATE_ADMIN_SUCCESS";
export const USER_UPDATE_ADMIN_FAIL = "USER_UPDATE_ADMIN_FAIL";
export const USER_UPDATE_ADMIN_RESET = "USER_UPDATE_ADMIN_RESET";

// Checkout Info
export const CART_SAVE_SHIPPING_ADDRESS = "CART_SAVE_SHIPPING_ADDRESS"; //(Cart Actions and Reducers)
export const CART_SAVE_PAYMENT_METHOD = "CART_SAVE_PAYMENT_METHOD"; //(Cart Actions and Reducers)


// Orders
export const ORDER_CREATE_REQUEST = "ORDER_CREATE_REQUEST";
export const ORDER_CREATE_SUCCESS = "ORDER_CREATE_SUCCESS";
export const ORDER_CREATE_FAIL = "ORDER_CREATE_FAIL";

// Orders BY ID
export const ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST";
export const ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS";
export const ORDER_DETAILS_FAIL = "ORDER_DETAILS_FAIL";

// Order Updated Paid Status
export const ORDER_PAY_REQUEST = "ORDER_PAY_REQUEST";
export const ORDER_PAY_SUCCESS = "ORDER_PAY_SUCCESS";
export const ORDER_PAY_FAIL = "ORDER_PAY_FAIL";
export const ORDER_PAY_RESET = "ORDER_PAY_RESET";

// Order Updated Delivered Status
export const ORDER_DELIVER_REQUEST = "ORDER_DELIVER_REQUEST";
export const ORDER_DELIVER_SUCCESS = "ORDER_DELIVER_SUCCESS";
export const ORDER_DELIVER_FAIL = "ORDER_DELIVER_FAIL";
export const ORDER_DELIVER_RESET = "ORDER_DELIVER_RESET";

// Orders BY USER
export const ORDERS_LIST_USER_REQUEST = "ORDERS_LIST_USER_REQUEST";
export const ORDERS_LIST_USER_SUCCESS = "ORDERS_LIST_USER_SUCCESS";
export const ORDERS_LIST_USER_FAIL = "ORDERS_LIST_USER_FAIL";
export const ORDERS_LIST_USER_RESET = "ORDERS_LIST_USER_RESET";

// Orders List Admin
export const ORDERS_LIST_REQUEST = "ORDERS_LIST_REQUEST";
export const ORDERS_LIST_SUCCESS = "ORDERS_LIST_SUCCESS";
export const ORDERS_LIST_FAIL = "ORDERS_LIST_FAIL";
export const ORDERS_LIST_RESET = "ORDERS_LIST_RESET";



/* Category */


// Category Create
export const CATEGROY_CREATE_REQUEST = "CATEGROY_CREATE_REQUEST";
export const CATEGROY_CREATE_SUCCESS = "CATEGROY_CREATE_SUCCESS";
export const CATEGROY_CREATE_FAIL = "CATEGROY_CREATE_FAIL";

// Get Category List 
export const CATS_LIST_REQUEST = "CATS_LIST_REQUEST";
export const CATS_LIST_SUCCESS = "CATS_LIST_SUCCESS";
export const CATS_LIST_FAIL = "CATS_LIST_FAIL";
export const CATS_LIST_RESET = "CATS_LIST_RESET";


// Update Category 
export const CAT_UPDATE_REQUEST = "CAT_UPDATE_REQUEST";
export const CAT_UPDATE_SUCCESS = "CAT_UPDATE_SUCCESS";
export const CAT_UPDATE_FAIL = "CAT_UPDATE_FAIL";
export const CAT_UPDATE_RESET = "CAT_UPDATE_RESET";

// Get Category By ID
export const CAT_DETAILS_REQUEST = "CAT_DETAILS_REQUEST";
export const CAT_DETAILS_SUCCESS = "CAT_DETAILS_SUCCESS";
export const CAT_DETAILS_FAIL = "CAT_DETAILS_FAIL";
export const CAT_DETAILS_RESET = "CAT_DETAILS_RESET";

// Delete Category By ID
export const CAT_DELETE_REQUEST = "CAT_DELETE_REQUEST";
export const CAT_DELETE_SUCCESS = "CAT_DELETE_SUCCESS";
export const CAT_DELETE_FAIL = "CAT_DELETE_FAIL";

// Get Category List (USERS)
export const CATEGORY_LIST_REQUEST = "CATEGORY_LIST_REQUEST";
export const CATEGORY_LIST_SUCCESS = "CATEGORY_LIST_SUCCESS";
export const CATEGORY_LIST_FAIL = "CATEGORY_LIST_FAIL";

// Get Category By ID (USERS)
export const CATEGORY_DETAILS_REQUEST = "CATEGORY_DETAILS_REQUEST";
export const CATEGORY_DETAILS_SUCCESS = "CATEGORY_DETAILS_SUCCESS";
export const CATEGORY_DETAILS_FAIL = "CATEGORY_DETAILS_FAIL";
