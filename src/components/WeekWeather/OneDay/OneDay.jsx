import './oneDay.scss';

const OneDay = ({ day }) => {
  return (
    <li className="day-card">
      <p className="day-card__day">{day.day}</p>
      <div className="day-card__box">
        <img className="day-card__image" src={day.icon} alt="mark" />
        <p className="day-card__temp">{day.temp}°</p>
      </div>
    </li>
  );
};

export default OneDay;
