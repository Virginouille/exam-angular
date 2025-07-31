import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductserviceService } from '../../services/productservice.service';
import { Article } from '../../models/article';
import { ProductcardComponent } from '../productcard/productcard.component';
import { PanierStorageService } from '../../services/panier-storage.service';


@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductcardComponent],
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  produits: Article[] = [];
  panier: { article: Article; quantite: number }[] = [];

  constructor(
    private productService: ProductserviceService,
    private panierStorage: PanierStorageService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(data => {
      this.produits = data;

      const panierStocke = this.panierStorage.getPanier();
      this.panier = panierStocke.map(item => {
        const article = data.find(p => p.id === item.article.id);
        return article ? { article, quantite: item.quantite } : null;
      }).filter(p => p !== null) as { article: Article, quantite: number }[];
    });
  }

  ajouterAuPanier(article: Article): void {
    const existant = this.panier.find(p => p.article.id === article.id);
    if (existant) {
      existant.quantite++;
    } else {
      this.panier.push({ article, quantite: 1 });
    }
    this.panierStorage.setPanier(this.panier);
  }

  retirerDuPanier(article: Article): void {
    this.panier = this.panier.filter(p => p.article.id !== article.id);
    this.panierStorage.setPanier(this.panier);
  }

  calculerTotal(): number {
    return this.panier.reduce((total, item) => {
      const prixReduit = item.article.fullPrice * (1 - item.article.discountPercent);
      return total + prixReduit * item.quantite;
    }, 0);
  }

  viderPanier(): void {
    this.panier = [];
    this.panierStorage.clearPanier();
  }

}
