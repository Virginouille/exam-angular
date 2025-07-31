import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Article } from '../../models/article';

@Component({
  selector: 'app-productcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent {
  @Input() article!: Article;
}
