import './location.scss';
import { HiLocationMarker } from 'react-icons/hi';
import { convertToFullFormatData, formatDate } from 'utils/converters';

const Location = ({ fontColor, todayCiti, todayDate, week }) => {
  return (
    <div className="location">
      <div className="location__wrapper">
        <HiLocationMarker
          style={{ color: fontColor, width: '22px', height: '26px' }}
        />
        {/* <img className="location__image" src={mark} alt="mark" /> */}
        <p style={{ color: fontColor }} className="location__city">
          {todayCiti.name}
        </p>
      </div>
      <div>
        {!week && (
          <p style={{ color: fontColor }} className="location__date-text">
            Today,{' '}
            {todayDate
              ? convertToFullFormatData(todayDate)
              : formatDate(new Date())}
          </p>
        )}
        {week && (
          <p style={{ color: fontColor }} className="location__date-text">
            {week}
          </p>
        )}
      </div>
    </div>
  );
};

export default Location;
