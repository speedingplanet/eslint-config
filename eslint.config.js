import coding from './coding.js';
import globals from 'globals';

let base = {
	languageOptions: {
		ecmaVersion: 'latest',
		globals: {
			...globals.browser,
		},
	},
	rules: {},
	ignores: ['node_modules', 'dist', 'generated', 'test/originals'],
};

export default [{ ...base, ...coding }];
