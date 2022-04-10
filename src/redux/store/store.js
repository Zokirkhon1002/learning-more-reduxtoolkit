import { configureStore } from "@reduxjs/toolkit";
import counterSlices from "../slices/CounterSlices";
import postReducer from "../slices/PostSlice";

// import { counterSlices } from "../slices/CounterSlices-2";

const store = configureStore({
  reducer: {
    post: postReducer,
    counter: counterSlices,
  },
});

export default store;
