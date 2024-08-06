import { Injectable } from '@angular/core';
import { Iproduct } from './iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  // addProductP(item: Iproduct) {
  //   throw new Error('Method not implemented.');
  // }
  // cart: Iproduct[] | undefined;
  q!: number;
  id!: string;
  cart: Array<Iproduct> = [];
  addProductP(item: Iproduct) {
    // Check if the available quantity is greater than 0
    if (item.availableQuantity <= 0) {
      console.error(`Cannot add ${item.name} to cart. Out of stock.`);
      return;
    }

    const existingItem = this.cart.find((i) => item.id === i.id);
    if (existingItem) {
      if (existingItem.qty < item.availableQuantity) {
        existingItem.qty += 1;
        this.updateProductQuantity(item.id, --item.availableQuantity);
      } else {
        console.error(
          `Cannot add more of ${item.name} to cart. Maximum quantity reached.`
        );
      }
    } else {
      this.cart.push({ ...item, qty: 1 });
      this.updateProductQuantity(item.id, item.quantity - 1);
    }
  }

  updateProductQuantity(productId: string, quantity: number): Promise<any> {
    return fetch(
      `https://66b0b3316a693a95b539d955.mockapi.io/products/${productId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity }),
      }
    ).then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
  }

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
  orders: Array<Iproduct> = [];

  addOrder(orderDetails: any): Promise<any> {
    this.orders.push(orderDetails);
    return this.postOrderToApi(orderDetails);
  }

  postOrderToApi(orderDetails: any): Promise<any> {
    return fetch('https://66b0b3316a693a95b539d955.mockapi.io/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderDetails),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((order) => {
        orderDetails.items.forEach((item: Iproduct) => {
          this.updateProductQuantity(item.id, item.quantity - item.qty);
        });
        return order;
      });
  }

  getOrdersP(): Promise<Iproduct[]> {
    return fetch('https://66b0b3316a693a95b539d955.mockapi.io/orders').then(
      (res) => res.json()
    );
  }}
