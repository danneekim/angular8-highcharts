import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { User } from '../_models';
import { 
  UserService, 
  AuthenticationService, 
  MarketDataService, 
  LoaderService
} from '../_services';

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
    private marketDataService: MarketDataService,
    private loaderService: LoaderService,
    private router: Router
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {

  }

  fetchData(apiJson){
    this.marketDataService.getMarketData(apiJson).subscribe(data => {
      console.log(data)
    })
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }


}