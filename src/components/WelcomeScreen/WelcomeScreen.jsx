import './welcomeScreen.scss';

import Notiflix from 'notiflix';

import React, { useState, useEffect, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setWeekWeather } from 'features/weather/weatherSlice';

import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Loader } from 'components/Loader';

import { grandmother } from 'assets';

import { fetchCityCoordinates, fetchCitiesWeather } from 'services';

const WelcomeScreen = ({ togleWelocmeScreen, weatherSetter, citySetter }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState(null);
  const [showDrop, setShowDrop] = useState(false);
  const [coordinates, setCoordinates] = useState({
    lon: null,
    lat: null,
    city: null,
  });

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.weather.loading);

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  const some = useCallback(async () => {
    // dispatch(setLoading());
    const cities = await fetchCityCoordinates(inputValue);
    // dispatch(setLoading());
    setSuggestions(cities);
  }, [inputValue]);

  useEffect(() => {
    if (inputValue.trim() !== '') {
      some();
    }
  }, [inputValue, some]);

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
      togleWelocmeScreen();
      return;
    }
    dispatch(setLoading());
    const weather = await fetchCitiesWeather(coordinates.lat, coordinates.lon);
    dispatch(setWeekWeather({ ...weather, city: coordinates.city }));
    dispatch(setLoading());

    togleWelocmeScreen();
    // return;
  };

  return (
    <div className="welcome-screen">
      {isLoading && <Loader />}
      <div className="welcome-screen__text-box">
        <h1 className="welcome-screen__title">
          Babushka’s Weather&nbsp;Wisdom
        </h1>
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

        <div className="welcome-screen__image-wrapper">
          <img
            className="welcome-screen__image"
            src={grandmother}
            alt="grandmother"
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
