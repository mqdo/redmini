import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "categories",
  initialState: {
    activate: ""
  },
  reducers: {
    changeActivate: (state, action) => {
      state.activate = action.payload;
    },
  },
});

export const { changeActivate } = categorySlice.actions;

export default categorySlice.reducer;
