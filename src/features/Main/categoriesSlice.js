import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCats = createAsyncThunk(
  "categories/fetchCats",
  async () => {
    const response = await fetch(`https://www.reddit.com/subreddits.json`);
    const jsonResponse = await response.json();
    return jsonResponse.data.children;
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchCats.pending]: (state, action) => {
      state.status = "loading";
      state.categories = [];
    },
    [fetchCats.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.categories = state.categories.concat(action.payload);
    },
    [fetchCats.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export default categoriesSlice.reducer;