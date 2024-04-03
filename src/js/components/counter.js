const counters = document.querySelectorAll('.js-counter');

counters?.forEach((wrapper) => {
  const counterBtn = wrapper.querySelector('.js-counter-btn');
  const minusBtn = wrapper.querySelector('.js-counter-minus');
  const plusBtn = wrapper.querySelector('.js-counter-plus');
  const input = wrapper.querySelector('.js-counter-input');

  const handleAddActiveClass = () => {
    wrapper.classList.add('is-active');
  };

  const handleRemoveActiveClass = () => {
    wrapper.classList.remove('is-active');
  };

  const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      handleRemoveActiveClass();
    }
  };

  const handleClickOutside = (event) => {
    if (!wrapper.contains(event.target)) {
      handleRemoveActiveClass();
    }
  };

  const handleBackButton = () => {
    handleRemoveActiveClass();
  };

	input.value = 1;

	const setInputWidth = () => {
		const valueLength = input.value.length;
		input.style.width = `${valueLength}ch`;
	};

	const handleInput = () => {
		input.value = input.value.replace(/\D/g, '');
		if (input.value === '') input.value = '0';
		setInputWidth();
	};

  const handleMinusButtonClick = () => {
    if (parseInt(input.value) > 0) {
      input.value = parseInt(input.value) - 1;
			setInputWidth()
    }
  };

  const handlePlusButtonClick = () => {
    input.value = parseInt(input.value) + 1;
		setInputWidth()
  };
	
  counterBtn.addEventListener('click', handleAddActiveClass);
  document.addEventListener('keydown', handleEscapeKey);
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('popstate', handleBackButton);
	input.addEventListener('input', handleInput);
  minusBtn.addEventListener('click', handleMinusButtonClick);
  plusBtn.addEventListener('click', handlePlusButtonClick);
});