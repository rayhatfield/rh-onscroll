
/*
	this is a generated file.
	modifications will be stomped
	on the next build.
*/

var RhOnScroll = (function () {
'use strict';

var clamp = function clamp(value) {
	var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
	return Math.min(Math.max(value, min), max);
};

var listeners = [];

function onScroll(e) {
	listeners.forEach(fire);
}

function fire(_ref) {
	var selector = _ref.selector,
	    callback = _ref.callback,
	    elements = _ref.elements;

	elements.forEach(function (element) {
		return callback(element, clamp(scrollPercentage(element)));
	});
}

function scrollPercentage(elem) {
	return (window.innerHeight - elem.getBoundingClientRect().top) / elem.scrollHeight;
}

function register(selector, callback) {
	var elements = document.querySelectorAll(selector);
	if (elements.length > 0) {
		listeners.push({
			selector: selector,
			callback: callback,
			elements: elements
		});
		window.removeEventListener('scroll', onScroll);
		window.addEventListener('scroll', onScroll);
	}
}

return register;

}());
//# sourceMappingURL=index.iife.js.map
