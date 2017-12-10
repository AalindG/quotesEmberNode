const mongoose = require('mongoose');

const quoteSchema = mongoose.Schema({
	quote: {
		type: String,
		required: true
	},
	author: {
		type: String
	}
});

module.exports = mongoose.model('Quote', quoteSchema);