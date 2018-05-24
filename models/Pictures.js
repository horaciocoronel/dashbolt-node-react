const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PicturesSchema = new Schema({
  photoid: {
    type: String,
    required: true
  },
    photourl: {
      type: String,
      required: true
  },
  username: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true
  },
  likes: {
    type: String,
    required: false
  },
  timeofday: {
    type: String,
    required: true
  }
});

module.exports = Picture = mongoose.model('pictures', PicturesSchema);