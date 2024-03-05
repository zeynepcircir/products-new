import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/models/ProductModel';
import { ProductService } from 'src/app/services/product.service';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  categoryList: string[] = [];

  @Output() productsBySelectedCategory = new EventEmitter<ProductModel[]>();

  constructor(
    private _http: HttpClient,
    private productService: ProductService,
    private _route: Router
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  handleClick(event: string | null) {
    if (event) {
      console.log('EVENTE TIKLANDI', event);
      this.productService.getCategoryProducts(event).subscribe((response) => {
        console.log('API RESPONSE GELDİ VE EMIT EDİLDİ', response);
        this._route.navigate(['/product-card/' + event]);
      });
    } else {
      this.productService.getProducts().subscribe((response) => {
        this._route.navigate(['/product-card/' + event]);
      });
    }
  }

  getCategories() {
    this.productService.getCategories().subscribe((response) => {
      this.categoryList = response;
    });
  }
}
