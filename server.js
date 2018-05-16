const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();


const pictures = require('./routes/api/pictures');
const quotes = require('./routes/api/quotes');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to mongoDB
mongoose
	.connect(db)
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.log(err));

// Use Routes
app.use('/api/pictures', pictures);
app.use('/api/quotes', quotes);

// Serve static assets if in production 
if(process.env.NODE_ENV=== 'production') {
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	});
}

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server is running on port ${port}`));