import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice(
    {
      name: "posts",
      initialState: {
        value: [],
      },
      reducers: {
        addPosts: (state, action) => {
          state.value.unshift(action.payload);
        },
        addAllPosts: (state, action) => {
          state.value.push(...action.payload);
        },
      },
    }
)
export const { addPosts, addAllPosts } = postsSlice.actions;
export const selectPosts = (state) => state?.post.value;
export default postsSlice.reducer;