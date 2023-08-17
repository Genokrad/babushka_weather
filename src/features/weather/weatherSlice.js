import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todayWeather: null,
  currentCity: {
    lat: 0,
    lon: 0,
  },
  tomorrow: null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setTodayWeather: (state, action) => {
      state.todayWeather = action.payload;
    },
    setCurrentCity: (state, action) => {
      state.currentCity = action.payload;
    },
    setTomorrow: (state, action) => {
      state.tomorrow = action.payload;
    },
  },
});

export const { setTodayWeather, setCurrentCity, setTomorrow } =
  weatherSlice.actions;

export default weatherSlice.reducer;
