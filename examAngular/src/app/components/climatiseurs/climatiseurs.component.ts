import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ProductserviceService } from '../../services/productservice.service';
import { LoaderComponent } from '../loader/loader.component';
import { ProductcardComponent } from '../productcard/productcard.component';

@Component({
  selector: 'app-climatiseurs',
  standalone: true,
  imports: [LoaderComponent, ProductcardComponent],
  templateUrl: './climatiseurs.component.html',
  styleUrls: ['./climatiseurs.component.scss']
})
export class ClimatiseursComponent implements OnInit {

  allArticles: Article[] = [];
  filteredArticles: Article[] = [];
  activeFilter: 'climatiseur' = 'climatiseur';
  isLoading: boolean = true;

  constructor(private productserviceService: ProductserviceService) { }

  ngOnInit(): void {
    this.productserviceService.getAll().subscribe({
      next: (articles: Article[]) => {
        this.allArticles = articles;
        this.applyFilter();
        this.isLoading = false;
      },
      error: (error) => {
        console.error("Erreur lors du chargement des articles :", error);
        this.isLoading = false;
      }
    });
  }

  // le filtre climatiseur
  applyFilter(): void {
    this.filteredArticles = this.allArticles.filter(
      article => article.category === 'climatiseur'
    );
  }

}
