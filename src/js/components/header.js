import { throttle } from '../functions/throttle';
import { getHeaderHeight } from '../functions/header-height';

window.onload = function() {
	let h = throttle(getHeaderHeight)

	getHeaderHeight()
	window.addEventListener('resize', h)

	let headerHeight = getComputedStyle(document.documentElement).getPropertyValue('--header-height');
	headerHeight = parseInt(headerHeight, 10);
	
	window.addEventListener('scroll', function() {
		const header = document.querySelector('.header');
		headerHeight = parseInt(headerHeight, 10);
		const scrollY = window.pageYOffset || document.documentElement.scrollTop;
	
		if (scrollY <= headerHeight) {
			header.classList.remove('header--sticky')
			header.style.transform = `translateY(${-scrollY}px)`;
		} else {
			header.classList.add('header--sticky')
			header.style = '';
		}
	});
}