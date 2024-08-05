import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductdataService } from '../productdata.service';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Iproduct } from '../iproduct';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-productoverview',
  standalone: true,
  imports: [RouterLink , RouterOutlet , MatBadgeModule , MatButtonModule , MatIconModule , MatCardModule],
  templateUrl: './productoverview.component.html',
  styleUrl: './productoverview.component.scss'
})
export class ProductoverviewComponent {
  product!: Iproduct;
  trustedUrl!: SafeUrl;
  isLoading: boolean = true;
  msg = '';

  constructor(
    private productservice: ProductdataService,
    private route: ActivatedRoute, // DI
    private sanitizer: DomSanitizer
  ) {}

  // After Initialization of the component
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string; // From URL

    this.productservice
      .getBookByIdP(id)
      .then((data) => {
        this.product = data; // Model
        this.isLoading = false;
        this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.product.imageUrl
        );
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong 🥲';
      });
  }

}
