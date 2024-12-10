import { configureStore } from "@reduxjs/toolkit";

import mainStateSlice from "../slice/mainStateSlice";

export const store = configureStore({
  reducer: {
    mainState: mainStateSlice,
  },
});
