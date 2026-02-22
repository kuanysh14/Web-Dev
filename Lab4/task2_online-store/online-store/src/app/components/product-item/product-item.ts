import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItemComponent {
  @Input() product!: Product;

  share(platform: 'wa' | 'tg') {
  const url = encodeURIComponent(this.product.link);
  const text = encodeURIComponent(`Посмотри на этот товар: ${this.product.name}`);
  
  const shareUrl = platform === 'wa' 
    ? `https://wa.me/?text=${text}%20${url}`
    : `https://t.me/share/url?url=${url}&text=${text}`;
    
  window.open(shareUrl, '_blank');
  }
}

