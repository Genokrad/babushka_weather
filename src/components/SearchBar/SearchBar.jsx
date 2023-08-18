import './searchBar.scss';

import { FiSettings, FiArrowRight } from 'react-icons/fi';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import {
  setCurrentCity,
  setLoading,
  setTodayWeather,
} from 'features/weather/weatherSlice';
import Notiflix from 'notiflix';

// const KEY = '2ad6b3b56adc137acaefd4b3855025cf'; // blocked
const KEY = 'd66525f3861c64edb0280784b35cad3b';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState(null);
  const [showDrop, setShowDrop] = useState(false);
  const [coordinates, setCoordinates] = useState({
    lon: null,
    lat: null,
  });

  const dispatch = useDispatch();

  const citySetter = obj => {
    dispatch(setCurrentCity(obj));
  };

  const weatherSetter = obj => {
    dispatch(setTodayWeather(obj));
  };

  // const city = useSelector(state => state.weather.currentCity);

  useEffect(() => {
    if (inputValue) {
      const apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=5&appid=${KEY}`;

      axios
        .get(apiUrl)
        .then(response => {
          const cities = response.data;

          setSuggestions(cities);
        })
        .catch(error => {
          console.error('Error fetching data:', error.response);
          Notiflix.Notify.failure(error.message);
        });
    } else {
      setSuggestions(null);
    }
  }, [inputValue]);

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const setInput = (value, lat, lon, name) => {
    setInputValue(value);
    citySetter({ ...coordinates, lat: lat, lon: lon, name: name });
    setCoordinates({
      ...coordinates,
      lat: lat,
      lon: lon,
      name: name,
    });
  };

  const showDropdown = () => {
    setShowDrop(true);
  };
  const hideDropDown = () => {
    setShowDrop(false);
  };

  const dropdownMeasureTogler = () => {
    Notiflix.Notify.warning('Not yet ready functionality');
  };

  const fetchWeather = event => {
    event.preventDefault();
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${KEY}`;

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

    axios
      .get(apiUrl)
      .then(response => {
        dispatch(setLoading());
        const weather = response.data;

        weatherSetter(weather);
      })
      .catch(error => {
        console.error('Error fetching data:', error.response);
        Notiflix.Notify.failure(error.response);
      })
      .finally(dispatch(setLoading()));
    setInputValue('');
  };

  return (
    <div className="search-bar">
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
          type={''}
          iconClass={'search-bar__icon-settings'}
        />
      </div>

      <div className="search-bar__divider"></div>
    </div>
  );
};

export default SearchBar;
