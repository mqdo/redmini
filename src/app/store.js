import { configureStore } from "@reduxjs/toolkit";
import redpostReducer from "../features/Main/redpostSlice";
import categoriesReducer from "../features/Categories/categoriesSlice";

export default configureStore({
  reducer: {
    redposts: redpostReducer,
    categories: categoriesReducer,
  },
});
