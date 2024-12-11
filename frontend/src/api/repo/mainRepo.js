import { callDelete, callGet, callPost } from "../request";

import { REQ } from "../reqEndpoints";

export const loginEndpoint = async (data) => {
  return await callPost(REQ.LOGIN, data, undefined);
};
export const signUpEndpoint = async (data) => {
  return await callPost(REQ.SIGNUP, data, undefined);
};

export const getLoggedInUserEndpoint = async () => {
  return await callGet(REQ.GET_USER, undefined);
};
export const getProductsEndpoint = async () => {
  return await callGet(REQ.PRODUCTS.GET_PRODUCTS, undefined);
};
