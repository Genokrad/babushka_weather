// import { drizzle } from 'assets';

import { Dashboard } from 'components/Dashboard';

import { useSelector } from 'react-redux';
import { KelvinToCelsium, wishMessage } from 'utils/converters';

const TodayPage = () => {
  const measure = useSelector(state => state.weather.tempertureMeasure);

  const weekWeather = useSelector(state => state.weather.weekWeather);
  const todayWeather = weekWeather.daily[0];
  const todayTemperture = KelvinToCelsium(todayWeather?.temp?.day, measure);
  const feelsLike = KelvinToCelsium(todayWeather?.feels_like?.day, measure);
  const description = todayWeather?.weather[0]?.description;

  const objIndication = [
    { text: 'Feels like:', value: `${feelsLike ? feelsLike : '0'}°C` },
    {
      text: 'Humidity:',
      value: `${todayWeather ? todayWeather?.humidity : '0'}%`,
    },
    {
      text: 'Wind speed:',
      value: `${todayWeather ? todayWeather?.wind_speed : '0'} km/h`,
    },
    {
      text: 'Wind degree:',
      value: `${todayWeather ? todayWeather?.wind_deg : '0'}°`,
    },
    {
      text: 'Pressure:',
      value: `${todayWeather ? todayWeather?.pressure : '0'} mBar`,
    },
    {
      text: 'possibility of precipitation:',
      value: `${todayWeather ? todayWeather?.pop * 100 : '0'} %`,
    },
  ];

  const wishMessagetext = wishMessage(todayWeather?.weather[0]?.icon);

  return (
    <>
      <Dashboard
        icon={todayWeather?.weather[0]?.icon}
        city={weekWeather.city}
        temperture={todayTemperture}
        objIndication={objIndication}
        pageType={'Today'}
        wishMessagetext={wishMessagetext}
        description={description}
      />
    </>
  );
};

export default TodayPage;
