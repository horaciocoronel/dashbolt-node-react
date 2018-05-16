import React, { Component } from 'react';
import Clock from 'react-live-clock';


export class MiddleCenter extends Component {
  render() {
    return (
      <div>
        <Clock format={'HH:mm'} ticking={true}/>        
      </div>
    )
  }
}

export default MiddleCenter
