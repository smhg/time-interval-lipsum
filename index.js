const lipsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque metus vitae tristique sagittis. Suspendisse viverra eleifend ultricies. Sed tristique ligula quis leo tincidunt, vel cursus tortor convallis. Pellentesque interdum, ante sit amet eleifend tincidunt, orci nisi feugiat quam, non pharetra justo mauris eu velit. Donec sed ipsum porttitor, accumsan arcu id, consectetur odio. Nunc ornare diam egestas massa tempus, id posuere nisl dictum. Ut malesuada condimentum ultricies. Maecenas posuere aliquam neque, in efficitur urna laoreet porta. Aliquam erat volutpat.

Mauris finibus enim orci, vulputate euismod enim molestie eu. Fusce sit amet est molestie, congue massa ac, fringilla dui. Sed ante justo, convallis eu libero tristique, efficitur varius est. Pellentesque tortor nulla, consectetur et leo ac, tristique bibendum augue. Nulla eget luctus risus. Etiam vehicula justo ex, at maximus diam dignissim quis. Ut convallis et eros sit amet efficitur. Nulla facilisi. Maecenas hendrerit pretium tristique. Aenean ornare posuere eros id ornare. Vivamus et justo libero. Quisque nec scelerisque velit. Suspendisse potenti. Etiam aliquam mi sit amet bibendum eleifend.

Quisque sagittis fermentum felis, id molestie dolor. Etiam tristique, orci eget ultrices sagittis, risus massa facilisis justo, id condimentum eros libero vitae urna. Curabitur id ante in purus vehicula vulputate vel vel ipsum. Sed eleifend congue ornare. Vivamus ut semper massa, eget maximus dolor. Phasellus malesuada pulvinar odio nec imperdiet. Vivamus eget congue lorem. Quisque est nisi, semper at augue id, vestibulum tincidunt felis. Vivamus varius a justo eu lacinia. Phasellus rhoncus pulvinar efficitur.`.replace(/\.\s+/g, '.\n').split(/\n/);

const compareInt = (left, right) => left - right;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomArray(max) {
  return new Set(
    Array.from(
      Array(getRandomInt(max)),
      () => getRandomInt(max)
    ).sort(compareInt)
  );
}

const delays = [500, 800, 1200];

/**
 * Get random lipsum data between 2 dates
 * @param {Date} start
 * @param {Date} end
 * @return {Map}
 */
function getData(start, end) {
  if (end <= start) {
    throw new Error('Invalid parameters');
  }

  const delay = delays[getRandomInt(3)];

  return new Promise(resolve => {
    setTimeout(function () {
      const intervalDays = Math.ceil((end - start) / 1000 / 60 / 60 / 24);
      const days = getRandomArray(intervalDays);

      resolve(new Map(
        [...days]
          .map(day => [
              new Date((new Date(start)).setDate(start.getDate() + day)),
              [...getRandomArray(lipsum.length)].map(idx => lipsum[idx]).join(' ')
          ])
          .filter(([date, text]) => text.length > 0)
      ));
    }, delay);
  });
}

module.exports = getData;
