import { configureStore } from "@reduxjs/toolkit";
import repReducer from "./repSlice";

export const store = configureStore({
  reducer: {
    repos: repReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
