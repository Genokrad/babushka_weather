import sprite from '../../assets/sprite.svg';

import './input.scss';

const Input = () => {
  return (
    <div className="input">
      <input
        className="input__field"
        type="text"
        placeholder="Search city..."
      />
      <svg className="input__icon">
        <use href={sprite + '#icon-Search'}></use>
      </svg>
    </div>
  );
};

export default Input;
