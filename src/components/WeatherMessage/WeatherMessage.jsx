import { triangle, triangleVertical } from 'assets';
import './weatherMessage.scss';

const WeatherMessage = ({ text }) => {
  return (
    <>
      <div className="message">
        <p className="message__text">{text}</p>
        <img className="message__triangle" alt="triangle" src={triangle} />
        <img
          className="message__triangle-vertical"
          alt="triangle"
          src={triangleVertical}
        />
      </div>
    </>
  );
};

export default WeatherMessage;
