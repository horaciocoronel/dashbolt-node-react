import React, { Component } from 'react';
import Middle from './layout/Middle';
import Bottom from './layout/Bottom';
import Top from './layout/Top';
import {getUserName} from '../utils/UserInput';
import {getPictures} from '../utils/Pictures';
import {getWeather, getLocation} from '../utils/Weather';
import {imgStateData} from '../utils/DefaultStateData';

import './App.scss';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      userName: ', Horacio.',
      actualImage: {
        _id: "5b06e95421f15919945b4017",
        fullname: "Alberto Restifo",
        likes: "1103",
        photoid: "Ni4NgA64TFQ",
        photourl: "https://images.unsplash.com/photo-1419064642531-e575728395f2?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjIzOTg1fQ&s=570cda056ded97ac186388bc6d245b30",
        username: "albertorestifo"
      },
      weather: {
        icon: 'partly-cloudy-day',
        temperature: ''
      },
      city: ''
    }
  }

  fetchLocation() {
    getLocation()
      .then(res => {
        this.setState({city: res.city})        
      })
  }

  fetchPictures() {
    getPictures()
      .then(res => {
        this.setState({actualImage: res})
      })
  }

  fetchWeather() {
    getWeather()
      .then(res => {
        this.setState({weather: res})
      })
  }

  componentDidMount() {
    this.fetchPictures();
    this.fetchWeather();
    this.fetchLocation();
  }

  render() {
    // console.log('render',imgStateData)
    return (
      <div className="container" style={{backgroundImage: `url(${this.state.actualImage.photourl})`}}>
        <Top weather={this.state.weather} city={this.state.city} />
        <Middle userName={this.state.userName} />
        <Bottom imageData={this.state.actualImage} />
      </div>
    )
  }
}

export default App;
