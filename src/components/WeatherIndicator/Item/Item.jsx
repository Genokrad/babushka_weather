import React from 'react';

const Item = ({ indicator }) => {
  return (
    <li className="indicator__item">
      <p className="indicator__text">
        {indicator.text}
        <span className="indicator__span">{indicator.value}</span>
      </p>
    </li>
  );
};

export default Item;
