import { BaseScene } from './BaseScene';

export class LoadScene extends BaseScene {
	constructor(options: Partial<Phaser.Types.Scenes.SettingsConfig>) {
		super(options);
	}

	public preload(): void {
		const progress = this.add.graphics();

		this.load.setPath('assets/stick-boy');
		this.load.spine('stick-boy', 'stick-boy.json', ['stick-boy.atlas'], true);

		// --

		this.load.on('progress', (value: number) => {
			progress.clear();
			progress.fillStyle(0xffffff, 1);
			progress.fillRect(
				0,
				this.scale.gameSize.height / 2,
				this.scale.gameSize.width * value,
				60,
			);
		});

		this.load.on('complete', () => {
			progress.destroy();
		});
	}

	public create(): void {
		this.scene.start('GameScene', {});
	}

}
