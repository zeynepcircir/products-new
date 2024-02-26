import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from '../models/ProductModel';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList: ProductModel[] = [];
  categoryList: string[] = [];
  data = new BehaviorSubject<ProductModel[] | null>(null);
  constructor(private _http: HttpClient) {}

  getProducts(): Observable<ProductModel[]> {
    return this._http.get<ProductModel[]>('https://fakestoreapi.com/products');
  }

  getCategories(): Observable<string[]> {
    return this._http.get<string[]>(
      'https://fakestoreapi.com/products/categories'
    );
  }

  getCategoryProducts(
    selectedCategory: StringMapWithRename
  ): Observable<ProductModel[]> {
    return this._http.get<ProductModel[]>(
      `https://fakestoreapi.com/products/category/` + selectedCategory
    );
  }

  selectedProductList(data: ProductModel[]) {
    this.data.next(data);
  }

  getProductByProductTitle(productName: string) {
    console.log(productName);
    return this.getProducts().pipe(
      map((productList) =>
        productList.find((product) => product.title === productName)
      )
    );
  }
}
