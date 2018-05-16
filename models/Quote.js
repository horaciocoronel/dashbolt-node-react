const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const QuoteSchema = new Schema({
  quoteAuthor: {
    type: String,
    required: true
  },
    quoteText: {
      type: String,
      required: true
  }
});

module.exports = Picture = mongoose.model('quotes', QuoteSchema);