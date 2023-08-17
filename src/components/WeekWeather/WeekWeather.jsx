import './weekWeather.scss';

// import { drizzle, foggy, hail, partlyCloudy, sleet, sunny } from 'assets';
import { OneDay } from './OneDay';
import { WeatherMessage } from 'components/WeatherMessage';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DateNow, convertToDate } from 'utils/converters';
import { GrandmaMessage } from 'components/GrandmaMessage';
import { setLoading } from 'features/weather/weatherSlice';
import { Loader } from 'components/Loader';
import Notiflix from 'notiflix';

// const week = [
//   { day: 'Tue', icon: drizzle, temp: 27 },
//   { day: 'Wed', icon: foggy, temp: 24 },
//   { day: 'Thu', icon: hail, temp: 22 },
//   { day: 'Fri', icon: partlyCloudy, temp: 21 },
//   { day: 'Sat', icon: sleet, temp: 18 },
//   { day: 'Sun', icon: sunny, temp: 35 },
//   { day: 'Mon', icon: drizzle, temp: 27 },
// ];

const KEY = '2ad6b3b56adc137acaefd4b3855025cf'; // blocked
// const KEY = '2ad6b3b56adc137acaefd4b3855025cf--temporry';

const WeekWeather = () => {
  const dispatch = useDispatch();
  const currentCity = useSelector(state => state.weather.currentCity);

  const [weekWeather, setWeekWeather] = useState(null);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${currentCity?.lat}&lon=${currentCity?.lon}&exclude=current,minutely,hourly&appid=${KEY}`;
    // const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${currentCity?.lat}&lon=${currentCity?.lon}&appid=${KEY}`;

    axios
      .get(apiUrl)
      .then(response => {
        dispatch(setLoading());
        const weeklyWeather = response.data;
        console.log(weeklyWeather);
        setWeekWeather(weeklyWeather);
      })
      .catch(error => {
        console.error('Error fetching data:', error.response);
        Notiflix.Notify.failure(error.message);
      })
      .finally(dispatch(setLoading()));
    // eslint-disable-next-line
  }, [currentCity]);

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

  const loading = useSelector(state => state.weather.loading);

  return (
    <>
      {showMessage && <WeatherMessage />}
      {loading && <Loader />}

      <ul className="week-list">
        {/* <Loader /> */}
        {weekWeather &&
          weekWeather.daily.map(day =>
            convertToDate(day.dt) === convertToDate(DateNow()) ? null : (
              <OneDay key={nanoid()} day={day} />
            )
          )}
      </ul>

      {!showMessage && <GrandmaMessage />}
    </>
  );
};

export default WeekWeather;
