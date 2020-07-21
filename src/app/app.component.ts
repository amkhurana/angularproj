import { Component } from '@angular/core';
import { ApiService } from './services/api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent {
  selectedMovie = { id: -1, title: '', desc: '', year: 0};
  movies = [{ title: 'test' }];

  constructor(private api: ApiService) {
    this.getMovies();
  }

  getMovies = () => 
  {
    this.api.getAllMovies().subscribe(
      data => {
        this.movies = data;
      },
      error =>
      {
        console.log(error)
      }      
      
    )
  }

  OnMovieClick = (movie) => 
  {
    this.api.getMovieDescription(movie.id).subscribe(
      data => {
        this.selectedMovie = data;
      },
      error =>
      {
        console.log(error)
      }      
      
    )
  }

  UpdateMovie = () => {
    this.api.UpdateMovie(this.selectedMovie).subscribe(
      data => {
        this.getMovies()
      },
      error =>
      {
        console.log(error)
      }      
      
    )
  }

  CreateMovie = () => {
    this.api.CreateMovie(this.selectedMovie).subscribe(
      data => {
        console.log(data);
        this.movies.push(data);
      },
      error =>
      {
        console.log(error)
      }      
      
    )
  }

  DeleteMovie = () => {
    this.api.DeleteMovie(this.selectedMovie.id).subscribe(
      data => {
        this.getMovies()
      },
      error =>
      {
        console.log(error)
      }      
      
    )
  }
}
