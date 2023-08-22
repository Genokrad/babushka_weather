// import { sunny } from 'assets';
// import axios from 'axios';
import { Dashboard } from 'components/Dashboard';
// import { setLoading, setTomorrow } from 'features/weather/weatherSlice';
// import Notiflix from 'notiflix';
// import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { KelvinToCelsium, wishMessage } from 'utils/converters';

// const KEY = '2ad6b3b56adc137acaefd4b3855025cf'; //Blocked
// const KEY = '2ad6b3b56adc137acaefd4b3855025cf--temporry';

const TomorrowPage = () => {
  const measure = useSelector(state => state.weather.tempertureMeasure);
  const weekWeather = useSelector(state => state.weather.weekWeather);
  const tomorrowWeather = weekWeather.daily[1];
  const tomorrowTemperture = KelvinToCelsium(
    tomorrowWeather?.temp?.day,
    measure
  );
  const feelsLike = KelvinToCelsium(tomorrowWeather?.feels_like?.day, measure);
  const wishMessagetext = wishMessage(tomorrowWeather?.weather[0]?.icon);
  const tomorrowDate = tomorrowWeather.dt;
  const description = tomorrowWeather?.weather[0]?.description;

  const objIndication = [
    { text: 'Feels like:', value: `${feelsLike ? feelsLike : '0'}°C` },
    {
      text: 'Humidity:',
      value: `${tomorrowWeather ? tomorrowWeather?.humidity : '0'}%`,
    },
    {
      text: 'Wind speed:',
      value: `${tomorrowWeather ? tomorrowWeather?.wind_speed : '0'} km/h`,
    },
    {
      text: 'Wind degree:',
      value: `${tomorrowWeather ? tomorrowWeather?.wind_deg : '0'}°`,
    },
    {
      text: 'Pressure:',
      value: `${tomorrowWeather ? tomorrowWeather?.pressure : '0'} mBar`,
    },
    {
      text: 'possibility of precipitation:',
      value: `${tomorrowWeather ? tomorrowWeather?.pop * 100 : '0'} %`,
    },
  ];

  return (
    <>
      <Dashboard
        icon={tomorrowWeather?.weather[0]?.icon}
        todayDate={tomorrowDate}
        temperture={tomorrowTemperture}
        objIndication={objIndication}
        pageType={'Tomorrow'}
        wishMessagetext={wishMessagetext}
        description={description}
        city={weekWeather.city}
      />
    </>
  );
};

export default TomorrowPage;
