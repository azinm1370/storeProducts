import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Cart } from '../model/Cart';
import { Order } from '../model/Order';
import { Phone } from '../model/Phone';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { PhoneList } from '../model/Phone.DataSource';

import { CartList } from '../model/Cart.DataSource';
import { Product } from '../model/Product';
import { ProductList } from '../model/Product.DataSource';
@Injectable({
  providedIn: 'root'
})
export class AppService {


  getPhoneList():Observable<Phone[]>{//asenkron metod ile veriler bağımsız bir şekilde işlem görecek
    return of(PhoneList);
  }
  getProductList():Observable<Product[]>{//asenkron metod ile veriler bağımsız bir şekilde işlem görecek
    return of(ProductList);
  }
  
  getCartList():Observable<Cart[]>{//asenkron metod ile veriler bağımsız bir şekilde işlem görecek
    return of(CartList);
  }
 }
