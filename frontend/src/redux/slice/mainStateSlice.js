import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

import {
  loginEndpoint,
  signUpEndpoint,
  getUserEndpoint,
  getProductsEndpoint,
} from "../../api/repo/mainRepo";

const initialState = {
  loginData: {},
  userId: "",
  loginLoading: false,
  signUpLoading: false,
  getUserLoading: false,
  getProductsLoading: false,
  message: "",
  statusCode: "",
};

export const login = createAsyncThunk(
  "mainState/login",
  async ({ isRememberMe, data }, { rejectWithValue }) => {
    const response = await loginEndpoint(data);
    return response.error ? rejectWithValue(response) : response;
  },
);

export const signup = createAsyncThunk(
  "mainState/signup",
  async (data, { rejectWithValue }) => {
    const response = await signUpEndpoint(data);
    return response.error ? rejectWithValue(response) : response;
  },
);

const mainStateSlice = createSlice({
  name: "mainState",
  initialState,
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.loginLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        const { payload } = action;

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
  },
});

export default mainStateSlice.reducer;
