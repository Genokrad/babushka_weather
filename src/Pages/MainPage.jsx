import { Hero } from 'components/Hero';
import { Navigation } from 'components/Navigation';
import { Outlet } from 'react-router-dom';
import './mainPage.scss';

const MainPage = () => {
  return (
    <div className="main-page-wrapper">
      <Hero />
      <div style={{ padding: '32px' }}>
        <Navigation />
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
