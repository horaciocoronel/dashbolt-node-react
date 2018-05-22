import React from 'react';

const Greetings = (props) => {
  let currentTime = new Date();
  let currentHours = currentTime.getHours();
  // console.log(currentTime)
  
  switch(true) {
    case currentHours <= 4:
      return (
        <div className="greeting">
          Good night{props.userName}
        </div>
      )
        break;
    case currentHours <= 12:
      return (
        <div className="greeting">
          Good morning{props.userName}
        </div>
      )
        break;
    case currentHours >= 13:
      return (
        <div className="greeting">
          Good afternoon{props.userName}
        </div>
      )
        break;
    case currentHours >= 19:
      return (
        <div className="greeting">
          Good night{props.userName}
        </div>
      )
        break;
    default:
    console.log(currentHours);
      return (
        <div className="greeting">
          Hello{props.userName}!
        </div>
      )
  }
}

export default Greetings;