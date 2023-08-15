import './searchBar.scss';

import { FiSettings, FiArrowRight } from 'react-icons/fi';

import { Button } from 'components/Button';
import { Input } from 'components/Input';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <form className="search-bar__form" action="">
        <Input className={'search-bar__input'} />
        <Button
          className="search-bar__button"
          text="Show&nbsp;weather"
          icon={FiArrowRight}
          type={'submit'}
          iconClass={'search-bar__icon'}
        />
        <Button
          className="search-bar__button-settings"
          icon={FiSettings}
          type={'submit'}
          iconClass={'search-bar__icon-settings'}
        />
      </form>

      <div className="search-bar__divider"></div>
    </div>
  );
};

export default SearchBar;
