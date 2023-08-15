import { drizzle } from 'assets';

import { Dashboard } from 'components/Dashboard';
import { useSelector } from 'react-redux';

const TodayPage = () => {
  const todayWeather = useSelector(state => state.weather.todayWeather);

  const metersToKilometers = meters => {
    const kilometers = meters / 1000;
    return kilometers;
  };

  const kelvinsToCelsius = temperture => {
    return Math.floor(temperture - 273.15);
  };

  const todayTemperture = kelvinsToCelsius(todayWeather?.main?.temp);
  const feelsLike = kelvinsToCelsius(todayWeather?.main?.feels_like);

  const objIndication = [
    { text: 'Feels like:', value: `${feelsLike}°C` },
    { text: 'Humidity:', value: `${todayWeather?.main?.humidity}%` },
    { text: 'Wind speed:', value: `${todayWeather?.wind?.speed}km/h` },
    { text: 'Wind degree:', value: `${todayWeather?.wind?.deg}°` },
    { text: 'Pressure:', value: `${todayWeather?.main?.pressure} mBar` },
    {
      text: 'Visibility:',
      value: `${metersToKilometers(todayWeather?.visibility)} km`,
    },
  ];

  return (
    <>
      <Dashboard
        icone={drizzle}
        temperture={todayTemperture}
        objIndication={objIndication}
      />
    </>
  );
};

export default TodayPage;
