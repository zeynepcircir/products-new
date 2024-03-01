import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ProductModel } from 'src/app/models/ProductModel';
import { ProductService } from 'src/app/services/product.service';
import { ProductEditComponent } from '../product-edit/product-edit.component';
import { DialogService } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { log } from 'console';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [DialogService, MessageService],
})
export class ProductCardComponent implements OnInit {
  viewMode: 'cards' | 'table' = 'cards';
  products: any;
  productList: ProductModel[] = [];
  categoryList: string[] = [];
  selectedCategory: string = '';
  onClose: any;

  constructor(
    private primengConfig: PrimeNGConfig,
    private _productService: ProductService,
    private _route: Router,
    private dialogService: DialogService,
    private activatedRoute: ActivatedRoute
  ) {}

  toggleView(mode: 'cards' | 'table') {
    this.viewMode = mode;
  }

  show(product: ProductModel) {
    console.log(product);
    this.dialogService
      .open(ProductEditComponent, {
        header: 'Choose a Product',
        width: '70%',
        contentStyle: { 'max-height': '500px', overflow: 'auto' },
        baseZIndex: 10000,
        data: product,
      })
      .onClose.subscribe((response: ProductModel) => {
        let index = this.productList.findIndex((pr) => pr.id === response.id);

        if (index !== -1) {
          this.productList[index] = response;
        }
      });
  }



  ngOnInit(): void {
    this.primengConfig.ripple = true;

    this._productService.getProducts().subscribe((response) => {
      this.productList = response;

      this.productList?.forEach((pr) => {
        if (!this.categoryList.includes(pr?.category + '')) {
          this.categoryList.push(pr?.category + '');
        }
      });
    });
  }



  getCategoryList() {
    if (this._productService.data.value) {
      this.productList = this._productService.data.value;
    } else {
      this._productService.getProducts().subscribe((response) => {
        this.productList = response;

        this.productList?.forEach((pr) => {
          if (!this.categoryList.includes(pr?.category + '')) {
            this.categoryList.push(pr?.category + '');
          }
        });
      });
    }
  }

  route2productDetailComponent(product: ProductModel) {
    this._route.navigate(['/product-detail/' + product.title]);
  }

  deleteProduct(product: ProductModel) {
    this.productList = this.productList.filter((pr: ProductModel) => {
      return pr.id !== product.id;
    });
  }

  
}
