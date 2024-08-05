import { Injectable } from '@angular/core';
import { Iproduct } from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {

  constructor() { }
  API_KEY = "https://66b0b3316a693a95b539d955.mockapi.io/products" ; 
  getDataP(): Promise<Iproduct[]> {
    return fetch(this.API_KEY).then(
      (res) => res.json()
    );
  }

  getBookByIdP(productId: string): Promise<Iproduct> {
    return fetch(
      `${this.API_KEY}/${productId}`
    ).then((res) => res.json());
  }
}
