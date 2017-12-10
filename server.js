const express  = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3000;

// DB connection
mongoose.connect('mongodb://localhost:27017/nodekb');
let db = mongoose.connection;

// check if connected
db.once('open', ()=>{
	console.log('DB connected');
});

// Check for DB errors
db.on('error', err => {
	console.log('Error while connecting to DB: ', err);
})


// set the static files location 
app.use(express.static(__dirname + '/public'));

//bodyParser Middleware to allow different encoding requests
app.use(bodyParser.urlencoded({ extended: true }));  
app.use(bodyParser.json());       // to support JSON-encoded bodies


//Routes API
// let router = express.Router();  
let quotes = require('./app/routes')
app.use('/quotes', quotes);  
// require('./app/routes')(router); // configure our routes

// startup our app at http://localhost:3000
app.listen(port);


// expose app
exports = module.exports = app;
