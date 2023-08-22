// import { drizzle } from 'assets';

// import { useSelector } from 'react-redux';
import './oneDayWeather.scss';
import { drizzle } from 'assets';
import { codeToIcon } from 'utils/converters';

const OneDayWeather = ({ temperture, description, icon }) => {
  return (
    <div className="todayWeather">
      <img
        className="todayWeather__image"
        src={icon ? codeToIcon(icon) : drizzle}
        alt="mark"
      />

      <p className="todayWeather__text">
        {temperture ? temperture : 0}°<span>C</span>
      </p>

      <p className="todayWeather__description">
        {description ? description : ''}
      </p>
    </div>
  );
};

export default OneDayWeather;
