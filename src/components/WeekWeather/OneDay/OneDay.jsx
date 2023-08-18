// import { nanoid } from 'nanoid';
import './oneDay.scss';
import {
  codeToIcon,
  convertToDate,
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
      <div>
        <p className="day-card__day">{dateToDayOfWeek(day.dt)}</p>
        <p className="day-card__date">{convertToDate(day.dt)}</p>
      </div>
      <div className="day-card__box">
        <img
          className="day-card__image"
          src={codeToIcon(day?.weather[0]?.icon)}
          alt="mark"
        />
        <p className="day-card__temp">{KelvinToCelsium(day.temp.day)}°</p>
      </div>
    </li>
  );
};

export default OneDay;
