export default {
	files: [
		'src/**/*\.spec.ts',
		'src/**/*\.test.ts',
	],
	concurrency: 5,
	verbose: true,
	extensions: ["ts"],
	require: [
		"esm",
		"ts-node/register/transpile-only"
	]
};
