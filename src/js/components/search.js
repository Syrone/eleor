const searchs = document.querySelectorAll('.js-search')

searchs?.forEach((wrapper) => {
  const searchBtn = wrapper.querySelector('.js-search-btn');

	function closeSearch(element) {
		element.classList.remove('is-active');
	}

  const handleClickOutside = (event) => {
    if (!wrapper.contains(event.target)) {
      closeSearch(wrapper);
    }
  };

  const handleBackButton = () => {
    closeSearch(wrapper);
  };

	const handleEscapeKey = (event) => {
    if (event.key === 'Escape') {
      closeSearch(wrapper);
    }
  };

  searchBtn.addEventListener('click', () => {
    wrapper.classList.toggle('is-active');
  });

  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleEscapeKey);
  window.addEventListener('popstate', handleBackButton);
});