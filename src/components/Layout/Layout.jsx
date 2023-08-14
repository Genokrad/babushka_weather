import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { WelcomeScreen } from 'components/WelcomeScreen';

const Layout = () => {
  const [isCity, setIsCity] = useState(false);

  const navigate = useNavigate();

  const togleWelocmeScreen = event => {
    event.preventDefault();
    setIsCity(true);
    navigate('main/today');
  };
  return (
    <>
      {!isCity && <WelcomeScreen togleWelocmeScreen={togleWelocmeScreen} />}
      <Outlet />
    </>
  );
};

export default Layout;
