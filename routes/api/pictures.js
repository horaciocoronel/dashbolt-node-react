const express = require('express');
const router = express.Router();

// Load Pictures Model
const Pictures = require('../../models/Pictures');

// @route 	GET api/test
// @desc 		Test  route
// @access	Public
router.get('/test', (req, res) => res.json({msg: 'Pictures works'}));

// @route 	GET api/pictures/all
// @desc 		List all Pictures
// @access	Public
router.get('/all', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');  
  Pictures.find()
  .populate()
  .then(pictures => {
    if(!pictures) {
      errors.pictures = 'There are no pictures'
      return res.status(404).json(errors)
    }
    res.json(pictures)
  })
  .catch(err => 
    res.status(404).json({pictures: 'There was a problem with the server. Please try again later'})
  )
});

module.exports = router;