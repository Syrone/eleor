import Inputmask from "inputmask";

const telSelectors = document.querySelectorAll('input[type="tel"]');

telSelectors?.forEach((tel) => {
	const inputMask = new Inputmask('+7 (999) 999-99-99');
	inputMask.mask(tel);
})