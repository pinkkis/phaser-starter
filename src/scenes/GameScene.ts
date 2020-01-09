import { BaseScene } from './BaseScene';

export class GameScene extends BaseScene {
	boy: any = null;

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
		//@ts-ignore
		// window.foo = this;

		// let foo = this.add.image(20,20, 'goal');
		// let bar = this.add.image(30,30, 'boy');

		//@ts-ignore
		this.boy = this.add.spine(130, 130, 'spineboy', 'idle', true);
		this.boy.setScale(0.7);
	}

	public update(time: number, delta: number): void {
		// empty

		//this.boy.setX(this.boy.x + 1);
	}
}
