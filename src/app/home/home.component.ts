import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import {AppService} from '../services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products!: Product[] ;

  responsiveOptions: any[] | undefined;

  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getProductList()
    .subscribe(phone=>{
       this.products=phone;

       console.log(this.products);
    });
      // this.AppService.getProductsSmall().then((products) => {
      //     this.products = products;
      // });

     this.responsiveOptions = [
          {
              breakpoint: '1199px',
              numVisible: 1,
              numScroll: 1
          },
          {
              breakpoint: '991px',
              numVisible: 2,
              numScroll: 1
          },
          {
              breakpoint: '767px',
              numVisible: 1,
              numScroll: 1
          }
      ];
  }


}
