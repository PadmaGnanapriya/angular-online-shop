import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginAndSignUpComponent} from './root/login-and-sign-up/login-and-sign-up.component';
import {DashBoardComponent} from './dashboard/dash-board/dash-board.component';

const routes: Routes = [
  {path: '', component: LoginAndSignUpComponent},
  {path: 'dashboard', component: DashBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
