import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todayWeather: null,
  currentCity: {
    lat: 0,
    lon: 0,
  },
  tomorrow: null,
  loading: false,
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
    setLoading: state => {
      state.loading = !state.loading;
    },
  },
});

export const { setTodayWeather, setCurrentCity, setTomorrow, setLoading } =
  weatherSlice.actions;

export default weatherSlice.reducer;
