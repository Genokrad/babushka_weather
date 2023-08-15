import { Hero } from 'components/Hero';
import { Navigation } from 'components/Navigation';
import { Outlet } from 'react-router-dom';
import './mainPage.scss';
import { SearchBar } from 'components/SearchBar';

const MainPage = () => {
  return (
    <div className="main-page-wrapper">
      <Hero />
      <div style={{ padding: '32px' }}>
        <SearchBar />
        <Navigation />
        <Outlet />
      </div>
    </div>
  );
};

export default MainPage;
