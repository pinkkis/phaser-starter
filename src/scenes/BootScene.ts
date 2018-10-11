import { BaseScene } from "./BaseScene";

export class BootScene extends BaseScene{
	constructor(key: string, options: any) {
		super('BootScene');
	}

	preload() {

	}

	init() {

	}

	create() {
		console.info('BootScene - create()');

		// this.scene.start('LoadScene', {});

		this.add.text(100, 100, 'Boot Scene Loaded', { fontSize: '20px' });
	}

	update(time: number, delta: number) {

	}
}
