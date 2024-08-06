import { Component, Input , EventEmitter , Output } from '@angular/core';
import { Iproduct } from '../iproduct';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-prodt',
  standalone: true,
  imports: [
    MatButtonModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    RouterLink] , 
  templateUrl: './prodt.component.html',
  styleUrl: './prodt.component.scss'
})
export class ProdtComponent {
  @Output() addItemEvent: EventEmitter<Iproduct> = new EventEmitter<Iproduct>();
  addToCart() {
    this.addItemEvent.emit(this.product);
  }

  @Input() product = {
    id: '',
    name: 'defaultproduct',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg',
    amount : 8.4,
    description :
      'Members of a black ops team must track and eliminate a gang of masked murderers.',
    availableQuantity: 25,
    qty : 0 , 
    quantity : 1 
  };

  @Input() id!: string;

  show = true;
movie: any;

  toggleSummary() {
    this.show = !this.show;
  }

}
