import Swiper, { Navigation, Pagination, Thumbs } from 'swiper';
Swiper.use([ Navigation, Pagination, Thumbs ]);

const swiperHeroClass = document.querySelectorAll('.swiper-hero')

swiperHeroClass?.forEach((classSwiper) => {
	const swiper = classSwiper.querySelector('.swiper'),
				navPrev = classSwiper.querySelector('.swiper-button-prev'),
				navNext = classSwiper.querySelector('.swiper-button-next'),
				pagination = classSwiper.querySelector('.swiper-pagination')

	new Swiper(swiper, {
		slidesPerView: 1,
		grabCursor: true,
		loop: true,

		navigation: {
			prevEl: navPrev,
			nextEl: navNext,
		},

		pagination: {
			el: pagination,
			type: 'bullets',
			clickable: true,
		},
	})
})

// Adding icons to navigation buttons
const navPrevs = document.querySelectorAll('.swiper-button-prev');
const navNexts = document.querySelectorAll('.swiper-button-next');

navPrevs?.forEach((btn) => {
	const prevIcon = document.createElement('span');
	prevIcon.classList.add('icon');
	prevIcon.innerHTML = `
		<svg>
			<use xlink:href="img/icons/nav-arrow-left.svg#svg-nav-arrow-left"></use>
		</svg>
	`;
	btn.appendChild(prevIcon);
});

navNexts?.forEach((btn) => {
	const nextIcon = document.createElement('span');
	nextIcon.classList.add('icon');
	nextIcon.innerHTML = `
		<svg>
			<use xlink:href="img/icons/nav-arrow-right.svg#svg-nav-arrow-right"></use>
		</svg>
	`;
	btn.appendChild(nextIcon);
});