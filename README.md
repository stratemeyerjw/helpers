# helpers

## Example usage

### Usage

const helpers = require('helpers.js');

#### Date.FromNow

##### 6 hours from now 

		let date = new helpers.Date.FromNow({hours:6})
		console.log(date);

##### 2 weeks from now
		
		console.log(new helpers.Date.FromNow({weeks:2}));

##### 1 hour and 15 minutes from now
	
		console.log(new helpers.Date.FromNow({hours:6, minutes: 15}));
	
##### 1 hour from given date

		console.log(new helpers.Date.FromNow({hours:1},new Date('1-1-2021 12:00 PM')));

#### Date.FromSpan

##### compare dates
		var dateSpan = new helpers.Date.Span(new Date(), new helpers.Date.FromNow({hours:1, minutes: 15}));
		console.log(dateSpan);
	
##### or something like
		console.log(new helpers.Date.Span(new Date(), new helpers.Date.FromNow({hours:1, minutes: 15})).toStringAgo);
		
	
