Meteor.methods({
	// return result of FizzBuzz upto `number` as an array
	fizzbuzz: function(number) {
		// always ensure arguments are of expected types
		check(number, Match.Integer);

		var values = [];

		// numbers below 1 don't fizz or buzz in this test
		if (number < 1) {
			throw new Meteor.Error('400', 'Numbers above 1 work best.');
		}

		// 1 to `number` inclusive
		for (var i = 1; i <= number; i++) {
			if ( ! (i % 3) && ! (i % 5)) values.push('Fizz Buzz');
			else if ( ! (i % 3)) values.push('Fizz');
			else if ( ! (i % 5)) values.push('Buzz');
			else values.push(i);
		}

		return values;
	}
});
