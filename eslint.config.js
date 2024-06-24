import globals from 'globals';
import js from '@eslint/js';

export default [
	js.configs.recommended,
	{
		ignores: ['**/node_modules', '**/dist', '**/generated', '**/backups', '**/test'],
	},
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},

		rules: {
			'no-unused-private-class-members': 'warn',
			'no-unused-vars': ['warn'],
		},
	},
];
