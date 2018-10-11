declare var require: any;

import "phaser";
import "./css/styles.css";
import { BootScene } from "./scenes/BootScene";

const Stats = require('stats-js');


// set up stats
const stats = new Stats();
stats.setMode(0); // 0: fps, 1: ms
stats.domElement.style.position = 'absolute';
stats.domElement.style.right = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild( stats.domElement );

// phaser game config
const config: GameConfig = {
	type: Phaser.AUTO,
	width: 1280,
	height: 720,
	parent: "game-container",
	disableContextMenu: true,
	render: {
		pixelArt: true,
		antialias: true,
		autoResize: true
	},
	physics: {
		default: "arcade",
		arcade: {
			gravity: {
				y: 0
			}
		}
	},
	scene: [BootScene]
};

// set up game class, and global stuff
export class KokoGame extends Phaser.Game {
	scaling: number = 16/9;
	debug: boolean = false;

	constructor(config: GameConfig) {
		super(config);

		this.events.on('prestep', () => {
			stats.begin();
		});

		this.events.on('postrender', () => {
			stats.end();
		});
	}
}

// start the game
window.onload = () => {
	const game = new KokoGame(config);
};

