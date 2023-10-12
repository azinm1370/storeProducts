import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { PhoneComponent } from './phone/phone.component';
import { AddPhoneComponent } from './add-phone/add-phone.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { OrderdetailComponent } from './orderdetail/orderdetail.component';
import { OrdersuccessComponent } from './ordersuccess/ordersuccess.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MegaMenuModule } from 'primeng/megamenu';
import { SplitterModule } from 'primeng/splitter';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { PickListModule } from 'primeng/picklist';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { GoogleMapsModule } from '@angular/google-maps';
import { MyMapComponent } from './my-map/my-map.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { AccordionModule } from 'primeng/accordion';
import { CarouselModule } from 'primeng/carousel';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TreeSelectModule } from 'primeng/treeselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ECommerceDashboardComponent } from './ecommerce-dashboard/ecommerce-dashboard.component';
import { BankingDashboardComponent } from './banking-dashboard/banking-dashboard.component';
import { ChartModule } from 'primeng/chart';
import { ChartVerticalBarComponent } from './chart-vertical-bar/chart-vertical-bar.component';
import { ChartPieComponent } from './chart-pie/chart-pie.component';
import { FullCalendarComponent } from './full-calendar/full-calendar.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductSalesComponent } from './product-sales/product-sales.component';
import { LineChartComponent } from './line-chart/line-chart.component';

//import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
//import {IvyCarouselModule} from 'angular-responsive-carousel';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    AboutComponent,
    ContactComponent,
    CartComponent,
    PhoneComponent,
    AddPhoneComponent,
    FooterComponent,
    HeaderComponent,
    DetailComponent,
    OrderdetailComponent,
    OrdersuccessComponent,
    MyMapComponent,
    ECommerceDashboardComponent,
    BankingDashboardComponent,
    ChartVerticalBarComponent,
    ChartPieComponent,
    FullCalendarComponent,
    ListProductsComponent,
    ProductsListComponent,
    ProductSalesComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PanelMenuModule,
    MegaMenuModule,
    SplitterModule,
    SidebarModule,
    ButtonModule,
    SpeedDialModule,
    ToastModule,
    MenuModule,
    MenubarModule,
    PickListModule,
    ListboxModule,
    FormsModule,
    CheckboxModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    RadioButtonModule,
    FileUploadModule,
    GoogleMapsModule,
    InputNumberModule,
    AccordionModule,
    MessagesModule,
    TableModule,
    ToolbarModule,
    DialogModule,
    InputTextareaModule,
    ConfirmDialogModule,
    CarouselModule,
    TreeSelectModule,
    ContextMenuModule,
    ChartModule,
  
  ],
  providers: [MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
