const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);

export default function register () {
	/*
	The array of registered objects, each consisting of
	a selector, the elements that matched that selector
	at registration time, and a callback function to be
	invoked on scroll for each matching element. The callback
	will receive as arguments the matched element (DOM node)
	and the scroll percentage (between zero and one), indicating
	the percentage of the element that is above the bottom
	of the scrollable area.
	 */
	const listeners = [];

	window.addEventListener('scroll', onScroll);

	function onScroll (e) {
		listeners.forEach(fire)
	}

	function fire ({selector, callback, elements}) {
		elements.forEach((element) => callback(element, clamp(scrollPercentage(element))));
	}

	function scrollPercentage(elem) {
		return (window.innerHeight - elem.getBoundingClientRect().top) / elem.scrollHeight;
	}

	const register = (selector, callback) => {
		const elements = document.querySelectorAll(selector);
		if(elements.length > 0) {
			listeners.push({
				selector,
				callback,
				elements
			});
		}
	}

	return {
		register
	};
}
