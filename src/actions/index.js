import axios from 'axios';

const API_KEY = '408412c5e571e1e1c85d0f7d4b662cb5';
const ROOT_URL = `http://api/openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// This will be used later in reducers
export const FETCH_WEATHER = 'FETCH_WEATHER';

// Action creator to make API request to get weather data
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload:request
  };
}
