import './dropdawn.scss';

const DropDown = ({ suggestions, setInput, hideDropDown }) => {
  const dropClick = (text, lat, lon) => {
    setInput(text, lat, lon);
    hideDropDown();
  };

  return (
    <ul className="dropdawn">
      {suggestions.map(city => (
        <li
          onClick={() =>
            dropClick(
              `${city?.name}, ${city?.state || ''} ${city?.country}`,
              city?.lat,
              city?.lon
            )
          }
          className="dropdawn__item"
          key={city?.lat + city?.lon}
        >
          <p className="dropdawn__bold-text">
            <b>{city?.name},</b>
            {city?.state && (
              <span className="dropdawn__regular-text">{city?.state},</span>
            )}
            <span className="dropdawn__regular-text">{city?.country}</span>
          </p>
        </li>
      ))}
    </ul>
  );
};

export default DropDown;
