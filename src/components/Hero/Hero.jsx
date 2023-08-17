import { Location } from 'components/Location';
import './hero.scss';
import { drizzle, grandmother } from 'assets';
import { SocialShare } from 'components/SocialShare';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { KelvinToCelsium } from 'utils/converters';

const Hero = () => {
  const todayWeather = useSelector(state => state.weather.todayWeather);
  const todayCiti = useSelector(state => state.weather.currentCity);
  console.log(todayWeather);

  return (
    <div className="hero">
      <div className="hero__wrapper">
        <h2 className="hero__title">Babushka’s Weather&nbsp;Wisdom</h2>
        <Location todayCiti={todayCiti} fontColor={'#fff'} />
        <div className="hero__temperture-wrapper">
          <img
            className="hero__temperture-image"
            src={
              todayWeather
                ? ` https://openweathermap.org/img/wn/${todayWeather?.weather[0]?.icon}@2x.png `
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
