import React, { Component } from 'react'
// import WeatherIcon from 'react-icons-weather';
import Weather from '../_Weather';

export class Top extends Component {
  render() {
    return (
      <div className="row">
      <div className="top left"></div>
      <div className="top center"></div>
      <Weather weather={this.props.weather} city={this.props.city} />
      </div>
    )
  }
}

export default Top
