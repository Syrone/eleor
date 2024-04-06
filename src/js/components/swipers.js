import Swiper, { Navigation, Pagination, Thumbs, Autoplay } from 'swiper';
Swiper.use([ Navigation, Pagination, Thumbs, Autoplay ]);

const swiperHeroClass = document.querySelectorAll('.swiper-hero'),
			swiperProductClass = document.querySelectorAll('.swiper-product'),
			swiperSimilarClass = document.querySelectorAll('.swiper-similar')

swiperHeroClass?.forEach((classSwiper) => {
	const swiper = classSwiper.querySelector('.swiper'),
				navPrev = classSwiper.querySelector('.swiper-button-prev'),
				navNext = classSwiper.querySelector('.swiper-button-next'),
				pagination = classSwiper.querySelector('.swiper-pagination')

	new Swiper(swiper, {
		slidesPerView: 1,
		grabCursor: true,
		loop: true,
		speed: 1000,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
			pauseOnMouseEnter: true,
		},

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

swiperProductClass?.forEach((wrapper) => {
	const swiperMainClass = wrapper.querySelector('.swiper-main'),
				swiperThumbClass = wrapper.querySelector('.swiper-thumb'),
				navPrev = wrapper.querySelector('.swiper-button-prev'),
				navNext = wrapper.querySelector('.swiper-button-next')

	const swiperThumb = new Swiper(swiperThumbClass, {
		slidesPerView: 'auto',
		spaceBetween: 20,
		freeMode: true,
		watchSlidesProgress: true,
	})

	const swiperMain = new Swiper(swiperMainClass, {
		spaceBetween: 20,
		grabCursor: true,
		loop: true,

		navigation: {
			nextEl: navNext,
			prevEl: navPrev,
		},

		thumbs: {
			swiper: swiperThumb,
		},
	})

})

swiperSimilarClass?.forEach((classSwiper) => {
	const swiper = classSwiper.querySelector('.swiper'),
		navPrev = classSwiper.querySelector('.swiper-button-prev'),
		navNext = classSwiper.querySelector('.swiper-button-next')

	new Swiper(swiper, {
		slidesPerView: 4,
		spaceBetween: 30,
		grabCursor: true,
		loop: true,

		navigation: {
			prevEl: navPrev,
			nextEl: navNext,
		},

		breakpoints: {
			0: {
				slidesPerView: 1,
				spaceBetween: 30
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 30
			}
		}
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