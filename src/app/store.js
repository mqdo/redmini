import { configureStore } from "@reduxjs/toolkit";
import redpostReducer from "../features/Main/redpostSlice";

export default configureStore({
  reducer: {
    redposts: redpostReducer,
  }
});
