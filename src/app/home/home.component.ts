import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts/highstock';

import { User } from '../_models';
import {
  UserService,
  AuthenticationService,
  MarketDataService,
  LoaderService, 
  AlertService
} from '../_services';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = []; 
  graphGenerated: Boolean = false;
  public options: any = {
    chart: {
      type: 'scatter',
      height: 700
    },
    title: {
      text: 'Line Graph'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      formatter: function () {
        return 'x: ' + Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x) +
          'y: ' + this.y.toFixed(2);
      }
    },
    xAxis: {
      type: 'datetime',
      labels: {
        formatter: function () {
          return Highcharts.dateFormat('%e %b %y', this.value);
        }
      }
    },
    series: [
      {
        name: 'Normal',
        turboThreshold: 500000,
        data: [[new Date('2018-01-25 18:38:31').getTime(), 2]]
      },
      {
        name: 'Abnormal',
        turboThreshold: 500000,
        data: [[new Date('2018-02-05 18:38:31').getTime(), 7]]
      }
    ]

  }

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private marketDataService: MarketDataService,
    private loaderService: LoaderService,
    private alertService: AlertService,
    private router: Router
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
  }

  fetchData(apiJson) {
    this.alertService.destroy();
    this.marketDataService.getMarketData(apiJson).subscribe(
      data => {
        console.log(data)
        if (data) {
          this.graphGenerated = true;
          if (data && this.graphGenerated === true) {
            Highcharts.chart('graphContainer', this.options);
          }
        }
      },
      error => {
        Highcharts.chart('graphContainer', {});
        this.alertService.error(error);
      }
    )
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }


}