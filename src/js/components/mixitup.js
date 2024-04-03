import mixitup from 'mixitup';

const mixerClass = document.querySelectorAll('.filter-mixitup')

mixerClass?.forEach((element) => {
	mixitup(element, {
		load: {
			filter: '.category-a'
		},
	});
})