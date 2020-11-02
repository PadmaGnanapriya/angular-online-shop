import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginAndSignUpComponent} from './root/login-and-sign-up/login-and-sign-up.component';

const routes: Routes = [
  {path: '', component: LoginAndSignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
