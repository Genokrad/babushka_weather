import { drizzle } from 'assets';

import { Dashboard } from 'components/Dashboard';

const TodayPage = () => {
  return (
    <>
      <Dashboard icone={drizzle} temperture={'27'} />
    </>
  );
};

export default TodayPage;
