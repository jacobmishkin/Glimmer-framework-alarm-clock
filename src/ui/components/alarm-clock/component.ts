import Component, { tracked } from '@glimmer/component';

export default class AlarmClock extends Component {
	@tracked time;

	constructor(options) {
		super(options);
		this.loadTime();
	}

	loadTime() {
		let time = new Date().toLocaleTimeString();
		let timeObject = {};
		time.split(':').forEach((time, i) => {
			let key = 'hours';
			if(i === 1) {key = 'minutes';}
			if(i === 2) {key = 'seconds';}
			timeObject[key] = [time[0], time[1]];
		});
		this.time = timeObject;
		setTimeout(() => this.loadTime(), 1000);
	}
}
