const BASE_URL = 'http://localhost:5000';

export {getQuotes};

function getQuotes() {
  const url = `${BASE_URL}/api/quotes/qotd`;
  return fetch(url)
    .then(res => res.json())
    .then(
      result => {
        return result
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
