import axios from 'axios';
import Notiflix from 'notiflix';

const KEY = 'd66525f3861c64edb0280784b35cad3b';

const fetchCityCoordinates = async city => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${
        city || ' '
      }&limit=5&appid=${KEY}`
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

export default fetchCityCoordinates;
