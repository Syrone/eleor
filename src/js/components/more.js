import { throttle } from '../functions/throttle';

const more = document.querySelectorAll('.js-more')

more?.forEach((wrapper) => {
	const moreItems = wrapper.dataset.moreItem || 1,
		moreContent = wrapper.querySelector('.js-more-content'),
		moreBtn = wrapper.querySelector('.js-more-btn'),
		moreBtnText = moreBtn.querySelector('.js-more-btn-text'),
		initialText = moreBtnText.textContent,
		changeText = moreBtn.dataset.changeText,
		moreValues = moreContent.querySelectorAll(`:scope > *:nth-child(-n+${moreItems})`);

	let throttleFunct = throttle(moreSetProperty)

	function moreSetProperty() {
		let maxHeight = 0;

		moreValues.forEach((item) => {
			const itemStyles = window.getComputedStyle(item);
			const itemHeight = item.offsetHeight + parseInt(itemStyles.marginTop) + parseInt(itemStyles.marginBottom);
			maxHeight += itemHeight;
		});

		wrapper.style.setProperty('--descr-height-overflow', `${maxHeight}px`);
		wrapper.style.setProperty('--descr-height-full', `${moreContent.scrollHeight}px`);
	}

	moreSetProperty()
	window.addEventListener('resize', throttleFunct)

	moreBtn.addEventListener('click', () => {
		if (wrapper.classList.contains('is-open')) {
			wrapper.classList.remove('is-open');
		} else {
			wrapper.classList.add('is-open');
		}

		if (moreBtn.classList.contains('is-open')) {
			moreBtnText.textContent = initialText;
			moreBtn.classList.remove('is-open');
		} else {
			moreBtnText.textContent = changeText;
			moreBtn.classList.add('is-open');
		}
	});
})