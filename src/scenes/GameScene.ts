import { BaseScene } from './BaseScene';

export class GameScene extends BaseScene {
	public boy: SpineGameObject = undefined;

	public preload(): void {
		// empty
	}

	public init(): void {
		// empty
	}

	public create(): void {
		// eslint-disable-next-line no-console
		console.info('GameScene - create()');
		this.add.text(100, 100, 'Game Scene Loaded - foooo', { fontSize: '20px' });

		// this.boy = this.add.spine(400, 300, 'stick-boy', 'idle', true).setScale(0.75);
	}

	public update(_time: number, _delta: number): void {
		// empty
	}
}
