import { throttle } from '../functions/throttle';
import { getHeaderHeight } from '../functions/header-height';

window.onload = function() {
	let h = throttle(getHeaderHeight)
	
	window.addEventListener('resize', h)
	getHeaderHeight()
}