import { KokoGame } from "../game";

export class BaseScene extends Phaser.Scene {
	game: KokoGame;

	constructor(key: string, options?: any) {
		super(key);

		this.game = this.sys.game as KokoGame
	}

	preload() {

	}

	resize() {

	}

	setTimerEvent(timeMin: number, timeMax: number, callback: Function, params?: Array<any>): Phaser.Time.TimerEvent {
		return this.time.delayedCall(Phaser.Math.Between(timeMin, timeMax), callback, params || [], this);
	}
}
