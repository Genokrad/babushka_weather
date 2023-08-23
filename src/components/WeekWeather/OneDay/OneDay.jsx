// import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import './oneDay.scss';
import {
  codeToIcon,
  converToMonth,
  convertToDate,
  dateToDayOfWeek,
  KelvinToCelsium,
} from 'utils/converters';

const OneDay = ({ day }) => {
  const measure = useSelector(state => state.weather.tempertureMeasure);

  return (
    <li className="day-card">
      <div>
        <p className="day-card__day">{dateToDayOfWeek(day.dt)}</p>
        <p className="day-card__date">{`${convertToDate(
          day.dt
        )} ${converToMonth(day.dt)}`}</p>
      </div>
      <div className="day-card__box">
        <img
          className="day-card__image"
          src={codeToIcon(day?.weather[0]?.icon)}
          alt="mark"
        />
        <p className="day-card__temp">
          {KelvinToCelsium(day.temp.day, measure)}
        </p>
      </div>
    </li>
  );
};

export default OneDay;
