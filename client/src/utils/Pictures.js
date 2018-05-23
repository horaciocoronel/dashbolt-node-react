const BASE_URL = 'http://localhost:5000';

export {getPictures};

function getPictures() {
  const url = `${BASE_URL}/api/pictures/all`;
  return fetch(url)
    .then(res => res.json())
    .then(
      result => {
        let pictureIndex = Math.floor((Math.random() * 30) + 1);
        let picture = (result[pictureIndex-1])
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
