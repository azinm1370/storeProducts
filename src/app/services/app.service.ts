import { Injectable } from '@angular/core';

import { Cart } from '../model/Cart';
import { Order } from '../model/Order';
import { Phone } from '../model/Phone';
import { User } from '../model/User';
import { HttpClient } from '@angular/common/http';
import { PhoneList } from '../model/Phone.DataSource';

import { CartList } from '../model/Cart.DataSource';
import { Product } from '../model/Product';
import { ProductList } from '../model/Product.DataSource';

import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

import { switchMap } from 'rxjs/internal/operators/switchMap';
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AppService {

//   constructor(private _httpClient: HttpClient) {}
//   private _selectedUser: BehaviorSubject<User> =
//   new BehaviorSubject(null);


//   get selectedUser$(): Observable<User> {
//     return this._selectedUser.asObservable();
// }
// set selectedUser(value: User) {
//     this._selectedUser.next(value);
// }

//   public currentUser() {
//     return this._selectedUser.value;
// }


  getPhoneList():Observable<Phone[]>{//asenkron metod ile veriler bağımsız bir şekilde işlem görecek
    return of(PhoneList);
  }
  getProductList():Observable<Product[]>{//asenkron metod ile veriler bağımsız bir şekilde işlem görecek
    return of(ProductList);
  }
  
  getCartList():Observable<Cart[]>{//asenkron metod ile veriler bağımsız bir şekilde işlem görecek
    return of(CartList);
  }

//   createExecutiveRequest(): Observable<any> {
//     console.log(this.currentExecutiveRequest());
//     return this._httpClient
//         .post(this._baseUrl + 'Create', this.currentExecutiveRequest())
//         .pipe(
//             switchMap((response: any) => {
//                 this.selectedExecutiveRequest = this.mapToExecutiveRequest(
//                     cloneDeep(response.data)
//                 );
//                 this.selectedBindingSubjectEditMode = false;
//                 this.selectedDocumentEditMode = false;
//                 this.selectedPersonEditMode = false;
//                 this.selectedRelatedPersonEditMode = false;
//                 return of(response);
//             })
//         );
// }
 }
