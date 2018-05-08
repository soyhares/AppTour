/**

**/

import { DeviceEventEmitter } from 'react-native';
import { AppTour, AppTourSequence } from 'react-native-app-tour';

export default class TourMarkManager {
	constructor(delayToStart = 1500) {
		this.targets = [];
		this.finish = () => null;
		this.step = () => null;
		this.delayToStart = 1500;
	}

	registerSequenceStepEvent() {
		if (this.sequenceStepListener) {
			this.sequenceStepListener.remove();
		}

		this.sequenceStepListener = DeviceEventEmitter.addListener(
			'onShowSequenceStepEvent',
			(e: Event) => {
				console.log('****************** onShowSequenceStepEvent **************************');
				console.log(e);
				this.step();
			}
		);
	};

	registerFinishSequenceEvent() {
		if (this.finishSequenceListener) {
			this.finishSequenceListener.remove();
		}

		this.finishSequenceListener = DeviceEventEmitter.addListener(
			'onFinishSequenceEvent',
			(e: Event) => {
				console.log('****************** onFinishSequenceEvent **************************');
				console.log(e);
				this.finish();
			}
		);
	};

	addTarget(target = {}) {
		if (typeof target.id === "number") {
			this.targets.push(target);
			this.targets.sort(function(target1, target2) {
				return target1.id - target2.id;
			});
		}
	}

	toStep(callBack) {
		this.step = callBack;
	}


	toFinishOff(callBack) {
		this.finish = callBack;
	}

	
	start() {
		this.registerSequenceStepEvent();
		this.registerFinishSequenceEvent();
		setTimeout(() => {
			let appTourSequence = new AppTourSequence();
			this.targets.forEach(({ target }) => {
				appTourSequence.add(target);
			});
			AppTour.ShowSequence(appTourSequence);
		}, this.delayToStart);
	}
	
}