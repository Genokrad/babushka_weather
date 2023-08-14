import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout';
import { MainPage, TodayPage, TomorrowPage, WeekPage } from 'Pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="main" element={<MainPage />}>
          <Route path="today" element={<TodayPage />} />
          <Route path="tomorrow" element={<TomorrowPage />} />
          <Route path="week" element={<WeekPage />} />
        </Route>
      </Route>
    </Routes>
  );
};
