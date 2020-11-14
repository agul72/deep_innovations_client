import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SongsApiService } from '../../services/songs-api.service';

@Component({
  selector: 'songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent implements OnInit {
	@Output() onSongChange = new EventEmitter<any>();

    public songs: Array<any>;
	public selectedSong: any;
	public search: string;
	public recommend: string;
	public recommendedSongs: Array<any>;

    constructor(private songsApiService: SongsApiService) {}

    ngOnInit(): void {
		this.songsApiService.getAllSongs().then(songs => {
			this.songs = songs;
			this.selectSong(this.songs[0]);
		});
	}

	public selectSong(song): void {
		this.selectedSong = song;
		this.onSongChange.emit(song);
	}

	public btnSearchHandler(search: string): void {
    	const regex = search || '';
    	this.songsApiService.getSongsByFilter(regex)
			.then(songs => {
				this.recommendedSongs = songs;
			});
	}
}
