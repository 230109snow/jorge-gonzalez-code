import { Injectable } from '@angular/core';
import { Dev } from './DevInterface';
import { dev } from './mockData';

@Injectable({
  providedIn: 'root'
})
export class DevService {

  constructor() { }

  fetchDev(): Dev {
    return dev;
  }

}

