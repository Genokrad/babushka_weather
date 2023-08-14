// import { drizzle } from 'assets';
import './oneDayWeather.scss';

const OneDayWeather = ({ temperture, icone }) => {
  return (
    <div className="todayWeather">
      <img className="todayWeather__image" src={icone} alt="mark" />
      <p className="todayWeather__text">
        {temperture}°<span>C</span>
      </p>
    </div>
  );
};

export default OneDayWeather;
