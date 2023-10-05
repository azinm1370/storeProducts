import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { Phone } from '../model/Phone';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../services/app.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CartList } from '../model/Cart.DataSource';
import { Cart } from '../model/Cart';
import Swal from 'sweetalert2';
interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit{
  selectedCategories: any[] = [];
  phones!: Phone[];
  categories: any[] = [
      { name: 'Accounting', key: 'A' },
      { name: 'Marketing', key: 'M' },
      { name: 'Production', key: 'P' },
      { name: 'Research', key: 'R' }
  ];
  lstPhones!:Phone[];
  formGroup!: FormGroup;
  selectedPhones!: Phone[] | null;
  phone!: Phone;
  submitted: boolean = false;
  value1!: number ;
  statuses!: any[];
  basketNumber = 1;
  Quantity:any;
  phoneDialog: boolean = false;
  cart!:Cart;
  buyDialog: boolean = false;
  constructor(private appService:AppService,private messageService: MessageService, private confirmationService: ConfirmationService){}
  ngOnInit() {
      this.formGroup = new FormGroup({
          city: new FormControl<string | null>(null)
      });
      this.appService.getPhoneList()
      .subscribe(phone=>{
         this.phones=phone;

         console.log(this.phones);
      });
  }

  openNew() {
  //  this.phone = {
 

  //  };
    this.submitted = false;
    this.phoneDialog = true;
}

  editProduct(phone: Phone) {
    this.phone = { ...phone };
    this.phoneDialog = true;
}
buyProduct(phone: Phone){
  this.phone = { ...phone };
  this.buyDialog = true;
}

deleteProduct(phone: Phone) {
     this.confirmationService.confirm({
       message: 'Are you sure you want to delete ' + phone.Model + '?',
         header: 'Confirm',
       icon: 'pi pi-exclamation-triangle',
       accept: () => {
         this.phones = this.phones.filter((val) => val.Id !== phone.Id);
       //   this.phone = {};
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
       }
     });
}

BasketPhone: Phone | undefined;
status: any = true;
AddToCart(phoneid: any, quantity: any){
// var result = this.phones.filter((val) => val.Id === phoneid);
// console.log(result);
this.status = true;
this.BasketPhone = this.phones?.find(basketphone => basketphone.Id === phoneid);
CartList.filter(x => x.Status == true).forEach((item) => {
   if (item.Phone.Id == this.BasketPhone?.Id) this.status = false;
 });
 if (this.status) {
  const basket = new Cart(quantity, this.BasketPhone,this.basketNumber);

  CartList.push(basket);
  this.basketNumber = 1;
  this.buyDialog = false;
  Swal.fire("Product Added to Cart!!", "Product Successfully Added to Cart!", "success");
 
}
else {
  CartList.filter(x => x.Status == true).forEach((item) => {
    console.log(item.Quantity + " " + quantity + " " + item.Phone.Stock);

    if (item.Phone.Id == this.BasketPhone?.Id) {     
      if (Number(item.Quantity) + Number(quantity) <= Number(item.Phone.Stock)) {
        item.Quantity -= -quantity;
        item.TotalPrice=item.Phone.Price*item.Quantity;
        this.basketNumber = 1;
       Swal.fire("Ürün Adedi Arttırıldı!", "Ürün Adedi Başarıyla Arttırıldı!", "success");
      }
      else {
       Swal.fire("Ürün Adedi Arttırılmadı!", "Ürün Stoğu Yetersiz!", "error");
      }
    }
  })
}


}
hideDialog(){
  this.phoneDialog = false;
}

saveProduct(){

}

minusPhone() {
  this.basketNumber--;
  if (this.basketNumber <= 1) this.basketNumber = 1
}
plusPhone(number: any) {
  this.basketNumber++;
  if (number <= this.basketNumber) this.basketNumber = number

}

hideCartDialog(){
  this.buyDialog = false;
}
}
