import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "./slice";

export const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
  },
});
