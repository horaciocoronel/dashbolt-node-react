const express = require('express');
const router = express.Router();

// Load Quotes Model
const Quotes = require('../../models/Quote');

// @route 	GET api/test
// @desc 		Test  route
// @access	Public
router.get('/test', (req, res) => res.json({msg: 'Quotes works'}));

// @route 	GET api/Quotes/all
// @desc 		List all Quotes
// @access	Public
router.get('/qotd', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Get the count of all quotes
  Quotes.count().exec((err, count) => {
    // Get a random entry
    let random = Math.floor(Math.random() * count);
    // Query all Quotes but only fetch one offset by our random #
    Quotes.findOne()
    .skip(random)
    .populate()
    .then(quotes => {
      if(!quotes) {
        errors.quotes = 'There are no quotes'
        return res.status(404).json(errors)
      }
      res.json(quotes)
    })
    .catch(err => 
      res.status(404).json({quotes: 'There was a problem with the server. Please try again later'})
    )
    })

});

module.exports = router;