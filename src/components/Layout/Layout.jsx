// import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  setTodayWeather,
  setCurrentCity,
  setScreenTogler,
} from '../../features/weather/weatherSlice';

import { WelcomeScreen } from 'components/WelcomeScreen';

const Layout = () => {
  const dispatch = useDispatch();
  const isCity = useSelector(state => state.weather.screenTogler);

  // const [isCity, setIsCity] = useState(false);

  const weatherSetter = obj => {
    dispatch(setTodayWeather(obj));
  };

  const citySetter = obj => {
    dispatch(setCurrentCity(obj));
  };

  const navigate = useNavigate();

  const togleWelocmeScreen = () => {
    dispatch(setScreenTogler());
    navigate('main/today');
  };
  return (
    <>
      {!isCity && (
        <WelcomeScreen
          togleWelocmeScreen={togleWelocmeScreen}
          weatherSetter={weatherSetter}
          citySetter={citySetter}
        />
      )}

      {isCity && <Outlet />}
    </>
  );
};

export default Layout;
