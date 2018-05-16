import React, { Component } from 'react';
import Middle from './layout/Middle';
import './App.scss';

export class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>My React App</h1>
        <Middle />
      </div>
    )
  }
}

export default App;
