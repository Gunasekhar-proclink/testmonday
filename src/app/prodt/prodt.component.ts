import { Component, Input } from '@angular/core';
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
  @Input() product = {
    id: '',
    name: 'defaultproduct',
    imageUrl:
      'https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg',
    amount : 8.4,
    description :
      'Members of a black ops team must track and eliminate a gang of masked murderers.',
    availableQuantity: 25,
  };

  @Input() id!: string;
  // @Output() deleteMovieEvent = new EventEmitter<IMovie>();
  // @Output() editMovieEvent = new EventEmitter<IMovie>();

  show = true;
movie: any;

  toggleSummary() {
    this.show = !this.show;
  }

  // deleteMovie() {
  //   console.log('Child ❌', this.movie);
  //   this.deleteMovieEvent.emit(this.movie);
  // }

  // editMovie() {
  //   console.log('Child ❌', this.movie);
  //   this.editMovieEvent.emit(this.movie);
  // }
}
