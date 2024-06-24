import globals from 'globals';

export default [
	'eslint:recommended',
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
			'no-unused-vars': ['warn'],
		},
	},
];
