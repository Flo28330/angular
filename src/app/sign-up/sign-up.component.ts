import { Component, OnInit } from '@angular/core';
import { Info } from '../info';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  info: Info = {
    email: 'example@gmail.com'
  };
  constructor() { }

  ngOnInit() {
  }

}
