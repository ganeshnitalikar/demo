import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import facultyReducer from "./facultySlice";
import newsReducer from "./newsSlice";
import nonTeachingStaffReducer from "./nonTeachingStaff";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    faculty: facultyReducer,
    news: newsReducer,
    nonTeachingStaff: nonTeachingStaffReducer,
  },
});
