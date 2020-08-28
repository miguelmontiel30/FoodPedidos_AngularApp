import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css'],
  providers: [AuthService] 
})
export class LoginCardComponent implements OnInit {
  mostrar:boolean = true;

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  
  constructor(private authSvc: AuthService ) { }

  ngOnInit(): void {
  }

  onLogin(){
    const { email, password } = this.loginForm.value;
    this.authSvc.login(email, password);
  }
} 