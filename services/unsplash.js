const axios = require('axios');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const baseURL = "https://api.unsplash.com/photos/random";
const timeOfDay = require('../utils/timeOfDay.js');

// Load Pictures model
const Pictures = require('../models/Pictures');

// DB Config
const db = require('../config/keys').mongoURI;

// Connect to mongoDB
mongoose
	.connect(db)
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.log(err));

// Delete Collection
const deletePicturesCollection = () => {
  mongoose.connection.collections['pictures'].drop(
    function(err) {
      console.log('collection dropped');
    }
  );
}
// Delete picture from timeOfDay
const deletePictures = (timeofday) => {
  mongoose.connection.collections['pictures'].deleteMany(
    {timeofday: timeofday}, () => console.log(`Deleted pictures from ${timeofday}`)
  );
}
  
// Get Pictures
const getPictures = () => {
  let keyword = timeOfDay.timeOfDay;
  axios.get(`${baseURL}/?client_id=${keys.unsplashAccessKey}&featured=true&count=30&query=${keyword}&orientation=landscape`)
  .then(function (response) {
    if(response.data.length === 30) {
      // Delete old collection 
        deletePictures(keyword);
      // Map response
      response.data.map(photo => {
        const newPicture = new Pictures({
          photoid: photo.id,
          photourl: photo.urls.full,
          username: photo.user.username,
          fullname: photo.user.name,
          likes: photo.likes,
          timeofday: keyword
        });

        // Save new Collection
        new Pictures(newPicture)
          .save()
          .then(profile => console.log(newPicture))
          .then(function (response) {
            mongoose.disconnect();
          })
        
      });
    }
  })
  .catch(function (error) {
    console.log(error);
  });
};

getPictures();

module.exports = {
  getPictures,
  deletePicturesCollection
}