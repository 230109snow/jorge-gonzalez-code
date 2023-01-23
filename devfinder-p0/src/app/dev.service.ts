import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { dev } from './mockData';

@Injectable({
  providedIn: 'root'
})
export class DevService {

  constructor() { }

  fetchDev() {
    return dev;
  }

}

