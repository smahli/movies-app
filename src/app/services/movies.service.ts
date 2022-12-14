import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {
    constructor(private http: HttpClient) {}

    getMovies() {
        return this.http.get(
            'https://api.themoviedb.org/3/movie/550?api_key=ebe574feaed5e33f8f2e9ede47bcc287'
        );
    }
}
