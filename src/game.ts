import 'phaser';
import 'phaser/plugins/spine/dist/SpinePlugin';
import Stats from 'stats-js/src/Stats';
import { gameConfig } from './config/GameConfig';
import { BootScene } from './scenes/BootScene';
import { LoadScene } from './scenes/LoadScene';
import { GameScene } from './scenes/GameScene';
import { PoisonVialGame } from './PoisonVialGame';

// start the game
window.addEventListener('load', () => {
	const game = new PoisonVialGame(gameConfig);

	// set up stats
	if (window.env.buildType !== 'production') {
		const stats = new Stats();
		stats.setMode(0); // 0: fps, 1: ms
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.left = '0px';
		stats.domElement.style.top = '0px';
		document.body.append(stats.domElement);

		game.events.on('prestep', () => stats.begin());
		game.events.on('postrender', () => stats.end());
	}

	game.scene.add('BootScene', BootScene, true);
	game.scene.add('LoadScene', LoadScene, false);
	game.scene.add('GameScene', GameScene, false);
});
