import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
   
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }


}