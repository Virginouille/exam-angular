import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../../models/article';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-productcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent {

  @Input() article!: Article;

  @Output() ajouterAuPanier = new EventEmitter<Article>();

  onAddToCart(): void {
    console.log('Ajout au panier :', this.article);
    this.ajouterAuPanier.emit(this.article);
  }
}
