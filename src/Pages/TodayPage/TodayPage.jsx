// import { drizzle } from 'assets';

import { Dashboard } from 'components/Dashboard';
import { useSelector } from 'react-redux';
import { KelvinToCelsium, metersToKilometers } from 'utils/converters';

const TodayPage = () => {
  const todayWeather = useSelector(state => state.weather.todayWeather);

  const todayTemperture = KelvinToCelsium(todayWeather?.main?.temp);
  const feelsLike = KelvinToCelsium(todayWeather?.main?.feels_like);

  const objIndication = [
    { text: 'Feels like:', value: `${feelsLike ? feelsLike : '0'}°C` },
    {
      text: 'Humidity:',
      value: `${todayWeather ? todayWeather?.main?.humidity : '0'}%`,
    },
    {
      text: 'Wind speed:',
      value: `${todayWeather ? todayWeather?.wind?.speed : '0'}km/h`,
    },
    {
      text: 'Wind degree:',
      value: `${todayWeather ? todayWeather?.wind?.deg : '0'}°`,
    },
    {
      text: 'Pressure:',
      value: `${todayWeather ? todayWeather?.main?.pressure : '0'} mBar`,
    },
    {
      text: 'Visibility:',
      value: `${
        todayWeather ? metersToKilometers(todayWeather?.visibility) : '0'
      } km`,
    },
  ];

  // http://openweathermap.org/img/w/${}.png

  return (
    <>
      <Dashboard
        temperture={todayTemperture}
        objIndication={objIndication}
        pageType={'today'}
      />
    </>
  );
};

export default TodayPage;
