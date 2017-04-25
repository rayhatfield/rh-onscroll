const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);

const listeners = [];

function onScroll (e) {
	listeners.forEach(fire)
}

function fire ({selector, callback, elements}) {
	elements.forEach((element) => callback(element, clamp(scrollPercentage(element))));
}

function scrollPercentage(elem) {
	return (window.innerHeight - elem.getBoundingClientRect().top) / elem.scrollHeight;
}

export default function register (selector, callback) {
	const elements = document.querySelectorAll(selector);
	if(elements.length > 0) {
		listeners.push({
			selector,
			callback,
			elements
		});
		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll);
	}
}
