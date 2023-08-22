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
  icon,
  city,
  todayDate,
  temperture,
  objIndication,
  pageType,
  wishMessagetext,
  description,
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

  return (
    <>
      {!showHero && (
        <Location
          todayCiti={city}
          fontColor={'#000'}
          todayDate={todayDate}
          pageType={pageType}
        />
      )}
      {showHero && <WeatherMessage text={wishMessagetext} />}
      <div className="indicators">
        {loading && <Loader />}

        <OneDayWeather
          temperture={temperture}
          icon={icon}
          description={description}
        />
        <WeatherIndicator objIndication={objIndication} />
        {!showHero && <GrandmaMessage text={wishMessagetext} />}
      </div>
    </>
  );
};

export default Dashboard;
