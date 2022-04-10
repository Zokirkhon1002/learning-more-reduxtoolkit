import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// CREATE THE ACTION
export const fetchPost = createAsyncThunk("post/list", async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_URL);
    return response.data;
  } catch (err) {
    return err;
  }
});

// SLICES
const PostSlices = createSlice({
  name: "post",
  initialState: {
    loading: true,
  },
  extraReducers: {
    // Handling Pending state
    [fetchPost.pending]: (s, a) => {
      s.loading = true;
    },
    // Handling fulfilled(resolved)
    [fetchPost.fulfilled]: (s, a) => {
      s.postsList = a.payload;
      s.loading = false;
    },
    // Handling rejected
    [fetchPost.rejected]: (s, a) => {
      s.loading = false;
      s.error = a.payload;
    },
  },
});

// EXPORT REDUCER
export default PostSlices.reducer;
