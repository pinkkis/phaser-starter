/// <reference path="../../node_modules/phaser/types/SpineGameObject.d.ts" />
/// <reference path="../../node_modules/phaser/types/SpinePlugin.d.ts" />

declare var require: NodeRequire;

interface Window {
	env?: any;
	SpinePlugin?: any;
}

declare module 'stats-js';
declare module 'stats-js/src/Stats';
