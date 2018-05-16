const axios = require('axios');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const baseURL = "https://api.unsplash.com/photos/random";

// Load Quotes Data
const quotesData = require('../localData/quotesData');

// Load Quotes model
const Quote = require('../models/Quote');

// DB Config
const db = require('../config/keys').mongoURI;

// Connect to mongoDB
mongoose
	.connect(db)
	.then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const populateQuotes = () => {
    quotesData.map(quote => {
      if(quote.quoteText.length <= 100) {
        const newQuote = new Quote({
          quoteAuthor: quote.quoteAuthor,
          quoteText: quote.quoteText
        });
        console.log('newQuote', newQuote)

        // Save new Collection
        new Quote(newQuote)
          .save()
          .then(profile => console.log(newQuote))
          .then(function (response) {
            mongoose.disconnect();
          })
        }
      })
};

populateQuotes();
