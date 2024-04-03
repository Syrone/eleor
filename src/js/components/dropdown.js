const dropdowns = document.querySelectorAll('.js-dropdown')
let isTouchScreen = 'maxTouchPoints' in navigator && navigator.maxTouchPoints > 0;

dropdowns.forEach((dropdown) => {
	const nestedDropdowns = dropdown.querySelectorAll('.js-dropdown--nested')
	const dropdownBtn = dropdown.querySelector('.js-dropdown-btn');

	let isActive = false;
	let interval = 600;
	let timeout;

	function openDropdown(array, arrayNested, element, content, button) {
		if (isTouchScreen) {
			button.addEventListener('click', (event) => {
				event.preventDefault();

				if (button.classList.contains('is-active')) {
					arrayNested?.forEach((nestedDropdown) => {
						if (nestedDropdown !== dropdown) {
							nestedDropdown.classList.remove('is-active');
							nestedDropdown.querySelector('.js-dropdown-btn').classList.remove('is-active');
						}
					});
					button.classList.remove('is-active');
					element.classList.remove('is-active');
				} else {
					array.forEach((otherDropdown) => {
						if (otherDropdown !== dropdown) {
							otherDropdown.classList.remove('is-active');
							otherDropdown.querySelector('.js-dropdown-btn').classList.remove('is-active');
						}
					});
					element.classList.add('is-active');
					button.classList.add('is-active');
				}
			});
		} else {
			element.addEventListener('mouseenter', () => {
				isActive = true;
				array.forEach((otherDropdown) => {
					if (otherDropdown !== dropdown) {
						otherDropdown.classList.remove('is-active');
						otherDropdown.querySelector('.js-dropdown-btn').classList.remove('is-active');
					}
				});
				element.classList.add('is-active');
				if (content) content.classList.add('is-active');
				button.classList.add('is-active');
				clearTimeout(timeout);
			});
		}
	}

	function closeDropdown(element, content, button) {
		if (isTouchScreen) {
			return
		}

		element.addEventListener('mouseleave', () => {
			isActive = false;
			timeout = setTimeout(() => {
				if (!isActive) {
					element.classList.remove('is-active');
					if (content) content.classList.remove('is-active');
					button.classList.remove('is-active');
				}
			}, interval);
		});
	}

	openDropdown(dropdowns, nestedDropdowns, dropdown, undefined, dropdownBtn)
	closeDropdown(dropdown, undefined, dropdownBtn)

	nestedDropdowns?.forEach((nested) => {
		const nestedDropdownContent = nested.closest('.dropdown-content')
		const nestedDropdownBtn = nested.querySelector('.js-dropdown-btn');

		isActive = false;
		timeout;

		openDropdown(nestedDropdowns, undefined, nested, nestedDropdownContent, nestedDropdownBtn)
		closeDropdown(nested, nestedDropdownContent, nestedDropdownBtn)
	})
});