import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  setTodayWeather,
  setCurrentCity,
} from '../../features/weather/weatherSlice';

import { WelcomeScreen } from 'components/WelcomeScreen';

const Layout = () => {
  const dispatch = useDispatch();

  const [isCity, setIsCity] = useState(false);

  const weatherSetter = obj => {
    dispatch(setTodayWeather(obj));
  };

  const citySetter = obj => {
    dispatch(setCurrentCity(obj));
  };

  const navigate = useNavigate();

  const togleWelocmeScreen = () => {
    setIsCity(true);
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
