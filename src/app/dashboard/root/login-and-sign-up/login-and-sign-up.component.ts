import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-and-sign-up',
  templateUrl: './login-and-sign-up.component.html',
  styleUrls: ['./login-and-sign-up.component.scss']
})
export class LoginAndSignUpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  login(){
    this.router.navigate(['/dashboard']).then(resp => {
      location.reload();
    }).catch(error => {
      alert('Something went wrong');
    });
  }

  // tslint:disable-next-line:typedef
  signup(){
    this.router.navigate(['/dashboard']).then(resp => {
      location.reload();
    }).catch(error => {
      alert('Something went wrong');
    });
  }
}
