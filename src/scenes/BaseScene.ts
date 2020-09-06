import { PoisonVialGame } from '../PoisonVialGame';

export class BaseScene extends Phaser.Scene {
	public game: PoisonVialGame;

	public preload(): void {
		// empty
	}

	public setTimerEvent(timeMin: number, timeMax: number, callback: () => unknown, parameters: unknown[]): Phaser.Time.TimerEvent {
		return this.time.delayedCall(Phaser.Math.Between(timeMin, timeMax), callback, parameters || [], this);
	}
}
