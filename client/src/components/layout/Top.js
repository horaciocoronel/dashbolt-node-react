import React, { Component } from 'react'
// import WeatherIcon from 'react-icons-weather';
import Weather from '../_Weather';

export class Top extends Component {

  checkWeather() {
    if (this.props.weather.temperature != '') {
      return <Weather weather={this.props.weather} city={this.props.city} />
    } else {
      return <div className="top right"></div>
    }
  }

  render() {
    return (
      <div className="row">
      <div className="top left"></div>
      <div className="top center"></div>
      {this.checkWeather()}
      </div>
    )
  }
}

export default Top
