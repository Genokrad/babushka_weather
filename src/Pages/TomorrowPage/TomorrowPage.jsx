// import { sunny } from 'assets';
import axios from 'axios';
import { Dashboard } from 'components/Dashboard';
import { setLoading, setTomorrow } from 'features/weather/weatherSlice';
import Notiflix from 'notiflix';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { KelvinToCelsium, wishMessage } from 'utils/converters';

const KEY = '2ad6b3b56adc137acaefd4b3855025cf'; //Blocked
// const KEY = '2ad6b3b56adc137acaefd4b3855025cf--temporry';

const TomorrowPage = () => {
  const [tomorrowWeather, setTomorrowWeather] = useState([
    { text: 'Feels like:', value: `°C` },
    { text: 'Humidity:', value: `%` },
    { text: 'Wind speed:', value: `km/h` },
    { text: 'Wind degree:', value: `°` },
    { text: 'Pressure:', value: ` mBar` },
    {
      text: 'Chance of precipitation:',
      value: ` %`,
    },
  ]);
  const [message, setMessage] = useState('');
  const [temperture, setTemperture] = useState(0);

  const dispatch = useDispatch();

  const currentCity = useSelector(state => state.weather.currentCity);

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${currentCity?.lat}&lon=${currentCity?.lon}&exclude=current,minutely,hourly&appid=${KEY}`;

    axios
      .get(apiUrl)
      .then(response => {
        dispatch(setLoading());
        const tomorrowWeather = response.data.daily[1];

        setMessage(wishMessage(tomorrowWeather?.weather[0]?.icon));
        setTomorrowWeather([
          {
            text: 'Feels like:',
            value: `${KelvinToCelsium(tomorrowWeather?.feels_like?.day)}°C`,
          },
          { text: 'Humidity:', value: `${tomorrowWeather?.humidity}%` },
          { text: 'Wind speed:', value: `${tomorrowWeather?.wind_speed}km/h` },
          { text: 'Wind degree:', value: `${tomorrowWeather?.wind_deg}°` },
          { text: 'Pressure:', value: `${tomorrowWeather?.pressure} mBar` },
          {
            text: 'Chance of precipitation:',
            value: `${Math.floor(tomorrowWeather?.pop * 100)} %`,
          },
        ]);
        setTemperture(KelvinToCelsium(tomorrowWeather?.temp?.day));
        dispatch(setTomorrow(tomorrowWeather));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        Notiflix.Notify.failure(error.message);
      })
      .finally(dispatch(setLoading()));
    /* eslint-disable */
  }, [currentCity]);
  /* eslint-enable */

  // const wishMessagetext = wishMessage(tomorrowWeather?.weather[0]?.icon);
  return (
    <>
      <Dashboard
        temperture={temperture}
        objIndication={tomorrowWeather}
        pageType={'tomorrow'}
        wishMessagetext={message}
      />
    </>
  );
};

export default TomorrowPage;
