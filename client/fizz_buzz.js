Session.setDefault('fizzbuzz', '');

Template.fizzbuzz.helpers({
	getFizzBuzz: function() {
		return Session.get('fizzbuzz');
	}
});

Template.fizzbuzz.events({
	// grab the number and send it off to the server
	'click button': function(e, template) {
		var number = template.find('#number').value;

		// convert it from a string, then to int
		number = parseInt(number, 10);

		// ensure they've actually entered a number
		if (isNaN(number)) {
			return Session.set('fizzbuzz', 'Only numbers work with FizzBuzz.');
		}

		// numbers below 1 don't fizz or buzz in this test
		if (number < 1) {
			return Session.set('fizzbuzz', 'Numbers above 1 work best.');
		}

		// perform fizzbuzz calculation on server
		Meteor.call('fizzbuzz', number, function(err, result) {
			if (err) {
				return Session.set('fizzbuzz', err.reason);
			}

			// turn resulting fizzbuzz array into a string
			Session.set('fizzbuzz', result.join(', '));
		});
	}
});
