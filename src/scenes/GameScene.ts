import { BaseScene } from './BaseScene';

export class GameScene extends BaseScene {
	constructor(key: string, options: any) {
		super('GameScene');
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
	}

	public update(time: number, delta: number): void {
		// empty
	}
}
