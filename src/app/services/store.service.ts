import { ObserversModule } from '@angular/cdk/observers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../model/product.model';
import { Observable } from 'rxjs';

const SRORE_BASE_URL = 'https://fakestoreapi.com'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private httpClient : HttpClient) { }

  getAllProducts(
    limit = '12',
    sort = 'desc',
    category?: string
  ): Observable<Array<product>> {
    return this.httpClient.get<Array<product>>(
      `${SRORE_BASE_URL}/products${
        category ? '/category/' + category : ''
      }?sort=${sort}&limit=${limit}`
    );
  }


  getAllCategories(): Observable <Array<string>> {
    return this.httpClient.get  <Array<string>>
    (
      `${SRORE_BASE_URL}/products/categories`
    )
  }
}
