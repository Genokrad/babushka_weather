import { grandmother } from 'assets';
import './dashboard.scss';

import { OneDayWeather } from 'components/OneDayWeather';
import { WeatherIndicator } from 'components/WeatherIndicator';
import { WeatherMessage } from 'components/WeatherMessage';
import { useEffect, useState } from 'react';
import { SocialShare } from 'components/SocialShare';
import { GrandmaMessage } from 'components/GrandmaMessage';

// const objIndication = [
//   { text: 'Chance of precipitation:', value: '42%' },
//   { text: 'Humidity:', value: '49%' },
//   { text: 'Wind:', value: '11 km/h' },
//   { text: 'Pressure:', value: '1,020 mBar' },
//   { text: 'UV index:', value: 'High, 7' },
//   { text: 'Visibility:', value: '10 km' },
// ];

const Dashboard = ({ temperture, objIndication, pageType }) => {
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowHero(window.innerWidth >= 1400);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {showHero && <WeatherMessage />}
      <div className="indicators">
        <OneDayWeather temperture={temperture} pageType={pageType} />
        <WeatherIndicator objIndication={objIndication} />
        {!showHero && <GrandmaMessage />}
      </div>
    </>
  );
};

export default Dashboard;
