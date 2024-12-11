import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { URL } from "./urlEndpoints";
import PrivateRoutes from "./Private/Private";
import PublicRoutes from "./Public/Public";
import LoginPage from "../pages/auth/loginPage";
import SignUpPage from "../pages/auth/signUpPage";
import HomePage from "../pages/home/homePage";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUser } from "../redux/slice/mainStateSlice";
import CircularLoader from "../components/circularLoader";

const MainRouter = () => {
  const dispatch = useDispatch();
  const mainStateSelector = useSelector((state) => state.mainState);

  useEffect(() => {
    const accessToken =
      localStorage.getItem("accessToken") ||
      sessionStorage.getItem("accessToken");

    if (accessToken) dispatch(getLoggedInUser());
  }, [mainStateSelector.loginData._id]);

  return mainStateSelector.getLoggedInUserLoading ? (
    <CircularLoader height />
  ) : (
    <Routes>
      <Route path={URL.HOME} element={<PrivateRoutes />}>
        <Route path={URL.HOME} element={<HomePage />} />
      </Route>
      <Route path={URL.HOME} element={<PublicRoutes />}>
        <Route path={URL.LOGIN} element={<LoginPage />} />
        <Route path={URL.SIGNUP} element={<SignUpPage />} />{" "}
        <Route path={URL.HOME} element={<HomePage />} />
      </Route>
      <Route path={"*"} element={<Navigate to={URL.HOME} replace />} />
    </Routes>
  );
};

export default MainRouter;
