import './oneDayWeather.scss';

import { drizzle } from 'assets';

import { KelvinToCelsium, codeToIcon } from 'utils/converters';

const OneDayWeather = ({ temperture, description, icon, allDay }) => {
  return (
    <div className="todayWeather fade-in-bottom">
      <img
        className="todayWeather__image"
        src={icon ? codeToIcon(icon) : drizzle}
        alt="mark"
      />

      <p className="todayWeather__text">{temperture ? temperture : 0}</p>

      {/* <p className="todayWeather__description">
        {description ? description : ''}
      </p> */}
      <div className="todayWeather__box">
        <ul className="todayWeather__day-list">
          <li className="todayWeather__day-item">
            <p className="todayWeather__day-text">
              Morning:{' '}
              <span className="todayWeather__day-data">
                {KelvinToCelsium(allDay?.temp?.morn, allDay.mark)}
              </span>
            </p>
          </li>
          <li className="todayWeather__day-item">
            <p className="todayWeather__day-text">
              Evening:{' '}
              <span className="todayWeather__day-data">
                {KelvinToCelsium(allDay?.temp?.eve, allDay.mark)}
              </span>
            </p>
          </li>
        </ul>
        <ul className="todayWeather__day-list">
          <li className="todayWeather__day-item">
            <p className="todayWeather__day-text">
              Day:{' '}
              <span className="todayWeather__day-data">
                {KelvinToCelsium(allDay.temp.day, allDay.mark)}
              </span>
            </p>
          </li>
          <li className="todayWeather__day-item">
            <p className="todayWeather__day-text">
              Night:{' '}
              <span className="todayWeather__day-data">
                {KelvinToCelsium(allDay.temp.night, allDay.mark)}
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OneDayWeather;
