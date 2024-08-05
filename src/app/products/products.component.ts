import { Component } from '@angular/core';
import { ProdtComponent } from '../prodt/prodt.component';
import { Iproduct } from '../iproduct';
import { ProductdataService } from '../productdata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ ProdtComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  productList: Array<Iproduct> = []; // Model -> View
  isLoading: boolean = true;
  msg = '';

  constructor(public productService: ProductdataService, private router: Router) {}

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies() {
    this.productService
      .getDataP()
      .then((data) => {
        this.productList = data;
        this.isLoading = false;
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong 🥲';
      });
  }
}
