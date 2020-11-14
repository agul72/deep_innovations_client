import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  	name: 'secondsToMinutes'
})
export class SecondsToMinutesPipe implements PipeTransform {
	transform(seconds: any): string {
		let mm = Math.floor(seconds / 60).toString();
		let ss = (seconds % 60).toString();

		return mm.padStart(2, '0') + ':' + ss.padStart(2, '0');
	}
}
