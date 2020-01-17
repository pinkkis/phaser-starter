export default {
	files: [
		'src/**/*\.spec.ts',
		'src/**/*\.test.ts',
	],
	sources: [
		'src/**/*.ts',
	],
	compileEnhancements: false,
	verbose: true,
	extensions: ["ts"],
	require: [
		"esm",
		"ts-node/register/transpile-only"
	]
};
