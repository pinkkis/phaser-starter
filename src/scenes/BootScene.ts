import { BaseScene } from './BaseScene';

export class BootScene extends BaseScene {
	public preload(): void {
		// empty
	}

	public init(): void {
		// empty
	}

	public create(): void {
		// eslint-disable-next-line no-console
		console.info('BootScene - create()');
		this.scene.start('LoadScene', {});
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public update(_time: number, _delta: number): void {
		// empty
	}
}
