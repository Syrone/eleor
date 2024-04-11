import ScrollReveal from 'scrollreveal'

const sr = ScrollReveal({
	origin: 'bottom',
	distance: '3rem',
	duration: 2000,
	delay: 400,
})

sr.reveal(`.card-reveal`, { interval: 300 })