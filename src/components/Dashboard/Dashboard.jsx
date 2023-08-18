import './dashboard.scss';

import { OneDayWeather } from 'components/OneDayWeather';
import { WeatherIndicator } from 'components/WeatherIndicator';
import { WeatherMessage } from 'components/WeatherMessage';
import { useEffect, useState } from 'react';

import { GrandmaMessage } from 'components/GrandmaMessage';
import { useSelector } from 'react-redux';
import { Loader } from 'components/Loader';
import { Location } from 'components/Location';

// const objIndication = [
//   { text: 'Chance of precipitation:', value: '42%' },
//   { text: 'Humidity:', value: '49%' },
//   { text: 'Wind:', value: '11 km/h' },
//   { text: 'Pressure:', value: '1,020 mBar' },
//   { text: 'UV index:', value: 'High, 7' },
//   { text: 'Visibility:', value: '10 km' },
// ];

const Dashboard = ({
  todayDate,
  temperture,
  objIndication,
  pageType,
  wishMessagetext,
  week,
}) => {
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

  const loading = useSelector(state => state?.weather?.loading);

  const todayCiti = useSelector(state => state?.weather?.currentCity);

  return (
    <>
      {!showHero && (
        <Location
          todayCiti={todayCiti}
          fontColor={'#000'}
          todayDate={todayDate}
        />
      )}
      {showHero && <WeatherMessage text={wishMessagetext} />}
      <div className="indicators">
        {loading && <Loader />}

        <OneDayWeather temperture={temperture} pageType={pageType} />
        <WeatherIndicator objIndication={objIndication} />
        {!showHero && <GrandmaMessage text={wishMessagetext} />}
      </div>
    </>
  );
};

export default Dashboard;
