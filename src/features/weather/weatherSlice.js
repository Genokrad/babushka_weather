import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todayWeather: {},
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setTodayWeather: (state, action) => {
      state.todayWeather = action.payload;
    },
  },
});

export const { setTodayWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
