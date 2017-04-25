import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

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
		{ dest: 'lib/index.iife.js', format: 'iife', moduleName: 'RhOnScroll' }
	]
};
