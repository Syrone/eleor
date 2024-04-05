import { throttle } from '../functions/throttle';

const more = document.querySelectorAll('.js-more')

more?.forEach((wrapper) => {
	const moreItems = parseInt(wrapper.dataset.moreItem) || 1,
		moreContent = wrapper.querySelector('.js-more-content'),
		moreBtn = wrapper.querySelector('.js-more-btn'),
		moreBtnText = moreBtn.querySelector('.js-more-btn-text'),
		initialText = moreBtnText.textContent,
		changeText = moreBtn.dataset.changeText,
		moreValues = moreContent.querySelectorAll(`:scope > *:nth-child(-n+${moreItems})`),
		moreOtherValues = moreContent.querySelectorAll(`:scope > *:nth-child(n+${moreItems + 1})`)

	let throttleFunct = throttle(moreSetProperty)

	function moreSetProperty() {
		let maxHeight = 0;

		moreValues.forEach((item) => {
			const itemStyles = window.getComputedStyle(item);
			const itemHeight = item.offsetHeight + parseInt(itemStyles.marginTop) + parseInt(itemStyles.marginBottom);
			maxHeight += itemHeight;
			item.classList.add('is-show')
		});

		wrapper.style.setProperty('--descr-height-overflow', `${maxHeight}px`);
		wrapper.style.setProperty('--descr-height-full', `${moreContent.scrollHeight}px`);
	}

	function moreSetClass() {
		moreOtherValues.forEach((item) => {
			item.classList.add('is-show')
		})
	}

	function moreRemoveClass() {
		moreOtherValues.forEach((item) => {
			item.classList.remove('is-show')
		})
	}

	function moreStatusButton() {
		if (moreContent.scrollHeight > moreContent.clientHeight) {
      moreBtn.classList.remove('d-none');
    } else {
      moreBtn.classList.add('d-none');
    }
	}

	moreSetProperty()
	moreStatusButton()
	window.addEventListener('resize', throttleFunct)

	moreBtn.addEventListener('click', () => {
		if (wrapper.classList.contains('is-open')) {
			wrapper.classList.remove('is-open');
			moreRemoveClass()
		} else {
			wrapper.classList.add('is-open');
			moreSetClass()
		}

		if (moreBtn.classList.contains('is-open')) {
			moreBtnText.textContent = initialText;
			moreBtn.classList.remove('is-open');
			moreRemoveClass()
		} else {
			moreBtnText.textContent = changeText;
			moreBtn.classList.add('is-open');
			moreSetClass()
		}
	});
})