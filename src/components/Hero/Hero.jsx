import './hero.scss';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { setScreenTogler } from 'features/weather/weatherSlice';

import { Location } from 'components/Location';
import { SocialShare } from 'components/SocialShare';

import { drizzle, grandmother } from 'assets';

import { KelvinToCelsium, codeToIcon } from 'utils/converters';

const Hero = () => {
  const dispatch = useDispatch();

  const weekWeather = useSelector(state => state.weather.weekWeather);
  const measure = useSelector(state => state.weather.tempertureMeasure);

  let todayWeather = weekWeather?.daily[0];
  let city = weekWeather.city;

  const screenToglerFunction = () => {
    dispatch(setScreenTogler());
  };

  return (
    <div className="hero">
      <div className="hero__wrapper">
        <h2 onClick={screenToglerFunction} className="hero__title">
          Babushka’s Weather&nbsp;Wisdom
        </h2>
        <Location todayCiti={city} fontColor={'#fff'} pageType="Today" />
        <div className="hero__temperture-wrapper">
          <img
            className="hero__temperture-image"
            src={
              todayWeather
                ? codeToIcon(todayWeather?.weather[0]?.icon)
                : drizzle
            }
            alt="weather"
          />
          <p className="hero__temperture">
            {todayWeather
              ? KelvinToCelsium(todayWeather?.temp?.day, measure)
              : 0}
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
