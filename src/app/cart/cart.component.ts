import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Cart } from '../model/Cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private appService:AppService,private messageService: MessageService, private confirmationService: ConfirmationService){}
  carts!:Cart[];
  basketNumber = 1;
  ngOnInit() {
    this.appService.getCartList()
      .subscribe(cart=>{
         this.carts=cart;

         console.log(this.carts);
      });
  }
  minusPhone() {
    this.basketNumber--;
    if (this.basketNumber <= 1) this.basketNumber = 1
  }
  plusPhone(number: any) {
    this.basketNumber++;
    if (number <= this.basketNumber) this.basketNumber = number
  
  }
}
