// import { nanoid } from 'nanoid';
import './oneDay.scss';
import {
  // convertToDate,
  dateToDayOfWeek,
  // DateNow,
  KelvinToCelsium,
} from 'utils/converters';

const OneDay = ({ day }) => {
  // const currentDate = new Date();
  // const currentTimestamp = Math.floor(currentDate.getTime() / 1000);

  return (
    <li className="day-card">
      <p className="day-card__day">{dateToDayOfWeek(day.dt)}</p>
      <div className="day-card__box">
        <img
          className="day-card__image"
          src={`https://openweathermap.org/img/wn/${day?.weather[0]?.icon}@2x.png `}
          alt="mark"
        />
        <p className="day-card__temp">{KelvinToCelsium(day.temp.day)}°</p>
      </div>
    </li>
  );
};

export default OneDay;
