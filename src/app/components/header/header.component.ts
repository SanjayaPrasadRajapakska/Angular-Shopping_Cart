import { Component, Input, OnInit } from '@angular/core';
import { CartItem, cart } from 'src/app/model/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
private _cart:cart={items :[]};
itemsQyantity=0;

@Input()
get cart () : cart {
  return this._cart;
}

set cart(cart:cart) {
  this._cart=cart;


this.itemsQyantity = cart.items
.map((item) => item.quantity)
.reduce((prev,current)=>prev+current,0);

}



constructor(private cartService:CartService) { }
  
  getTotal(items:Array<CartItem>):number {
    return this.cartService.getTotal (items);
  }

  onClearCart() {
    this.cartService.clearCart();
  }
}
