require('dotenv').config();
const LOCATION_URL = "http://ip-api.com/json";
const DARK_SKY_URL = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${process.env.REACT_APP_DARK_SKY}`;
import axios from 'axios';
export {getWeather, getLocation};

async function getLocation() {
  const url = `${LOCATION_URL}`;
  let location;  
  return axios.get(url)
    .then(result => {
      location = {
        city: result.data.city,
        lat: result.data.lat,
        lon: result.data.lon
      }
      return location
    })
}

async function getWeatherApi(location) {
  const url = `${DARK_SKY_URL}/${location.lat},${location.lon}?units=si`;
  return axios.get(url)
    .then(res => res.data.currently)
}


async function getWeather() {
  let location = await getLocation();
  return await getWeatherApi(location);
}

getWeather()
