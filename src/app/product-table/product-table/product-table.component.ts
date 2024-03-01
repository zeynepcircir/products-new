import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/ProductModel';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
