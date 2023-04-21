import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: (state, action) => state + action.payload,
    decrement: (state, action) => {
      if (state > 0) {
        return state - action.payload;
      }
      return state;
    },
  },
});

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;
