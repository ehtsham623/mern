import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import ErrorFallback from "../../components/ErrorFallback";
import { useSelector } from "react-redux";
import { URL } from "../urlEndpoints";

const PublicRoutes = () => {
  const mainStateSelector = useSelector((state) => state.mainState);

  return mainStateSelector.loginData._id ? (
    <Navigate to={URL.HOME} />
  ) : (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Outlet />
    </ErrorBoundary>
  );
};

export default PublicRoutes;
