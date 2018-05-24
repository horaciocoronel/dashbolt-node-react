import React, { Component } from 'react';
import Clock from 'react-live-clock';
import Greeting from '../_Greetings';


export class MiddleCenter extends Component {
  render() {
    return (
      <div className="row">
        <div className="middle hm"></div>
        <div className="middle center">
          <div className="time">
            <Clock format={'HH:mm'} ticking={true}/>
          </div>
          
            <Greeting userName={this.props.userName} />
          <div className="focus">
            
          </div>
        </div>
        <div className="middle hm"></div>
      </div>
    )
  }
}

export default MiddleCenter
