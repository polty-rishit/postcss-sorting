import { configs } from 'eslint-config-hudochenkov';
import eslintConfigPrettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
	{
		ignores: ['**/fixtures/*.js'],
	},
	...configs.main,
	eslintConfigPrettier,
	{
		languageOptions: {
			// this need to be rectfied and treated
			globals: {
				...Object.fromEntries(Object.entries(globals.browser).map(([key]) => [key, 'off'])),
				...globals.node,
				...globals.jest,
				groupTest: true,
				runTest: true,
			},
		},
	},
];
