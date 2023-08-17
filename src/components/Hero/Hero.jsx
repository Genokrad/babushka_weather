import './hero.scss';
import { drizzle, grandmother, mark } from 'assets';
import { SocialShare } from 'components/SocialShare';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { KelvinToCelsium } from 'utils/converters';

const formatDate = date => {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
};

const Hero = () => {
  const todayWeather = useSelector(state => state.weather.todayWeather);
  const todatCiti = useSelector(state => state.weather.currentCity);
  console.log(todayWeather);

  return (
    <div className="hero">
      <div className="hero__wrapper">
        <h2 className="hero__title">Babushka’s Weather Wisdom</h2>
        <div className="hero__content-wrapper">
          <div className="hero__location-wrapper">
            <img className="hero__location-image" src={mark} alt="mark" />
            <p className="hero__city">{todatCiti.name}</p>
          </div>
          <div>
            <p className="hero__date-text">Today, {formatDate(new Date())}</p>
          </div>
        </div>
        <div className="hero__temperture-wrapper">
          <img
            className="hero__temperture-image"
            src={
              todayWeather
                ? `https://openweathermap.org/img/w/${todayWeather?.weather[0]?.icon}.png`
                : drizzle
            }
            alt="weather"
          />
          <p className="hero__temperture">
            {todayWeather ? KelvinToCelsium(todayWeather?.main?.temp) : 0}°
            <span>C</span>
          </p>
          <img className="hero__image" src={grandmother} alt="grandmother" />
        </div>
      </div>
      <div className="horizont"></div>
      <SocialShare />
    </div>
  );
};

export default Hero;
