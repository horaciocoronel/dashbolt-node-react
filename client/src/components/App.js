import React, { Component } from 'react';
import Middle from './layout/Middle';
import Bottom from './layout/Bottom';
import {getUserName} from '../utils/UserInput';
import {getPictures} from '../utils/Pictures';
import './App.scss';

export class App extends Component {
  constructor() {
    super()
    this.state = {
      userName: ', Horacio.',
      actualImage: {
        fullname: "Greg Shield",
        likes: "244",
        photoid: "Du30R57aCyM",
        photourl: "http://images.unsplash.com/31/xzuvhgdQGul0amA3Qc7a_373A9681.jpg?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjIzOTg1fQ&s=9ecd1927c5c151181ce2e3f8d3b6acce",
        username: "gregshield",
        _id: "5afbb1bfaca9da808d6b228b",
      }
    }
  }

  fetchPictures() {
    getPictures()
      .then(res => {
        this.setState({actualImage: res})
      }
      )
  }

  setMyState(data) {
    console.log(data)
    this.setState({
      userName: data
    })
  }

  componentDidMount() {
    this.fetchPictures()
  }

  render() {
    return (
      <div className="container" style={{backgroundImage: `url(${this.state.actualImage.photourl})`}}>
        <h1>My React App</h1>
        <Middle userName={this.state.userName} />
        <Bottom imageData={this.state.actualImage} />
      </div>
    )
  }
}

export default App;
