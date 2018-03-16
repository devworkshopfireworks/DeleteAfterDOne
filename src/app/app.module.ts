import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CustomerComponent } from './customer/customer.component';
import { ItemMenuComponent } from './item-menu/item-menu.component';
import { ItemGridComponent } from './item-grid/item-grid.component';
import { ItemGridItemComponent } from './item-grid/item-grid-item/item-grid-item.component';
import { ItemsCartComponent } from './items-cart/items-cart.component';
import { ItemsCartListComponent } from './header/items-cart-list/items-cart-list.component';
import { AppRoutingModule } from "./app-routing.module"
import { FormsModule } from "@angular/forms"
import { ItemMenuService } from './services/item-menu-service';
import { PlaceOrderComponent } from './place-order/place-order.component';
<<<<<<< HEAD
import { FooterComponent } from './footer/footer.component';
=======
import { WhyusComponent } from './whyus/whyus.component';
>>>>>>> 9c89f8a26a639dec724b33fc956c73493f9edd97


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemMenuComponent,
    ItemGridComponent,
    ItemGridItemComponent,
    ItemsCartComponent,
    ItemsCartListComponent,
    CustomerComponent,
    PlaceOrderComponent,
<<<<<<< HEAD
    FooterComponent
=======
    WhyusComponent
>>>>>>> 9c89f8a26a639dec724b33fc956c73493f9edd97
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule,HttpModule
  ],
  providers: [ItemMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
