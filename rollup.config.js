import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

export default {
	entry: 'src/index.js',
	format: 'cjs',
	dest: 'lib/index.js',
	sourceMap: true,
	plugins: [
		resolve(),
		babel({
			exclude: 'node_modules/**'
		})
	]
};
