import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',

})

export class ProductsHeaderComponent implements OnInit {

  sort = 'desc';
  ItemShowsCount = 12;
  @Output()colomsCountChange = new EventEmitter <number>();
  @Output()itemsCountChange = new EventEmitter <number>();
  @Output()sortChange = new EventEmitter <string>();


  constructor() { }
  ngOnInit(): void {

  }


  onSortUpdated(newSort: string): void {
    this.sort = newSort;
    this.sortChange.emit(newSort);

  }

  onItemsUpdated(count: number): void {
    this.ItemShowsCount = count;
    this.itemsCountChange.emit(count);
  }

  onColumsUpdated(colsNum:number): void {
    this.colomsCountChange.emit(colsNum);
  }
}
