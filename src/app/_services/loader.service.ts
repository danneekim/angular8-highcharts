import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MyLoaderService {
    // A BehaviourSubject is an Observable with a default value
    public isLoading = new BehaviorSubject<boolean>(false);

    constructor() {}
}