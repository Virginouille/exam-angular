import { Injectable } from '@angular/core';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class PanierStorageService {
  private readonly STORAGE_KEY = 'panier';

  // Récupère le panier depuis le localStorage
  getPanier(): { article: Article, quantite: number }[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  // Sauvegarde le panier dans le localStorage
  setPanier(panier: { article: Article, quantite: number }[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(panier));
  }

  // Vide le panier du localStorage
  clearPanier(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  //Ajouter un article au panier
  ajouterAuPanier(article: Article): void {
    const panier = this.getPanier();

    const existant = panier.find(p => p.article.id === article.id);
    if (existant) {
      existant.quantite++;
    } else {
      panier.push({ article, quantite: 1 });
    }

    this.setPanier(panier);
    console.log('Article ajouté au panier :', article);
  }
}
