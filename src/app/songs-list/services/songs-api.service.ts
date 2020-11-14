import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class SongsApiService {
	// private GET_ALL_URL = 'https://glacial-escarpment-40412.herokuapp.com/songs';

	// My Node.js Server
	private GET_ALL_URL = 'http://localhost:5000/api/songs';
	private GET_FILTER_URL = 'http://localhost:5000/api/songs/filter';

	public async getAllSongs(): Promise<any> {
		const response = await fetch(this.GET_ALL_URL);
		return response.json();
	}

	public async getSongsByFilter(regex: string): Promise<any> {
		const response = await fetch(this.GET_FILTER_URL + '?regex=' + regex);
		return response.json();
	}
}
