import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginAndSignUpComponent } from './root/login-and-sign-up/login-and-sign-up.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import { DashBoardComponent } from './dashboard/dash-board/dash-board.component';
import {MatOption, MatOptionModule} from '@angular/material/core';
import { CustomerComponent } from './dashboard/dash-board/sub-component/customer/customer.component';
import { ItemComponent } from './dashboard/dash-board/sub-component/item/item.component';
import { OrderComponent } from './dashboard/dash-board/sub-component/order/order.component';
import { OrderDetailComponent } from './dashboard/dash-board/sub-component/order-detail/order-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginAndSignUpComponent,
    DashBoardComponent,
    CustomerComponent,
    ItemComponent,
    OrderComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatTabsModule,
    MatOptionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
