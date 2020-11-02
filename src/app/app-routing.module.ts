import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginAndSignUpComponent} from './root/login-and-sign-up/login-and-sign-up.component';
import {DashBoardComponent} from './dashboard/dash-board/dash-board.component';
import {CustomerComponent} from './dashboard/dash-board/sub-component/customer/customer.component';
import {ItemComponent} from './dashboard/dash-board/sub-component/item/item.component';
import {OrderComponent} from './dashboard/dash-board/sub-component/order/order.component';
import {OrderDetailComponent} from './dashboard/dash-board/sub-component/order-detail/order-detail.component';

const routes: Routes = [
  {path: '', component: LoginAndSignUpComponent},
  {path: 'dashboard', component: DashBoardComponent, children:[
      {path: 'customer', component: CustomerComponent},
      {path: 'item', component: ItemComponent},
      {path: 'order', component: OrderComponent},
      {path: 'order-detail', component: OrderDetailComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
