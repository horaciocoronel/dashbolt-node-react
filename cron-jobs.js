const cron = require('node-cron');
const getPictures = require('./services/unsplash');

cron.schedule('0 0,4,6,12,18,19 * * 0-6', () => {
  getPictures;
  console.log(`Run at ${Date.now()}`)
});