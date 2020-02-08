import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  timestamp = '12:00 AM';
  profileName = 'Profile'

  constructor() { }

  ngOnInit() {
  }

}
