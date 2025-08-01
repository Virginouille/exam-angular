import { Component } from '@angular/core';
import { Article } from '../../models/article';
import { ProductserviceService } from '../../services/productservice.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoaderComponent } from '../loader/loader.component';
import { ProductcardComponent } from '../productcard/productcard.component';

@Component({
  selector: 'app-refroidisseurs',
  standalone: true,
  imports: [NavbarComponent, LoaderComponent, ProductcardComponent],
  templateUrl: './refroidisseurs.component.html',
  styleUrl: './refroidisseurs.component.scss'
})
export class RefroidisseursComponent {
  allArticles: Article[] = [];
  filteredArticles: Article[] = [];
  activeFilter: 'refroidisseur' = 'refroidisseur';
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
      article => article.category === 'refroidisseur'
    );
  }

}
