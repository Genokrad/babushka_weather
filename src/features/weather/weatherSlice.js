import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentCity: {
    lat: 0,
    lon: 0,
  },
  loading: false,
  screenTogler: false,
  weekWeather: null,
  tempertureMeasure: 'celsius',
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCurrentCity: (state, action) => {
      state.currentCity = action.payload;
    },
    setLoading: state => {
      state.loading = !state.loading;
    },
    setScreenTogler: state => {
      state.screenTogler = !state.screenTogler;
    },
    setWeekWeather: (state, action) => {
      state.weekWeather = action.payload;
    },
    setTempertureMeasure: (state, action) => {
      state.tempertureMeasure = action.payload;
    },
  },
});

export const {
  setCurrentCity,
  setTempertureMeasure,
  setLoading,
  setScreenTogler,
  setWeekWeather,
} = weatherSlice.actions;

export default weatherSlice.reducer;
