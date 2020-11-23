import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
  "redposts/fetchPosts",
  async (url) => {
    const response = await fetch(
      `https://www.reddit.com/${url}.json`
    );
    const jsonResponse = await response.json();
    return jsonResponse.data.children;
  }
);

export const redpostSlice = createSlice({
  name: "redposts",
  initialState: {
    active: "/r/pics",
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {
    changeActive: (state, action) => {
      state.active = action.payload;
      state.status = "idle";
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = "loading";
      state.posts = [];
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.posts = state.posts.concat(action.payload);
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { changeActive } = redpostSlice.actions;

export default redpostSlice.reducer;
