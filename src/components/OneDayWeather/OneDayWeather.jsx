// import { drizzle } from 'assets';

import { useSelector } from 'react-redux';
import './oneDayWeather.scss';
import { drizzle } from 'assets';

const OneDayWeather = ({ temperture, pageType }) => {
  const description = {
    today: useSelector(state => state?.weather?.todayWeather?.weather[0]),
    tomorrow: {
      icon: useSelector(state => state?.weather?.tomorrow?.weather[0]?.icon),
      description: useSelector(
        state => state?.weather?.tomorrow?.weather[0]?.description
      ),
    },
  }[pageType];

  return (
    <div className="todayWeather">
      {console.log('description', description)}
      <img
        className="todayWeather__image"
        src={
          description
            ? `https://openweathermap.org/img/w/${description?.icon}.png`
            : drizzle
        }
        alt="mark"
      />

      <p className="todayWeather__text">
        {temperture ? temperture : 0}°<span>C</span>
      </p>

      <p className="todayWeather__description">
        {description ? description?.description : ''}
      </p>
    </div>
  );
};

export default OneDayWeather;
