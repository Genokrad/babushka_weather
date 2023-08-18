import './location.scss';
import { HiLocationMarker } from 'react-icons/hi';
import { formatDate } from 'utils/converters';

const Location = ({ fontColor, todayCiti }) => {
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
        <p style={{ color: fontColor }} className="location__date-text">
          Today, {formatDate(new Date())}
        </p>
      </div>
    </div>
  );
};

export default Location;
