export default {
	rules: {
		'array-bracket-newline': ['warn', 'always'],
		'array-bracket-spacing': ['error', 'always'],
		'array-element-newline': ['warn', { multiline: true, minItems: 4 }],
		'arrow-spacing': [
			'error',
			{
				before: true,
				after: true,
			},
		],
		'block-spacing': ['error', 'always'],
		'brace-style': ['error', '1tbs', { allowSingleLine: true }],
		camelcase: [
			'error',
			{
				allow: ['^UNSAFE_'],
				properties: 'never',
				ignoreGlobals: true,
			},
		],
		'comma-dangle': [
			'warn',
			{
				arrays: 'always',
				exports: 'never',
				functions: 'never',
				imports: 'never',
				objects: 'always',
			},
		],
		'comma-spacing': [
			'warn',
			{
				before: false,
				after: true,
			},
		],
		'comma-style': ['error', 'last'],
		'computed-property-spacing': [
			'error',
			'never',
			{ enforceForClassMembers: true },
		],
		curly: ['error', 'multi-line'],
		'dot-location': ['error', 'property'],
		'dot-notation': ['error', { allowKeywords: true }],
		'eol-last': 'error',
		'func-call-spacing': ['error', 'never'],
		'generator-star-spacing': [
			'error',
			{
				before: true,
				after: true,
			},
		],
		indent: [
			'warn',
			'tab',
			{
				SwitchCase: 1,
				VariableDeclarator: 1,
				outerIIFEBody: 1,
				MemberExpression: 1,
				FunctionDeclaration: {
					parameters: 1,
					body: 1,
				},
				FunctionExpression: {
					parameters: 1,
					body: 1,
				},
				CallExpression: { arguments: 1 },
				ArrayExpression: 1,
				ObjectExpression: 1,
				ImportDeclaration: 1,
				flatTernaryExpressions: false,
				ignoreComments: false,
				ignoredNodes: [
					'TemplateLiteral *',
					'JSXElement',
					'JSXElement > *',
					'JSXAttribute',
					'JSXIdentifier',
					'JSXNamespacedName',
					'JSXMemberExpression',
					'JSXSpreadAttribute',
					'JSXExpressionContainer',
					'JSXOpeningElement',
					'JSXClosingElement',
					'JSXFragment',
					'JSXOpeningFragment',
					'JSXClosingFragment',
					'JSXText',
					'JSXEmptyExpression',
					'JSXSpreadChild',
				],
				offsetTernaryExpressions: true,
			},
		],
		'key-spacing': [
			'error',
			{
				beforeColon: false,
				afterColon: true,
			},
		],
		'keyword-spacing': [
			'error',
			{
				before: true,
				after: true,
			},
		],
		'lines-between-class-members': [
			'error',
			'always',
			{ exceptAfterSingleLine: true },
		],
		'max-len': [
			'warn',
			{
				code: 120,
				comments: 120,
			},
		],
		'multiline-ternary': ['error', 'always-multiline'],
		'newline-per-chained-call': [
			'error',
			{
				ignoreChainWithDepth: 1,
			},
		],
		'no-tabs': ['off'],
		'no-trailing-spaces': 'warn',
		'object-curly-newline': [
			'warn',
			{
				ImportDeclaration: {
					minProperties: 4,
				},
				ExportDeclaration: {
					minProperties: 2,
				},
				ObjectExpression: {
					minProperties: 2,
					multiline: true,
					consistent: true,
				},
				ObjectPattern: {
					minProperties: 3,
				},
			},
		],
		'object-curly-spacing': ['warn', 'always'],
		'object-property-newline': [
			'error',
			{
				allowAllPropertiesOnSameLine: false,
			},
		],
		'operator-linebreak': [
			'error',
			'after',
			{
				overrides: {
					'?': 'before',
					':': 'before',
					'|>': 'before',
				},
			},
		],
		'padded-blocks': [
			'warn',
			{
				blocks: 'never',
				switches: 'never',
				classes: 'never',
			},
		],
		'quote-props': ['error', 'as-needed'],
		quotes: ['warn', 'single'],
		'rest-spread-spacing': ['error', 'never'],
		'semi-spacing': [
			'error',
			{
				before: false,
				after: true,
			},
		],
		'space-before-blocks': ['error', 'always'],
		'space-before-function-paren': [
			'warn',
			{
				named: 'never',
			},
		],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': 'error',
		'space-unary-ops': [
			'error',
			{
				words: true,
				nonwords: false,
			},
		],
		'spaced-comment': [
			'error',
			'always',
			{
				line: { markers: ['*package', '!', '/', ',', '='] },
				block: {
					balanced: true,
					markers: ['*package', '!', ',', ':', '::', 'flow-include'],
					exceptions: ['*'],
				},
			},
		],
		'template-curly-spacing': ['error', 'never'],
		'template-tag-spacing': ['error', 'never'],
		'yield-star-spacing': ['error', 'both'],
	},
};
