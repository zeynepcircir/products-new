import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/models/ProductModel';
import { ProductService } from 'src/app/services/product.service';
import { PrimeNGConfig } from 'primeng/api';

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
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getCategories();
  }

  handleClick(event: string | null) {
    if (event) {
      //@ts-ignore
      this.productService.getCategoryProducts(event).subscribe((response) => {
        this.productsBySelectedCategory.emit(response);
      });
    } else {
      this.productService.getProducts().subscribe((response) => {
        this.productsBySelectedCategory.emit(response);
      });
    }
  }

  getCategories() {
    this.productService.getCategories().subscribe((response) => {
      this.categoryList = response;
    });
  }

 
}
