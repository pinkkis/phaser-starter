import { PoisonVialGame } from '../game';

export class BaseScene extends Phaser.Scene {
	public game: PoisonVialGame;

	constructor(options: Partial<Phaser.Types.Scenes.SettingsConfig>) {
		super(options);
	}

	public preload(): void {
		// empty
	}

	public setTimerEvent(timeMin: number, timeMax: number, callback: () => {}, params?: any[]): Phaser.Time.TimerEvent {
		return this.time.delayedCall(Phaser.Math.Between(timeMin, timeMax), callback, params || [], this);
	}
}
