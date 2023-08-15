import { DropDown } from 'components/DropDown';
import sprite from '../../assets/sprite.svg';

import './input.scss';

const Input = ({
  className,
  handleInputChange,
  inputValue,
  suggestions,
  setInput,
  showDropdown,
  hideDropDown,
  showDrop,
}) => {
  return (
    <div className="input">
      <input
        onClick={showDropdown}
        onChange={handleInputChange}
        value={inputValue}
        className={className || 'input__field'}
        type="text"
        placeholder="Search city..."
      />
      <svg className="input__icon">
        <use href={sprite + '#icon-Search'}></use>
      </svg>

      {showDrop && suggestions && suggestions?.length !== 0 && (
        <DropDown
          suggestions={suggestions}
          setInput={setInput}
          hideDropDown={hideDropDown}
        />
      )}
    </div>
  );
};

export default Input;
