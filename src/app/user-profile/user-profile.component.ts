import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : 'Yes ! I have !',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
  constructor() { }

  ngOnInit() {
  }

  cacherAge() {
    if (document.getElementById('hide-stuff').style.visibility=='visible') {
      document.getElementById('hide-stuff').style.visibility='hidden'; 
    }
    else {  
      document.getElementById('hide-stuff').style.visibility='visible';  
    }
  }
}

