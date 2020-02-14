import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class MarketDataService {
    public markekDataFromApi: any[]; 

  constructor(
      private http: HttpClient
    ) { }

    public getMarketData(){
        return this.http.get('https://www.quandl.com/api/v3/datasets/WIKI/AAPL.json');
    }

}