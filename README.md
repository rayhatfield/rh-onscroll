# rh-onscroll
Invokes a scroll callback for registered DOM elements.

This is mostly an exercise for me to learn about putting together and publishing an npm module: configuring, transpiling (babel), bundling (rollup), publishing, etc.

## Usage

Install via npm:

	npm install rh-scroll --save

The module exports a single function that registers a selector with a callback function. On scroll, the callback function will be invoked once for each element that matched the selector at the time of the register call.

The callback will receive two arguments: the matching element, and the percentage of the element that is above the bottom viewport boundary.

	import register from 'rh-onscroll';
    
	register('.some-selector', (element, percentage) => {
		// do something interesting
	});

