import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import admissionReducer from "./admissionSlice";

export const store = configureStore({
  reducer: {
    admissions: admissionReducer,
    auth: authReducer,
  },
});
