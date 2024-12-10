/* --- Server --- */

export const DEV_SERVER = process.env.REACT_APP_SERVER_URL;

/* --- Requests --- */

export const REQ = {
  LOGIN: DEV_SERVER + "/users/login",
  SIGNUP: DEV_SERVER + "/users/signup",
  GET_USER: DEV_SERVER + "/users",
  PRODUCTS: {
    GET_PRODUCTS: DEV_SERVER + "/products",
  },
};
