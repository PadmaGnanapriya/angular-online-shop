import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAndSignUpComponent } from './login-and-sign-up.component';

describe('LoginAndSignUpComponent', () => {
  let component: LoginAndSignUpComponent;
  let fixture: ComponentFixture<LoginAndSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAndSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAndSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
