import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'youtube-player-wrapper',
  templateUrl: './youtube-player-wrapper.component.html',
  styleUrls: ['./youtube-player-wrapper.component.scss']
})
export class YoutubePlayerWrapperComponent implements OnInit {
	@Input() song: any;
	
	private player: YT.Player;

	ngOnInit(): void {}

	ngOnChanges() {
		this.player && this.player.loadVideoById(this.song.youtubeId);
	}

	savePlayer(player) {
		this.player = player;
		this.player.playVideo();
	}

	public playQuote(quote) {
		this.player.seekTo(quote.offset, true);
		this.player.playVideo();
	}
}
