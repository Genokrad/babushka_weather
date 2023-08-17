import './dashboard.scss';

import { OneDayWeather } from 'components/OneDayWeather';
import { WeatherIndicator } from 'components/WeatherIndicator';
import { WeatherMessage } from 'components/WeatherMessage';

// const objIndication = [
//   { text: 'Chance of precipitation:', value: '42%' },
//   { text: 'Humidity:', value: '49%' },
//   { text: 'Wind:', value: '11 km/h' },
//   { text: 'Pressure:', value: '1,020 mBar' },
//   { text: 'UV index:', value: 'High, 7' },
//   { text: 'Visibility:', value: '10 km' },
// ];

const Dashboard = ({ temperture, objIndication, pageType }) => {
  return (
    <>
      <WeatherMessage />
      <div className="indicators">
        <OneDayWeather temperture={temperture} pageType={pageType} />
        <WeatherIndicator objIndication={objIndication} />
      </div>
    </>
  );
};

export default Dashboard;
