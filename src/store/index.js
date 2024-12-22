import { configureStore } from "@reduxjs/toolkit";
import statsReducer from "./statsSlice";

export default configureStore({
  reducer: {
    stats: statsReducer,
  },
});
