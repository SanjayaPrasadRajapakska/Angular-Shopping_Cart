
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { product } from 'src/app/model/product.model';
import { StoreService } from 'src/app/services/store.service';
import { Subscription } from 'rxjs';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit,OnDestroy {

  clos = 3;
  category: string | undefined;
  rowHeight = ROWS_HEIGHT[this.clos];
  products:Array<product>  | undefined;
  sort = 'desc';
  count='12';
  productsSubscription :Subscription | undefined;

  constructor(private cartservice : CartService,private storeService : StoreService) { }
  ngOnDestroy(): void {
   if(this.productsSubscription) {
this.productsSubscription.unsubscribe();
   }
  }
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(): void {
    this.productsSubscription = this.storeService
      .getAllProducts(this.count, this.sort, this.category)
      .subscribe((_products) => {
        this.products = _products;
      });
  }






  onColumsCountChange(colsNum: number): void {
    this.clos = colsNum;
    this.rowHeight = ROWS_HEIGHT[this.clos];

  }

  onItemsCountChange(newCount:number):void {
    this.count = newCount.toString();
    this.getProducts();
  }

  onSortChange(newSort:string):void{
    this.sort= newSort;
    this.getProducts();
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
    this.getProducts();
  }

  onAddToCart(product:product):void {
    this.cartservice.addToCart({
        product: product.image,
        name: product.title,
        price: product.price,
        quantity: 1,
        id: product.id,
      
    });
  }
}
