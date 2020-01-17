import { BaseScene } from './BaseScene';

export class GameScene extends BaseScene {
	public boy: SpineGameObject = null;

	constructor(options: Partial<Phaser.Types.Scenes.SettingsConfig>) {
		super(options);
	}

	public preload(): void {
		// empty
	}

	public init(): void {
		// empty
	}

	public create(): void {
		console.info('GameScene - create()');
		this.add.text(100, 100, 'Game Scene Loaded', { fontSize: '20px' });

		// @ts-ignore
		this.boy = this.add.spine(400, 300, 'stick-boy', 'idle', true).setScale(0.75);

	}

	public update(time: number, delta: number): void {
		// empty

		// this.boy.setX(this.boy.x + 1);
	}
}
