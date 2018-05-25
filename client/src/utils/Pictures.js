const BASE_URL = 'http://localhost:5000';

export {getPictures};

function getPictures() {
  const url = `${BASE_URL}/api/pictures/all`;
  return fetch(url)
    .then(res => res.json())
    .then(
      result => {
        
        let pictureIndex = Math.floor((Math.random() * 30) + 1);
        let timeOfDayPic = result.filter(picture => {
          if (picture.timeofday === timeOfDay()) {
            return picture
          }
        })
        let picture = (timeOfDayPic[pictureIndex-1])
        return picture
      }
    )
    .catch(function (error) {
      if (error.response) {
          if (error.response.status === 404) {
              console.log('error')
          }
      }
  })
}


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