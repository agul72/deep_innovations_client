import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public selectedSong: any;

	public songChanged(song: any) {
		this.selectedSong = song;
	}
}
