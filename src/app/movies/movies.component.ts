import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  public ShowMoviesDirective = true;
  
  public listMovies:string[] = ["DUMBO", "PINOCCHIO", "PETER PAN", "MARY POPPINS","LE LIVRE DE LA JUNGLE"];
  
constructor() { }

  ngOnInit() {
  }
}
