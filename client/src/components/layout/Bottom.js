import React, { Component } from 'react';
import {getQuotes} from '../../utils/Quotes';
import ImageCopyright from '../bottom/ImageCopyright';
import Contact from '../bottom/_Contact';

export class BottomCenter extends Component {
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
      <div className="row">
        <div className="bottom">
          <ImageCopyright imageData={this.props.imageData} />
        </div>
        <div className="bottom center">
        <h3>{this.state.quoteText}</h3>
        <h6>{this.state.quoteAuthor}</h6>
        
        </div>
        <Contact />
    </div>
    )
  }
}

export default BottomCenter