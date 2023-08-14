import { drizzle, grandmother, mark } from 'assets';
import { SocialShare } from 'components/SocialShare';
import './hero.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__wrapper">
        <h2 className="hero__title">Babushka’s Weather Wisdom</h2>
        <div className="hero__content-wrapper">
          <div className="hero__location-wrapper">
            <img className="hero__location-image" src={mark} alt="mark" />
            <p className="hero__city">Odessa</p>
          </div>
          <div>
            <p className="hero__date-text">Today, 11 Aug 2023</p>
          </div>
        </div>
        <div className="hero__temperture-wrapper">
          <img className="hero__temperture-image" src={drizzle} alt="weather" />
          <p className="hero__temperture">
            27°<span>C</span>
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
