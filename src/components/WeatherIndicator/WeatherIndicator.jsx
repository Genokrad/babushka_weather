import './weatherIndicator.scss';

const WeatherIndicator = ({ objIndication }) => {
  return (
    <ul className="indicator">
      {objIndication.map(indicator => (
        <li className="indicator__item" key={indicator.text}>
          <p className="indicator__text">
            {indicator.text}
            <span className="indicator__span">{indicator.value}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default WeatherIndicator;
