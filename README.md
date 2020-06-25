# time-interval-lipsum
Generate random text for random dates

## Installation
```bash
npm install smhg/time-interval-lipsum#master
```

## Usage
```javascript
const getData = require('time-interval-lipsum');

const start = new Date('2020-03-01T00:00:00');
const end = new Date('2020-04-01T00:00:00');

getData(start, end)
	.then(data => {
		console.log(data);
	});

/*
Map {
  2020-03-08T23:00:00.000Z => 'Sed tristique ligula quis leo tincidunt, vel cursus tortor convallis. Aliquam erat volutpat. Mauris finibus enim orci, vulputate euismod enim molestie eu. Quisque nec scelerisque velit.',
  2020-03-24T23:00:00.000Z => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque metus vitae tristique sagittis. Ut malesuada condimentum ultricies. Sed ante justo, convallis eu libero tristique, efficitur varius est. Nulla eget luctus risus. Ut convallis et eros sit amet efficitur. Nulla facilisi. Vivamus et justo libero. Quisque nec scelerisque velit. Quisque sagittis fermentum felis, id molestie dolor. Curabitur id ante in purus vehicula vulputate vel vel ipsum. Vivamus varius a justo eu lacinia.'
}
*/
```
