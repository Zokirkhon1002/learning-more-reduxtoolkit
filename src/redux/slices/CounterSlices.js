import { createSlice } from "@reduxjs/toolkit";

// initialize State
const initialState = {
  value: 0,
};

// Controls
export const counterSlices = createSlice({
  name: "counter",
  initialState,
  reducers: {
    Increment: (s, a) => {s.value++},
    Decrement: (s, a) => {s.value--},
    IncreaseByAmount: (s, a) => {s.value += a.payload},
    DecreaseByAmount: (s, a) => {s.value -= a.payload},
  },
});

// generate the actions
export const { 
    Increment, 
    Decrement, 
    IncreaseByAmount, 
    DecreaseByAmount 
} =
  counterSlices.actions;

// export reducers
export default counterSlices.reducer;
