import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
  "redposts/fetchPosts",
  async (url) => {
    const response = await fetch(
      `https://www.reddit.com/${url}.json?`
    );
    const jsonResponse = await response.json();
    return jsonResponse.data.children;
  }
);

export const searchPosts = createAsyncThunk(
  "redposts/searchPosts",
  async (value) => {
    const response = await fetch(
      `https://www.reddit.com/search.json?q=${value}&restrict_sr=on&sort=confidence`
    );
    const jsonResponse = await response.json();
    return jsonResponse.data.children;
  }
);

export const fetchComments = createAsyncThunk(
  "redposts/fetchComments",
  async (url) => {
    console.log(url);
    const response = await fetch(url);
    const jsonResponse = await response.json();
    return jsonResponse;
  }
);

export const redpostSlice = createSlice({
  name: "redposts",
  initialState: {
    active: "r/funny",
    posts: [],
    comments: [],
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
      state.comments = [];
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.posts = state.posts.concat(action.payload);
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [searchPosts.pending]: (state, action) => {
      state.status = "loading";
      state.posts = [];
      state.comments = [];
    },
    [searchPosts.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.posts = state.posts.concat(action.payload);
      state.active = action.payload.length > 0 ? action.payload[0].data.subreddit_name_prefixed : "";
    },
    [searchPosts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [fetchComments.pending]: (state, action) => {
      state.status = "loading";
      state.posts = [];
      state.comments = [];
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.comments = state.comments.concat(action.payload);
    },
    [fetchComments.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { changeActive } = redpostSlice.actions;

export default redpostSlice.reducer;
