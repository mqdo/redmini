import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/Categories/categorySlice";

export default configureStore({
  reducer: {
    categories: categoryReducer,
  }
});
