const timeOfDay = () => {
  let currentTime = new Date();
  let currentHours = currentTime.getHours();
  
  switch(true) {
    case currentHours <= 4:
      return "city%20night"
        break;
    case currentHours <= 6:
      return "sunrise"
        break;
    case currentHours <= 12:
      return "city%20morning"
        break;
    case currentHours <= 18:
      return "sunny%20afternoon"
        break;
    case currentHours <= 19:
      return "sunset"
        break;
    case currentHours <= 24:
      return "city%20night"
        break;
    default:
      return "landscape%20city"
  }
}

module.exports = {
  timeOfDay: timeOfDay()
}
console.log(timeOfDay())