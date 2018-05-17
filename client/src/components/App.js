import React, { Component } from 'react';
import Middle from './layout/Middle';
import {getQuotes} from '../utils/Quotes';
import './App.scss';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quoteText: '',
      quoteAuthor: ''
    }
  }


  fetchQuote() {
    getQuotes()
    .then(res => {
      this.setState({quoteText: res.quoteText, quoteAuthor: res.quoteAuthor});
    })
  }

  componentDidMount() {
    this.fetchQuote()
  }
  

  render() {
    return (
      <div className="container">
        <h1>My React App</h1>
        <Middle />
        <p>{this.state.quoteText}</p>
        <p>{this.state.quoteAuthor}</p>
      </div>
    )
  }
}

export default App;
