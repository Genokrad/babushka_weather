import './weekWeather.scss';

// import { drizzle, foggy, hail, partlyCloudy, sleet, sunny } from 'assets';
import { OneDay } from './OneDay';
import { WeatherMessage } from 'components/WeatherMessage';
import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
// import axios from 'axios';
import {
  DateNow,
  converToMonth,
  convertToDate,
  convetToFullYear,
  wishMessage,
} from 'utils/converters';
import { GrandmaMessage } from 'components/GrandmaMessage';
// import { setLoading } from 'features/weather/weatherSlice';
import { Loader } from 'components/Loader';
// import Notiflix from 'notiflix';
import { Location } from 'components/Location';

// const week = [
//   { day: 'Tue', icon: drizzle, temp: 27 },
//   { day: 'Wed', icon: foggy, temp: 24 },
//   { day: 'Thu', icon: hail, temp: 22 },
//   { day: 'Fri', icon: partlyCloudy, temp: 21 },
//   { day: 'Sat', icon: sleet, temp: 18 },
//   { day: 'Sun', icon: sunny, temp: 35 },
//   { day: 'Mon', icon: drizzle, temp: 27 },
// ];

// const KEY = '2ad6b3b56adc137acaefd4b3855025cf'; // blocked
// const KEY = '2ad6b3b56adc137acaefd4b3855025cf--temporry';

const WeekWeather = () => {
  const weekWeather = useSelector(state => state.weather.weekWeather);
  const todayCiti = weekWeather.city;

  const [showMessage, setShowMessage] = useState(true);
  const [showHero, setShowHero] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowMessage(window.innerWidth >= 1400);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const loading = useSelector(state => state?.weather?.loading);

  const wishMessagetext = wishMessage('week');

  const dateRange = `${convertToDate(
    weekWeather?.daily[1]?.dt
  )}-${convertToDate(weekWeather?.daily[7]?.dt)} ${converToMonth(
    weekWeather?.daily[1]?.dt
  )} ${convetToFullYear(weekWeather?.daily[1]?.dt)}`;

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
      {showMessage && <WeatherMessage text={wishMessagetext} />}
      {loading && <Loader />}
      {!showHero && (
        <Location todayCiti={todayCiti} fontColor={'#000'} week={dateRange} />
      )}
      <ul className="week-list">
        {weekWeather &&
          weekWeather.daily.map(day =>
            convertToDate(day.dt) === convertToDate(DateNow()) ? null : (
              <OneDay key={nanoid()} day={day} />
            )
          )}
      </ul>

      {!showMessage && <GrandmaMessage text={wishMessagetext} />}
    </>
  );
};

export default WeekWeather;
