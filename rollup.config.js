import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

const banner = `
/*
	this is a generated file.
	modifications will be stomped
	on the next build.
*/
`;

export default {
	entry: 'src/index.js',
	sourceMap: true,
	plugins: [
		resolve(),
		babel({
			exclude: 'node_modules/**'
		})
	],
	targets: [
		{ dest: 'lib/index.cjs.js', format: 'cjs' },
		{ dest: 'lib/index.es.js', format: 'es' },
		{ dest: 'lib/index.iife.js', format: 'iife', moduleName: 'RhOnScroll' },
		{ dest: 'docs/index.iife.js', format: 'iife', moduleName: 'RhOnScroll', banner }
	]
};
