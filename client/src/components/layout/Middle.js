import React, { Component } from 'react';
import Clock from 'react-live-clock';


export class MiddleCenter extends Component {
  render() {
    return (
      <div className="row">
        <div className="middle">Feature</div>
        <div className="middle center">
          <div className="time">
            <Clock format={'HH:mm'} ticking={true}/>
          </div>
          <div className="greeting">
            Good morning, Horacio
          </div>
          <div className="focus">
            focus
          </div>
        </div>
        <div className="middle">Feature</div>
      </div>
    )
  }
}

export default MiddleCenter
