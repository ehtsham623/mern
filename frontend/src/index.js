import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { store } from "./redux/store/store";
import MainRouter from "./routes";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Suspense fallback={null}>
      <Provider store={store}>
        <ToastContainer autoClose={5000} transition={Slide} />
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>,
);
