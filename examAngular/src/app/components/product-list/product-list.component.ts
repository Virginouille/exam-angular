import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductserviceService } from '../../services/productservice.service';
import { Article } from '../../models/article';
import { LoaderComponent } from '../loader/loader.component';
import { ProductcardComponent } from '../productcard/productcard.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, LoaderComponent, ProductcardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  allArticles: Article[] = [];
  filteredArticles: Article[] = [];
  activeFilter: 'all' | 'promo' | 'ventilateur' | 'climatiseur' | 'refroidisseur' = 'all';
  isLoading = true;

  //Injection productservice
  constructor(private productserviceService: ProductserviceService) { }

  ngOnInit(): void {
    this.productserviceService.getAll().subscribe((articles: Article[]) => {
      this.allArticles = articles;
      this.filteredArticles = articles;
      this.isLoading = false;
    });
  }

  setFilter(filter: 'all' | 'promo' | 'ventilateur' | 'climatiseur' | 'refroidisseur'): void {
    this.activeFilter = filter;
    if (filter === 'all') {
      this.filteredArticles = this.allArticles;
    } else if (filter === 'promo') {
      this.filteredArticles = this.allArticles.filter(a => a.discountPercent > 0);
    } else {
      this.filteredArticles = this.allArticles.filter(a => a.category === filter);
    }
  }

}
