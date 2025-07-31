import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductserviceService } from '../../services/productservice.service';
import { Article } from '../../models/article';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading = true;
  promoArticles: any[] = [];

  //injection de product service
  constructor(private productserviceService: ProductserviceService) { }

  //A l'initialisation
  ngOnInit() {
    this.productserviceService.getAll().subscribe(articles => {
      this.promoArticles = articles.filter(a => a.discountPercent > 0);
      this.isLoading = false;
    });
  }
}
