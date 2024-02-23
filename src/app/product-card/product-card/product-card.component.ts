
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ProductModel } from 'src/app/models/ProductModel';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {

  products: any;

  productList: ProductModel[] = [];

  categoryList: string[] = [];
  selectedCategory: string = '';
  onClose: any;
  isTableSelected: boolean = false;



  constructor( private primengConfig: PrimeNGConfig,
     private _productService: ProductService,

  ) {}




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


  getProductsBySelectedCategory(event: ProductModel[]) {
    this.productList = event;
  }

  
 


}
