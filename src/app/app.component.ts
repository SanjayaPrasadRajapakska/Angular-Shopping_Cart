import { Component,OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { cart } from './model/cart.model';

@Component({
  selector: 'app-root',
  template: `
   <app-header [cart]="cart"></app-header>
   <router-outlet></router-outlet>
  
  `,
  styles: []
})
export class AppComponent implements OnInit {
  cart: cart = {items: []};

  constructor  (private cartService:CartService) {}
  ngOnInit(): void {
   this.cartService.cart.subscribe((_cart) =>{
    this.cart=_cart;
   }) 
  }

}
