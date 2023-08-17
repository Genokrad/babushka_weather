// import { drizzle } from 'assets';

import { useSelector } from 'react-redux';
import './oneDayWeather.scss';
import { drizzle } from 'assets';
import { codeToIcon } from 'utils/converters';

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
      <img
        className="todayWeather__image"
        src={
          description ? codeToIcon(description?.icon) : drizzle
          // description
          //   ? `https://openweathermap.org/img/wn/${description?.icon}@2x.png `
          //   : drizzle
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
