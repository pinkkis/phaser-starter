/* NOTE: Please add comments and links for rules that are added/modified where possible please */
module.exports = {
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module', 
		project: './tsconfig.json',
	},
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
    plugins: ['@typescript-eslint', 'import', 'deprecation'],
    extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:unicorn/recommended',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    rules: {
        'class-methods-use-this': "off",
        'function-paren-newline': "off",
        'no-multiple-empty-lines': "error",
        'no-unused-vars': ["error", { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-unused-vars': ["error", { argsIgnorePattern: '^_' }],
        'deprecation/deprecation': "warn",
        'import/no-unresolved': "off",
        'import/order': "warn",
        'import/prefer-default-export': "off",
        'unicorn/no-reduce': "off",
        '@typescript-eslint/explicit-function-return-type': "warn",
        '@typescript-eslint/no-explicit-any': "warn",
        '@typescript-eslint/array-type': ["error", { default: 'array-simple' }],
        '@typescript-eslint/unbound-method': [
            'error',
            {
                ignoreStatic: true,
            },
        ],
        '@typescript-eslint/lines-between-class-members': [
            'error',
            'always',
            { exceptAfterSingleLine: true },
        ],
        'unicorn/prevent-abbreviations': [
            'error',
            {
                whitelist: {
                    prod: true,
                },
            },
		],
		'unicorn/filename-case': 'off',
		'unicorn/number-literal-case': 'off',
    },
    "reportUnusedDisableDirectives": true
};
