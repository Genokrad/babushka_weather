import { Location } from 'components/Location';
import './hero.scss';
import { drizzle, grandmother } from 'assets';
import { SocialShare } from 'components/SocialShare';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { KelvinToCelsium, codeToIcon } from 'utils/converters';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [newCity, setNewCity] = useState('');

  const todayWeather = useSelector(state => state.weather.todayWeather);
  const todayCiti = useSelector(state => state.weather.currentCity);
  const loading = useSelector(state => state.weather.loading);

  useEffect(() => {
    setNewCity(todayCiti);
    // eslint-disable-next-line
  }, [loading]);

  return (
    <div className="hero">
      <div className="hero__wrapper">
        <h2 className="hero__title">Babushka’s Weather&nbsp;Wisdom</h2>
        <Location todayCiti={newCity} fontColor={'#fff'} />
        <div className="hero__temperture-wrapper">
          <img
            className="hero__temperture-image"
            src={
              todayWeather
                ? codeToIcon(todayWeather?.weather[0]?.icon)
                : drizzle
              // todayWeather
              //   ? ` https://openweathermap.org/img/wn/${todayWeather?.weather[0]?.icon}@2x.png `
              //   : drizzle
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
