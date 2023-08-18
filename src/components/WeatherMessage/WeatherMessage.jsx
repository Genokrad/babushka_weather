import './weatherMessage.scss';

const WeatherMessage = ({ text }) => {
  return (
    <div className="message">
      <p className="message__text">{text}</p>
    </div>
  );
};

export default WeatherMessage;
