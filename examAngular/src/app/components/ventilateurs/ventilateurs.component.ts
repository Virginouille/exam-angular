import { Component } from '@angular/core';
import { Article } from '../../models/article';
import { ProductserviceService } from '../../services/productservice.service';
import { LoaderComponent } from '../loader/loader.component';
import { ProductcardComponent } from '../productcard/productcard.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-ventilateurs',
  standalone: true,
  imports: [LoaderComponent, ProductcardComponent, NavbarComponent],
  templateUrl: './ventilateurs.component.html',
  styleUrl: './ventilateurs.component.scss'
})

export class VentilateursComponent {
  allArticles: Article[] = [];
  filteredArticles: Article[] = [];
  activeFilter: 'ventilateur' = 'ventilateur';
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

  // le filtre ventilateurs
  applyFilter(): void {
    this.filteredArticles = this.allArticles.filter(
      article => article.category === 'ventilateur'
    );
  }

}

