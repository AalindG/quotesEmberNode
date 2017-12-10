import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		addQuotes: function(){
			let self = this;

			let quote = this.get('quote');
			let author = this.get('author');

			let newQuote = this.store.createRecord('quote', {
				quote: quote,
				author: author 
			});

			newQuote.save();

			self.transitionToRoute('/quotes');
		}
	}
});
