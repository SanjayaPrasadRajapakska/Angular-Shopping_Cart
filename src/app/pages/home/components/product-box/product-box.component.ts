import { Component,EventEmitter,Input,Output } from '@angular/core';
import { product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl:'./product-box.component.html', 
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false;
  @Input() product: product | undefined;
  @Output() addToCart = new EventEmitter();

  constructor() {}

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}



