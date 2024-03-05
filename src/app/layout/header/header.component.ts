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
      console.log('EVENTE TIKLANDI', event);
        this._route.navigate(['/product-card/' + event]);
    
  }

  getCategories() {
    this.productService.getCategories().subscribe((response) => {
      this.categoryList = response;
      // Tüm ürünleri çekmek için
      this.productService.getProducts().subscribe((products) => {
        this.productsBySelectedCategory.emit(products);
      });
    });
  }


  

}
