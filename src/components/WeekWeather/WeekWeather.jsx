import './weekWeather.scss';

import { drizzle, foggy, hail, partlyCloudy, sleet, sunny } from 'assets';
import { OneDay } from './OneDay';
import { WeatherMessage } from 'components/WeatherMessage';

const week = [
  { day: 'Tue', icon: drizzle, temp: 27 },
  { day: 'Wed', icon: foggy, temp: 24 },
  { day: 'Thu', icon: hail, temp: 22 },
  { day: 'Fri', icon: partlyCloudy, temp: 21 },
  { day: 'Sat', icon: sleet, temp: 18 },
  { day: 'Sun', icon: sunny, temp: 35 },
  { day: 'Mon', icon: drizzle, temp: 27 },
];

const WeekWeather = () => {
  return (
    <>
      <WeatherMessage />
      <ul className="week-list">
        {week.map(day => (
          <OneDay day={day} />
        ))}
      </ul>
    </>
  );
};

export default WeekWeather;
