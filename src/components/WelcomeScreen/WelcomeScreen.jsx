import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Button } from 'components/Button';
import './welcomeScreen.scss';

import { Input } from 'components/Input';
import { useSelector } from 'react-redux';

// const KEY = '2ad6b3b56adc137acaefd4b3855025cf'; // blocked
const KEY = 'd66525f3861c64edb0280784b35cad3b';

const WelcomeScreen = ({ togleWelocmeScreen, weatherSetter, citySetter }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState(null);
  const [showDrop, setShowDrop] = useState(false);
  const [coordinates, setCoordinates] = useState({
    lon: null,
    lat: null,
  });

  const city = useSelector(state => state.weather.currentCity);

  useEffect(() => {
    if (inputValue) {
      const apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=5&appid=${KEY}`;

      axios
        .get(apiUrl)
        .then(response => {
          const cities = response.data;
          console.log(cities);
          setSuggestions(cities);
        })
        .catch(error => {
          console.error('Error fetching data:', error.response);
        });
    } else {
      setSuggestions(null);
    }
  }, [inputValue]);

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const showDropdown = () => {
    setShowDrop(true);
  };
  const hideDropDown = () => {
    setShowDrop(false);
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

  const fetch = (lat, lon) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}`;

    axios
      .get(apiUrl)
      .then(response => {
        const weather = response.data;
        console.log(weather);
        weatherSetter(weather);
      })
      .catch(error => {
        console.error('Error fetching data:', error.response);
      });
  };

  const fetchWeather = event => {
    event.preventDefault();

    console.log(suggestions);
    if (!suggestions) {
      return;
    }

    if (city.lat === 0 && city.lon === 0) {
      citySetter({
        lat: suggestions[0].lat,
        lon: suggestions[0].lon,
        name: suggestions[0].name,
      });

      fetch(suggestions[0].lat, suggestions[0].lon);
      togleWelocmeScreen();
      return;
    }

    fetch(city.lat, city.lon);
    togleWelocmeScreen();
  };

  return (
    <div className="welcome-screen">
      <div className="welcome-screen__text-box">
        <h1 className="welcome-screen__title">Babushka’s Weather Wisdom</h1>
        <p className="welcome-screen__paragraph">
          Your grandma’s ultimate weather guide
        </p>
      </div>
      <div className="welcome-screen__input-wrapper">
        <form
          onSubmit={fetchWeather}
          className="welcome-screen__form"
          action=""
        >
          <Input
            handleInputChange={handleInputChange}
            inputValue={inputValue}
            suggestions={suggestions}
            setInput={setInput}
            showDropdown={showDropdown}
            hideDropDown={hideDropDown}
            showDrop={showDrop}
          />
          <Button
            text="Show&nbsp;weather"
            className={'welcome-screen__button'}
            // fun={togleWelocmeScreen}
            type={'submit'}
          />
        </form>
      </div>
    </div>
  );
};

export default WelcomeScreen;

// .then(response => {
//   const cities = response.data.list.map(city => city.name);
//   setSuggestions(cities);
// })
