import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "../../components/ErrorFallback";
import { URL } from "../urlEndpoints";
import { useSelector } from "react-redux";

const PrivateRoutes = () => {
  const mainStateSelector = useSelector((state) => state.mainState);

  return mainStateSelector.loginData._id ? (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Outlet />
    </ErrorBoundary>
  ) : (
    <Navigate to={URL.LOGIN} />
  );
};

export default PrivateRoutes;
