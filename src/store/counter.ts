import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
});

export default counterSlice.reducer;

export const { decrement, reset, increment } = counterSlice.actions;

export const selectCounterValue = (state: RootState) => state.counter.value;
