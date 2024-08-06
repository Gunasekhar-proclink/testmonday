import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductdataService } from '../productdata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {


  orders: any[] = [];

  constructor(private dataService: ProductdataService, private router: Router) {}
  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.dataService.getOrdersP().then((orders) => {
      this.orders = orders.reverse();
    });
  }
}
