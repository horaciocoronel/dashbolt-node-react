import React from 'react';
import WeatherIcon from 'react-icons-weather';

const Weather = (props) => {
    return (
      <div className="top right">
        <div className="weather-info">
          <WeatherIcon
            name='darksky'
            iconId={props.weather.icon}
            className='weather-icon'
            fixedWidth={true}
          >
          <span className="weather-temperature">{Math.floor(props.weather.temperature)}°</span>
          </WeatherIcon>
        </div>
        <div className="weather-city">
          {props.city}
        </div>
      </div> 
    )
}

export default Weather;