import axios from 'axios';
import Notiflix from 'notiflix';
const apiKey = process.env.REACT_APP_API_KEY;

const fetchCitiesWeather = async (lat, lon) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&appid=${apiKey}`
    );
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      Notiflix.Notify.failure(error.message);
    } else {
      Notiflix.Notify.failure(error.message);
    }
  }
};

export default fetchCitiesWeather;
