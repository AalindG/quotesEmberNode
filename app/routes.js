const Quote = require('../models/quote');

const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
	Quote.find({}, (err, quotes) => {
		if(err) {console.log('Error in get request: ', err);}
		else{
			res.json({quotes: quotes})
		}

	})
})

router.post('/add', (req,res) => {
	let newQuote = new Quote();
	newQuote.quote = res.body.quote;
	newQuote.author = 'undefined'? 'Unknown' : res.body.author;

	newQuote.save(err => {
		if(err){
			console.log('Error in post req: ', err);
		}else{
			res.redirect('/quotes');
		}
	})

});

module.exports = router;