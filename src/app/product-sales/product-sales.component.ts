import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-product-sales',
  templateUrl: './product-sales.component.html',
  styleUrls: ['./product-sales.component.css']
})
export class ProductSalesComponent implements OnInit {

  products!: Product[];

  constructor(private productService: AppService) {}
  ngOnInit() {
   
  }

}
