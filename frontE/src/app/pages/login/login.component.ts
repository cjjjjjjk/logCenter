import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../../components/logo/logo.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [LogoComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginPageComponent {
  // Current activeted form
  currentForm: string;

  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor() {
    this.currentForm = 'login'
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required, Validators.maxLength(10)]),
      password: new FormControl("", [Validators.required, Validators.minLength(3)])
    })
    this.registerForm = new FormGroup({
      usernameRegister: new FormControl("", [Validators.required, Validators.maxLength(10)]),
      passwordRegister: new FormControl("", [Validators.minLength(3)]),
      passwordConfirm: new FormControl("", [Validators.required, Validators.minLength(3)])
    })
  }

  // Events Handle
  changeForm(e: Event, form: string): void {
    e.preventDefault()
    this.currentForm = form;
  }



}
