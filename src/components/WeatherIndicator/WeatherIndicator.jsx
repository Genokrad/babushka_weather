import { nanoid } from 'nanoid';
import './weatherIndicator.scss';
import { Item } from './Item';

const schema = [
  { text: 'Chance of precipitation:', value: '' },
  { text: 'Humidity:', value: '' },
  { text: 'Wind:', value: '' },
  { text: 'Pressure:', value: '' },
  { text: 'UV index:', value: '' },
  { text: 'Visibility:', value: '' },
];

const WeatherIndicator = ({ objIndication }) => {
  return (
    <ul className="indicator">
      {objIndication
        ? objIndication?.map(indicator => (
            <Item key={nanoid()} indicator={indicator} />
          ))
        : schema.map(indicator => (
            <Item key={nanoid()} indicator={indicator} />
          ))}
    </ul>
  );
};

export default WeatherIndicator;
