import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { WelcomeScreen } from 'components/WelcomeScreen';

const Layout = () => {
  const [isCity, setIsCity] = useState(false);
  const [weather, setWeather] = useState(null);

  const weatherSetter = obj => {
    setWeather(obj);
    console.log(weather);
  };

  const navigate = useNavigate();

  const togleWelocmeScreen = () => {
    // event.preventDefault();
    setIsCity(true);
    navigate('main/today');
  };
  return (
    <>
      {!isCity && (
        <WelcomeScreen
          togleWelocmeScreen={togleWelocmeScreen}
          weatherSetter={weatherSetter}
        />
      )}

      <Outlet />
    </>
  );
};

export default Layout;
