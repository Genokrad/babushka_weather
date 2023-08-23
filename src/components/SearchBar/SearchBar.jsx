import './searchBar.scss';
import Notiflix from 'notiflix';

import { useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  setLoading,
  setScreenTogler,
  setWeekWeather,
} from 'features/weather/weatherSlice';

import { FiSettings, FiArrowRight } from 'react-icons/fi';

import { Button } from 'components/Button';
import { Input } from 'components/Input';

import { fetchCitiesWeather, fetchCityCoordinates } from 'services';
import { Measure } from 'components/Measure';

const SearchBar = () => {
  const curantCity = useSelector(state => state?.weather?.weekWeather?.city);
  const [inputValue, setInputValue] = useState(curantCity || '');
  const [suggestions, setSuggestions] = useState(null);
  const [showDrop, setShowDrop] = useState(false);
  const [coordinates, setCoordinates] = useState({
    lon: null,
    lat: null,
    city: null,
  });
  const [settingTogler, setSettingTogler] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const getCoordinates = useCallback(async () => {
    // dispatch(setLoading());
    const cities = await fetchCityCoordinates(inputValue);
    // dispatch(setLoading());
    setSuggestions(cities);
  }, [inputValue]);

  useEffect(() => {
    if (inputValue.trim() !== '') {
      getCoordinates();
    }
  }, [inputValue, getCoordinates]);

  const showDropdown = () => {
    setShowDrop(true);
  };
  const hideDropDown = () => {
    setShowDrop(false);
  };

  const setInput = (value, lat, lon, name) => {
    setInputValue(value);
    setCoordinates({ lon: lon, lat: lat, city: name });
  };

  const fetchWeather = async event => {
    event.preventDefault();

    if (!suggestions) {
      Notiflix.Notify.failure(
        'Еhe input field is empty, enter the name of the city!'
      );
      return;
    }
    if (suggestions.length < 1) {
      Notiflix.Notify.failure('There is no city with this name!');
      return;
    }

    if (
      coordinates.lat === null &&
      coordinates.lon === null &&
      suggestions.length > 0
    ) {
      dispatch(setLoading());
      const weather = await fetchCitiesWeather(
        suggestions[0].lat,
        suggestions[0].lon
      );
      dispatch(setWeekWeather({ ...weather, city: suggestions[0].name }));
      dispatch(setLoading());

      return;
    }

    dispatch(setLoading());
    const weather = await fetchCitiesWeather(coordinates.lat, coordinates.lon);
    dispatch(setWeekWeather({ ...weather, city: coordinates.city }));
    dispatch(setLoading());
  };

  const screenToglerFunction = () => {
    dispatch(setScreenTogler());
  };

  const dropdownMeasureTogler = event => {
    event.preventDefault();
    setSettingTogler(!settingTogler);
  };

  return (
    <div className="search-bar">
      <h2 onClick={screenToglerFunction} className="search-bar__title">
        Babushka’s Weather&nbsp;Wisdom
      </h2>
      <div className="search-bar__separator">
        <form onSubmit={fetchWeather} className="search-bar__form" action="">
          <Input
            handleInputChange={handleInputChange}
            className={'search-bar__input'}
            inputValue={inputValue}
            suggestions={suggestions}
            setInput={setInput}
            showDropdown={showDropdown}
            hideDropDown={hideDropDown}
            showDrop={showDrop}
          />
          <Button
            className="search-bar__button"
            hideText="search-bar__hide-text"
            text="Show&nbsp;weather"
            icon={FiArrowRight}
            type={'submit'}
            iconClass={'search-bar__icon'}
          />
        </form>
        <Button
          fun={dropdownMeasureTogler}
          className="search-bar__button-settings"
          icon={FiSettings}
          type={'button'}
          iconClass={'search-bar__icon-settings'}
        />
        {settingTogler && <Measure />}
      </div>

      <div className="search-bar__divider"></div>
    </div>
  );
};

export default SearchBar;
