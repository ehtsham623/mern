import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import {
  loginEndpoint,
  signUpEndpoint,
  getLoggedInUserEndpoint,
  getProductsEndpoint,
} from "../../api/repo/mainRepo";

const initialState = {
  loginData: {},
  loginLoading: false,
  signUpLoading: false,
  getLoggedInUserLoading: false,
  getProductsLoading: false,
  message: "",
  statusCode: "",
};

export const login = createAsyncThunk(
  "mainState/login",
  async ({ isRememberMe, data }, { rejectWithValue }) => {
    const response = await loginEndpoint(data);
    return response.error
      ? rejectWithValue(response)
      : { response, isRememberMe };
  },
);

export const signup = createAsyncThunk(
  "mainState/signup",
  async (data, { rejectWithValue }) => {
    const response = await signUpEndpoint(data);
    return response.error ? rejectWithValue(response) : response;
  },
);

export const getLoggedInUser = createAsyncThunk(
  "mainState/getLoggedInUser",
  async (data, { rejectWithValue }) => {
    const response = await getLoggedInUserEndpoint(data);
    return response.error ? rejectWithValue(response) : response;
  },
);

export const handleLogout = () => {
  localStorage.clear();
  sessionStorage.clear();
};

const mainStateSlice = createSlice({
  name: "mainState",
  initialState,
  reducers: {
    logout(state, action) {
      state.loginData = {};
      handleLogout();
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.loginLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        const payload = action.payload.response;
        const isRememberMe = action.payload.isRememberMe;

        if (isRememberMe) {
          localStorage.setItem("accessToken", payload.data.accessToken);
        } else {
          sessionStorage.setItem("accessToken", payload.data.accessToken);
        }

        toast.success(payload.message, { toastId: "login" });

        state.loginLoading = false;
        state.message = payload.message;
        state.statusCode = payload.statusCode;
        state.loginData = payload.data;
      })
      .addCase(login.rejected, (state, action) => {
        const payload = action.payload;
        state.loginLoading = false;
        state.message = payload.message;
        state.statusCode = payload.statusCode;

        toast.error(payload.message, { toastId: "login" });
      });

    builder
      .addCase(signup.pending, (state) => {
        state.signUpLoading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        const { payload } = action;
        toast.success(payload.message, { toastId: "signup" });

        state.signUpLoading = false;
        state.message = payload.message;
        state.statusCode = payload.statusCode;
      })
      .addCase(signup.rejected, (state, action) => {
        const payload = action.payload;
        state.signUpLoading = false;
        state.message = payload.message;
        state.statusCode = payload.statusCode;

        toast.error(payload.message, { toastId: "signup" });
      });

    builder
      .addCase(getLoggedInUser.pending, (state) => {
        state.getLoggedInUserLoading = true;
      })
      .addCase(getLoggedInUser.fulfilled, (state, action) => {
        const { payload } = action;

        state.getLoggedInUserLoading = false;
        state.message = payload.message;
        state.statusCode = payload.statusCode;
        state.loginData = payload.data;
      })
      .addCase(getLoggedInUser.rejected, (state, action) => {
        const payload = action.payload;
        state.getLoggedInUserLoading = false;
        state.message = payload.message;
        state.statusCode = payload.statusCode;

        // toast.error(payload.message, { toastId: "getLoggedInUser" });
      });
  },
});
export const { logout } = mainStateSlice.actions;
export default mainStateSlice.reducer;
