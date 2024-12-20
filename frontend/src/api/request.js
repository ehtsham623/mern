import axios from "axios";
import { handleLogout } from "../redux/slice/mainStateSlice";

export const callEndpoint = async (url, method, data, token, header) => {
  try {
    const headers = {
      accept: "application/json",
    };

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    } else {
      const accessToken =
        localStorage.getItem("accessToken") ||
        sessionStorage.getItem("accessToken");

      if (accessToken) headers.Authorization = `Bearer ${accessToken}`;
    }

    if (header) {
      headers["Content-Type"] = header;
    } else {
      headers["Content-Type"] = "application/json";
    }

    const res = await axios({
      url: url,
      method: method,
      data: data,
      headers: headers,
    });

    return {
      data: res.data.data,
      message: res.data.message,
      statusCode: res.status,
    };
  } catch (error) {
    if (error.response.status === 401) {
      handleLogout();
    }
    return {
      error: true,
      message: error.response.data.message,
      statusCode: error.response.status,
    };
  }
};

export const callDelete = async (url, data, token) => {
  return callEndpoint(url, "delete", data, token);
};

export const callGet = async (url, token) => {
  return callEndpoint(url, "get", {}, token);
};

export const callPost = async (url, data, token, header) => {
  return await callEndpoint(url, "post", data, token, header);
};

export const callPut = async (url, data, token) => {
  return callEndpoint(url, "put", data, token);
};
