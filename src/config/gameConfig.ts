// phaser game config
export const gameConfig: GameConfig = {
	type: Phaser.AUTO,
	parent: 'game-container',
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 1280,
		height: 720,
	},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
			debug: true,
		},
	},
	plugins: {
		global: [] as any[],
	},
};
