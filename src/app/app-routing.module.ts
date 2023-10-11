import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { PhoneComponent } from './phone/phone.component';
import { UserComponent } from './user/user.component';
import { ECommerceDashboardComponent } from './ecommerce-dashboard/ecommerce-dashboard.component';
import { BankingDashboardComponent } from './banking-dashboard/banking-dashboard.component';
const routes: Routes = [
// {path:"",component:ECommerceDashboardComponent},
 {path:"E-CommerceDashboard",component:ECommerceDashboardComponent},
 {path:"BankingDashboard",component:BankingDashboardComponent},
 {path:"phones",component:PhoneComponent},
  // {path:"detail/:id",component:DetailComponent},
  // {path:"contact",component:ContactComponent},
  // {path:"cart",component:CartComponent},
  // {path:"users",component:UserComponent},
  // {path:"addPhone",component:AddPhoneComponent},
  // {path:"orderdetail/:id",component:OrderdetailComponent},
  // {path:"ordersuccess",component:OrdersuccessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
