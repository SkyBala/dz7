
import { configureStore } from "@reduxjs/toolkit";
import reducer from "../redux/slices/slice";
import loaderSlice from "./slices/loaderSlice";

export const store = configureStore({
  reducer: {
    coreReducer: reducer,
    load: loaderSlice,
  },
});
