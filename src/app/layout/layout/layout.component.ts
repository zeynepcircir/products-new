import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from 'src/app/models/ProductModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(
    private _router: Router,
    private productService: ProductService
  ) {}

  productList: ProductModel[] = [];

  ngOnInit(): void {}

  openProductCardComponent() {
    this._router.navigate(['/product-card']);
  }
  openProductTableComponent() {
    this._router.navigate(['/product-table']);
  }

  getProducts(event: any) {
    console.log('EMIT EDİLEN VERİ GELDİ', event);
    this.productService.selectedProductList(event);
  }
}
